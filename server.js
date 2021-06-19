const server = require('express')();
const http = require('http').createServer(server);
const cors = require('cors');
const path = require('path');
const serveStatic = require('serve-static');
const shuffle = require('shuffle-array');

const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:8080/",
        methods: ["GET", "POST"]
    }
});

server.use(cors());
//server.use(serveStatic(__dirname + "/client/dist"));
//need rooms = { decks: {} }
let newDeck = [];
let newDeckName = "";

io.on('connection', function (socket) {
    console.log('A user connected: ' + socket.id);

    socket.on('join', function (roomId) {
        room = roomId;
        socket.join(roomId);
        console.log(roomId);
    })

    socket.on('exportDeck', function (deck, roomId) {
        newDeck = [];
        newDeckName = deck.name;
        for (const [key, card] of Object.entries(deck.cards)) {
            newDeck.push(card);
        }
        io.to(roomId).emit('importDeck', newDeckName);
    })

    socket.on('dealDecks', function (roomId) {
        io.to(roomId).emit('dealDecks', newDeck);
    })

    socket.on('dealPlayerCards', function (roomId) {
        io.to(roomId).emit('dealPlayerCards');
    })

    socket.on('dealOpponentCards', function (roomId) {
        io.to(roomId).emit('dealOpponentCards');
    })

    socket.on('shuffleDecks', function (roomId) {
        if (newDeck !== []) {
            let deck = newDeck;
            let shuffledDeck = shuffle(deck);
            io.to(roomId).emit('shuffleDecks', shuffledDeck);
        }
    })

    socket.on('cleanUpCards', function (type, roomId) {
        io.to(roomId).emit('cleanUpCards', type);
    })

    socket.on('disconnect', function () {
        console.log('A user disconnected: ' + socket.id);
        newDeck = [];
        newDeckName = "";
    });
});

const port = process.env.PORT || 3000;

http.listen(port, function () {
    console.log('Server started!');
});
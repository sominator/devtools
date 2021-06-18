const server = require('express')();
const http = require('http').createServer(server);
const io = require('socket.io')(http);
const shuffle = require('shuffle-array');
let newDeck = [];
let newDeckName = "";

io.on('connection', function (socket) {
    console.log('A user connected: ' + socket.id);

    socket.on('exportDeck', function (deck) {
        newDeck = [];
        newDeckName = deck.name;
        for (const [key, card] of Object.entries(deck.cards)) {
            newDeck.push(card);
        }
        io.emit('importDeck', newDeckName);
    })

    socket.on('dealDecks', function () {
        io.emit('dealDecks', newDeck);
    })

    socket.on('dealPlayerCards', function () {
        io.emit('dealPlayerCards');
    })

    socket.on('dealOpponentCards', function () {
        io.emit('dealOpponentCards');
    })

    socket.on('shuffleDecks', function () {
        if (newDeck !== []) {
            let deck = newDeck;
            let shuffledDeck = shuffle(deck);
            io.emit('shuffleDecks', shuffledDeck);
        }
    })

    socket.on('cleanUpCards', function (type) {
        io.emit('cleanUpCards', type);
    })

    socket.on('disconnect', function () {
        console.log('A user disconnected: ' + socket.id);
        newDeck = [];
        newDeckName = "";
    });
});

http.listen(3000, function () {
    console.log('Server started!');
});
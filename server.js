const server = require('express')();
const http = require('http').createServer(server);
const io = require('socket.io')(http);
const shuffle = require('shuffle-array');
let newDeck = [];

io.on('connection', function (socket) {
    console.log('A user connected: ' + socket.id);

    socket.on('exportDeck', function (deck) {
        newDeck = [];
        for (const [key, card] of Object.entries(deck.cards)) {
            newDeck.push(card);
        }
        io.emit('importDeck', deck);
    })

    socket.on('dealPlayerCards', function () {
        if (newDeck !== []) {
            let shuffledDeck = shuffle(newDeck);
            io.emit('dealPlayerCards', shuffledDeck);
        }
    })

    socket.on('dealOpponentCards', function () {
        if (newDeck !== []) {
            let shuffledDeck = shuffle(newDeck);
            io.emit('dealOpponentCards', shuffledDeck);
        }
    })

    socket.on('disconnect', function () {
        console.log('A user disconnected: ' + socket.id);
    });
});

http.listen(3000, function () {
    console.log('Server started!');
});
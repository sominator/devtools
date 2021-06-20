import io from 'socket.io-client';
import Card from './Card';

export default class SocketHandler {
    constructor(scene, roomId) {
        scene.socket = io('https://ttrpg-dev-tools.herokuapp.com/');
        scene.roomId = roomId;
        scene.socket.on('connect', () => {
            console.log('Phaser connected! ' + roomId);
            scene.socket.emit('join', scene.roomId);
        })
        scene.socket.on('importDeck', (deckName) => {
            scene.headerText.text = "Simulating " + deckName;
            scene.dealPlayerCards.text = "Deal Player A Cards";
            scene.dealOpponentCards.text = "Deal Player B Cards";
            scene.shuffleDecks.text = "Shuffle Decks";
            scene.cleanUpCards.text = "Clean Up Cards";
            scene.socket.emit('cleanUpCards', 'deal', scene.roomId);
        });

        scene.socket.on('dealDecks', (deck) => {
            let newDeck = deck.reverse();
            for (let card in deck) {
                let newPlayerCard = new Card(scene);
                let newOpponentCard = new Card(scene);
                scene.playerCards.push(newPlayerCard.render(1600, 860, "normal", newDeck[card].name, newDeck[card].description));
                scene.opponentCards.push(newOpponentCard.render(1600, 200, "normal", newDeck[card].name, newDeck[card].description));
            }
        })

        scene.socket.on('dealPlayerCards', () => {
            for (let card in scene.playerCards) {
                scene.playerCards[card].x = 175 + (50 * scene.cardsInPlayerHand);
                scene.playerCards[card].y = 860
                scene.cardsInPlayerHand++;
            }
            scene.cardsInPlayerHand = 0;
        })

        scene.socket.on('dealOpponentCards', () => {
            for (let card in scene.opponentCards) {
                scene.opponentCards[card].x = 175 + (50 * scene.cardsInOpponentHand);
                scene.opponentCards[card].y = 200
                scene.cardsInOpponentHand++;
            }
            scene.cardsInOpponentHand = 0;
        })

        scene.socket.on('shuffleDecks', (shuffledDeck) => {
            for (let card in shuffledDeck) {
                let newPlayerCard = new Card(scene);
                let newOpponentCard = new Card(scene);
                scene.playerCards.push(newPlayerCard.render(1600, 860, "normal", shuffledDeck[card].name, shuffledDeck[card].description));
                scene.opponentCards.push(newOpponentCard.render(1600, 200, "normal", shuffledDeck[card].name, shuffledDeck[card].description));
            }
        })

        scene.socket.on('cleanUpCards', (type) => {
            for (let card in scene.playerCards) {
                scene.playerCards[card].destroy();
            }
            for (let card in scene.opponentCards) {
                scene.opponentCards[card].destroy();
            }
            scene.playerCards = [];
            scene.opponentCards = [];
            scene.cardsInPlayerHand = 0;
            scene.cardsInOpponentHand = 0;
            if (type === "deal") {
                scene.socket.emit('dealDecks', scene.roomId);
            } else if (type === "shuffle") {
                scene.socket.emit('shuffleDecks', scene.roomId);
            }

        })
    }
}
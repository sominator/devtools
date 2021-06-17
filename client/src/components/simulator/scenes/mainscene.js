import { Scene } from 'phaser';
import io from 'socket.io-client';
import Card from '../helpers/card';

export default class MainScene extends Scene {
    constructor () {
        super({ key: 'MainScene' });
    }

    preload() {

    }

    create() {
        this.socket = io('http://localhost:3000');
        this.headerText = this.add.text(100, 30, ['Import a deck to begin simulation.']).setFontSize(35).setFontFamily('Arial').setColor('#17a2b8');

        this.playerHandArea = this.add.rectangle(800, 860, 1400, 230);
        this.playerHandArea.setStrokeStyle(4, 0x17a2b8);
        
        this.opponentHandArea = this.add.rectangle(800, 200, 1400, 230);
        this.opponentHandArea.setStrokeStyle(4, 0x17a2b8);

        this.dealPlayerCards = this.add.text(1500, 445, "Deal Player A Cards").setFontSize(24).setFontFamily('Arial').setColor('#17a2b8').setInteractive();
        this.dealOpponentCards = this.add.text(1500, 475, "Deal Player B Cards").setFontSize(24).setFontFamily('Arial').setColor('#17a2b8').setInteractive();

        this.cardsInPlayerHand = 0;
        this.cardsInOpponentHand = 0;

        this.dealPlayerCards.on('pointerdown', () => {
            this.socket.emit("dealPlayerCards");
        })

        this.dealPlayerCards.on('pointerover', () => {
            this.dealPlayerCards.setColor('#ffffff');
        })

        this.dealPlayerCards.on('pointerout', () => {
            this.dealPlayerCards.setColor('#17a2b8');
        })

        this.dealOpponentCards.on('pointerdown', () => {
            this.socket.emit("dealOpponentCards");
        })

        this.dealOpponentCards.on('pointerover', () => {
            this.dealOpponentCards.setColor('#ffffff');
        })

        this.dealOpponentCards.on('pointerout', () => {
            this.dealOpponentCards.setColor('#17a2b8');
        })
        
        this.socket.on('connect', () => {
            console.log('Phaser connected!');
        })
        this.socket.on('importDeck', (deck) => {
            this.headerText.text = "Simulating " + deck.name;
        });

        this.socket.on('dealPlayerCards', (shuffledDeck) => {
            for (let card in shuffledDeck) {
                let newCard = new Card(this);
                newCard.render(175 + (50 * this.cardsInPlayerHand), 860, shuffledDeck[card].name);
                this.cardsInPlayerHand++;
            }
        })

        this.socket.on('dealOpponentCards', (shuffledDeck) => {
            for (let card in shuffledDeck) {
                let newCard = new Card(this);
                newCard.render(175 + (50 * this.cardsInOpponentHand), 200, shuffledDeck[card].name);
                this.cardsInOpponentHand++;
            }
        })

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })

        this.input.on('dragstart', (pointer, gameObject) => {
            this.children.bringToTop(gameObject);
        })

        this.input.on('dragend', (pointer, gameObject, dropped) => {
            
        })

        this.input.on('drop', (pointer, gameObject, dropZone) => {
            
        })
    }
}
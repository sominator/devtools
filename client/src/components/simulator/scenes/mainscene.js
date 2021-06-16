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
        this.headerText = this.add.text(580, 30, ['Import a deck to begin simulation.']).setFontSize(35).setFontFamily('Trebuchet MS').setColor('#00ffff');

        this.socket.on('connect', () => {
            console.log('Phaser connected!');
        })
        this.socket.on('importDeck', (deck) => {
            this.headerText.text = "Simulating " + deck.name;
            console.log(deck);
            let newCard = new Card(this);
            newCard.render(100, 100);
        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            console.log(pointer);
            gameObject.x = dragX;
            gameObject.y = dragY;
        })

        this.input.on('dragstart', (pointer, gameObject) => {
            console.log(pointer);
            this.children.bringToTop(gameObject);
        })

        this.input.on('dragend', (pointer, gameObject, dropped) => {
            console.log(pointer, gameObject, dropped);
        })

        this.input.on('drop', (pointer, gameObject, dropZone) => {
            console.log(pointer, gameObject, dropZone);
        })
    }
}
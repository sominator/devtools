import { Scene } from 'phaser';
import InteractivityHandler from '../helpers/InteractivityHandler';
import UIHandler from '../helpers/UIHandler';
import SocketHandler from '../helpers/SocketHandler';

export default class MainScene extends Scene {
    constructor () {
        super({ key: 'MainScene' });
    }

    preload() {

    }

    create() {
        this.playerCards = [];
        this.opponentCards = [];

        this.cardsInPlayerHand = 0;
        this.cardsInOpponentHand = 0;

        this.UIHandler = new UIHandler(this);
        this.InteractivityHandler = new InteractivityHandler(this);
        this.SocketHandler = new SocketHandler(this);

    }
}
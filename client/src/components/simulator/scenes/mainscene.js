import { Scene } from 'phaser';

export default class MainScene extends Scene {
    constructor () {
        super({ key: 'MainScene' });
    }

    preload() {

    }

    create() {
        console.log("hello world!");
    }
}
import Phaser from 'phaser';


export default class Sandbox extends Phaser.Scene {
    constructor() {
        super({
            key: 'Sandbox'
        });
    }

    preload() {
        
    }

    create() {

        let self = this;

        this.add.text(10, 10, ['Enter card name:']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff')

        this.textEntry = this.add.text(10, 50, ['']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff');

        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.keyBackspace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);

        this.input.keyboard.on('keydown', function (event) {

            if (event.keyCode === 8 && self.textEntry.text.length > 0) {
                self.textEntry.text = self.textEntry.text.substr(0, self.textEntry.text.length - 1);
            }
            else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)) {
                self.textEntry.text += event.key;
            }

            console.log(event);

        });
        
        this.dealText = this.add.text(75, 350, ['DEAL CARDS']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();

        this.dealText.on('pointerdown', function () {
            let card = self.add.rectangle(0, 0, 130, 180, 0x00ffff);
            let text = self.add.text(-40, -80, [self.textEntry.text]).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#ff69b4');
            let container = self.add.container(200, 110, [card, text]);
            container.setSize(card.width, card.height);
            container.setInteractive();
            self.input.setDraggable(container);
        })

        this.dealText.on('pointerover', function () {
            self.dealText.setColor('#ff69b4');
        })

        this.dealText.on('pointerout', function () {
            self.dealText.setColor('#00ffff');
        })

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
            console.log(pointer);
        })

        this.input.on('dragstart', function (pointer, gameObject) {
            self.children.bringToTop(gameObject);
            console.log(pointer);
        })

        this.input.on('dragend', function (pointer, gameObject, dropped) {
            console.log(pointer, gameObject, dropped);
        })

        this.input.on('drop', function (pointer, gameObject, dropZone) {
            console.log(pointer, gameObject, dropZone);
        })
    }

    update() {

    }
}
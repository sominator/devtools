export default class Card {
    constructor(scene) {
        this.render = (x, y, text) => {
            let cardBG = scene.add.rectangle(0, 0, 148, 148, 0x6666ff);
            let cardText = scene.add.text(-50, -50, text).setFontSize(16).setFontFamily('Trebuchet MS').setColor('#00ffff');
            let card = scene.add.container(x, y, [cardBG, cardText]).setSize(cardBG.width, cardBG.height).setInteractive();
            scene.input.setDraggable(card);
            return card;
        }
    }
}
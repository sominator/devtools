export default class Card {
    constructor(scene) {
        this.render = (x, y, text) => {
            let cardBG = scene.add.rectangle(0, 0, 120, 170, 0x17a2b8);
            cardBG.setStrokeStyle(4, 0xffffff);
            let cardText = scene.add.text(-50, -50, text).setFontSize(16).setFontFamily('Arial').setColor('#ffffff');
            let card = scene.add.container(x, y, [cardBG, cardText]).setSize(cardBG.width, cardBG.height).setInteractive();
            scene.input.setDraggable(card);
            return card;
        }
    }
}
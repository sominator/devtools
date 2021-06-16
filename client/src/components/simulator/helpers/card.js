export default class Card {
    constructor(scene) {
        this.render = (x, y) => {
            let card = scene.add.rectangle(x, y, 148, 148, 0x6666ff).setInteractive();
            scene.input.setDraggable(card);
            return card;
        }
    }
}
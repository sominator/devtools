export default class Card {
    constructor(scene) {
        let card;
        this.render = (x, y, type, name, description) => {
            let cardBG = scene.add.rectangle(0, 0, 120, 170, 0x17a2b8);
            cardBG.setStrokeStyle(4, 0xffffff);
            let cardText = scene.make.text({
                x: -50,
                y: -60,
                text: name,
                origin: { x: 0, y: 0 },
                style: {
                    font: '16px Arial',
                    fill: 'white',
                    wordWrap: { width: 100 }
                }
            });
            this.card = scene.add.container(x, y, [cardBG, cardText]).setSize(cardBG.width, cardBG.height).setInteractive().setData({
                "name": name,
                "description": description
            });
            if (type === "preview") {
                let descriptionText = scene.make.text({
                    x: -50,
                    y: -20,
                    text: description,
                    origin: { x: 0, y: 0 },
                    style: {
                        font: '10px Arial',
                        fill: 'white',
                        wordWrap: { width: 100 }
                    }
                });
                this.card.add(descriptionText);
            }
            scene.input.setDraggable(this.card);
            return this.card;
        }
        this.destroy = () => {
            this.card.destroy();
        }
    }
}
import Card from './Card';

export default class InteractivityHandler {
    constructor(scene) {

        scene.cardPreview = null;

        scene.dealPlayerCards.on('pointerdown', () => {
            scene.socket.emit("dealPlayerCards", scene.roomId);
        })

        scene.dealPlayerCards.on('pointerover', () => {
            scene.dealPlayerCards.setColor('#ffffff');
        })

        scene.dealPlayerCards.on('pointerout', () => {
            scene.dealPlayerCards.setColor('#17a2b8');
        })

        scene.dealOpponentCards.on('pointerdown', () => {
            scene.socket.emit("dealOpponentCards", scene.roomId);
        })

        scene.dealOpponentCards.on('pointerover', () => {
            scene.dealOpponentCards.setColor('#ffffff');
        })

        scene.dealOpponentCards.on('pointerout', () => {
            scene.dealOpponentCards.setColor('#17a2b8');
        })

        scene.shuffleDecks.on('pointerdown', () => {
            scene.socket.emit('cleanUpCards', 'shuffle', scene.roomId);
        })

        scene.shuffleDecks.on('pointerover', () => {
            scene.shuffleDecks.setColor('#ffffff');
        })

        scene.shuffleDecks.on('pointerout', () => {
            scene.shuffleDecks.setColor('#17a2b8');
        })

        scene.cleanUpCards.on('pointerdown', () => {
            scene.socket.emit("cleanUpCards", "deal", scene.roomId);
        })

        scene.cleanUpCards.on('pointerover', () => {
            scene.cleanUpCards.setColor('#ffffff');
        })

        scene.cleanUpCards.on('pointerout', () => {
            scene.cleanUpCards.setColor('#17a2b8');
        })

        scene.input.on('pointerover', (event, gameObjects) => {
            let pointer = scene.input.activePointer;
            if (gameObjects[0].type === "Container" && gameObjects[0].data !== undefined) {
                scene.cardPreview = new Card(scene);
                let renderY;
                if (pointer.worldY >= 400) {
                    renderY = pointer.worldY - 300;
                } else {
                    renderY = pointer.worldY + 300;
                }
                scene.cardPreview.render(pointer.worldX, renderY, "preview", gameObjects[0].data.values.name, gameObjects[0].data.values.description).setScale(2, 2);
            }
        });

        scene.input.on('pointerout', (event, gameObjects) => {
            if (gameObjects[0].type === "Container") {
                if (scene.cardPreview !== undefined) {
                    scene.cardPreview.destroy();
                }
            }
        });

        scene.input.on('pointerdown', (event, gameObjects) => {
            scene.cardPreview.destroy();
        })

        scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })

        scene.input.on('dragstart', (pointer, gameObject) => {
            scene.children.bringToTop(gameObject);
        })

        scene.input.on('dragend', (pointer, gameObject, dropped) => {

        })

        scene.input.on('drop', (pointer, gameObject, dropZone) => {

        })
    }
}
import Phaser from 'phaser';
import MainScene from './scenes/mainscene';

function launch(containerId, roomId) {

    let scene = new MainScene(roomId);

    let game = new Phaser.Game({
        type: Phaser.Auto,
        scale: {
            mode: Phaser.Scale.FIT,
            width: 1800,
            height: 1000
        },
        parent: containerId,
        scene: [scene]
    })

    return game;
}

export default launch;
export { launch };
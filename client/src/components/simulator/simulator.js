import Phaser from 'phaser';
import MainScene from './scenes/mainscene';

function launch(containerId) {
    return new Phaser.Game({
        type: Phaser.Auto,
        scale: {
            mode: Phaser.Scale.FIT,
            width: 1800,
            height: 1000
        },
        parent: containerId,
        scene: [MainScene]
    })
}

export default launch;
export { launch };
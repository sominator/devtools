import Phaser from 'phaser';
import MainScene from './scenes/mainscene';

function launch(containerId) {
    return new Phaser.Game({
        type: Phaser.Auto,
        width: 800,
        height: 600,
        parent: containerId,
        scene: [MainScene]
    })
}

export default launch;
export { launch };
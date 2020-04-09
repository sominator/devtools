import Phaser from "phaser";
import Multiplayer from "./scenes/multiplayer"

function launch(containerId) {
    const config = {
        type: Phaser.AUTO,
        width: 1280,
        height: 780,
        parent: containerId,
        scene: [
            Multiplayer
        ]
    };

    return new Phaser.Game(config);
}

export default launch;
export { launch };
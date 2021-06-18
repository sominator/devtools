export default class UIHandler {
    constructor(scene) {
        scene.headerText = scene.add.text(100, 30, ['Create a deck in the designer to begin simulation.']).setFontSize(35).setFontFamily('Arial').setColor('#5bc0de');

        scene.playerDeckArea = scene.add.rectangle(1600, 860, 170, 230);
        scene.playerDeckArea.setStrokeStyle(4, 0x17a2b8);
        scene.playerAText = scene.add.text(1555, 850, "Player A").setFontSize(24).setFontFamily('Arial').setColor('#17a2b8');

        scene.opponentDeckArea = scene.add.rectangle(1600, 200, 170, 230);
        scene.opponentDeckArea.setStrokeStyle(4, 0x17a2b8)
        scene.playerBText = scene.add.text(1555, 190, "Player B").setFontSize(24).setFontFamily('Arial').setColor('#17a2b8');

        scene.playerHandArea = scene.add.rectangle(750, 860, 1300, 230);
        scene.playerHandArea.setStrokeStyle(4, 0x17a2b8);

        scene.opponentHandArea = scene.add.rectangle(750, 200, 1300, 230);
        scene.opponentHandArea.setStrokeStyle(4, 0x17a2b8);

        scene.dealPlayerCards = scene.add.text(1495, 425, "").setFontSize(24).setFontFamily('Arial').setColor('#17a2b8').setInteractive();
        scene.dealOpponentCards = scene.add.text(1495, 455, "").setFontSize(24).setFontFamily('Arial').setColor('#17a2b8').setInteractive();
        scene.shuffleDecks = scene.add.text(1530, 485, "").setFontSize(24).setFontFamily('Arial').setColor('#17a2b8').setInteractive();
        scene.cleanUpCards = scene.add.text(1520, 515, "").setFontSize(24).setFontFamily('Arial').setColor('#17a2b8').setInteractive();
    }
}
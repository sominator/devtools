<template>
    <div>
        <div id="games-container" v-bind:class="{'modal-showing': modalToggle===true}" v-show="toggle==='viewGamesContainer'">
            <div id="game-generator">
                <p><b-button pill variant="secondary" v-on:click="modalToggle = 'createGame'">+ Create Game</b-button></p>
            </div>
            <div id="games">
                <b-card-group deck>
                    <Game v-for="game in games" :key="game.id" :game="game" @selectGame="selectGame"/>
                </b-card-group>
            </div>
        </div>
        <div id="modal" v-show="modalToggle !== null">
            <CreateGame @createGame = "createGame" @cancelModal="cancelModal" v-show="modalToggle==='createGame'"/>
            <CreateContainer @createContainer ="createContainer" @cancelModal="cancelModal" v-show="modalToggle==='createContainer'"/>
        </div>
        <div id="game-display" v-show="toggle==='viewGame'">
            <p><b-button pill variant="secondary" v-on:click="toggle='viewGamesContainer'">Back to Games</b-button></p>
            <p><b-button pill variant="secondary" v-on:click="modalToggle='createContainer'">+ Create Container</b-button></p>
            <b-card-group deck>
                <Container v-for="container in games[currentGame]" :key="container.id" :container="container" @selectContainer="selectContainer"/>
            </b-card-group>
        </div>
    </div>
</template>

<script>
    import Game from './Game.vue';
    import Container from './Container.vue';
    import CreateGame from './modals/CreateGame.vue';
    import CreateContainer from './modals/CreateContainer.vue';

    export default {
        name: 'Games',
        components: {
            Game,
            Container,
            CreateGame,
            CreateContainer
        },
        data: function () {
            return {
                toggle: "viewGamesContainer",
                modalToggle: null,
                gamesId: 0,
                games: {

                },
                currentGame: null
            }
        },
        methods: {
            cancelModal: function () {
                this.modalToggle = null;
            },
            createGame: function (game) {
                this.games[this.gamesId] = {
                    id: this.gamesId,
                    name: game.name,
                    description: game.description,
                    containersId: 0
                };
                this.gamesId++;
                this.cancelModal();
                console.log(this.games);
            },
            createContainer: function (container) {
                let game = this.games[this.currentGame];
                console.log(game);
                game.containers[game.containersId] = {
                    id: game.containersId,
                    name: container.name,
                    description: container.description,
                    mechanicsId: 0
                };
                game.containersId++;
                this.cancelModal();
                console.log(this.games);
            },
            selectGame: function (id) {
                this.toggle = "viewGame";
                this.currentGame = id;
            }
        }
    }
</script>

<style scoped>
    .modal-showing {
        opacity: 0.3;
    }
    #modal {
        position: fixed;
        bottom: 35%;
        left: 35%;
    }
    #games-container {
        text-align: left;
        margin-top: 20px;
        margin-left: 20px;
    }
    #game-display {
        text-align: left;
        margin-top: 20px;
        margin-left: 20px;
    }
    games {
        text-align: center;
        display: flex;
    }
</style>

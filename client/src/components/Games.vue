<template>
    <div>
        <div id="games-container" v-bind:class="{'modal-showing': this.$store.state.modalState}">
            <div v-show="toggle === 'allGames'">
                <p><b-button pill variant="secondary" v-on:click="displayModal('createGame')">+ Create Game</b-button></p>
                <div id="all-games">
                    <b-card-group deck>
                        <Game v-for="game in this.$store.state.games" :key="game.id" :game="game" @selectGame="selectGame" />
                    </b-card-group>
                </div>
            </div>
            <div v-show="toggle === 'viewGame'">
                <div id="view-game">
                    <p><b-button pill variant="secondary" v-on:click="changeToggle('allGames')">Back to Games</b-button></p>
                    <Containers @displayModal = "displayModal" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Game from './Game.vue';
    import Containers from './Containers.vue';

    export default {
        name: 'Games',
        components: {
            Game,
            Containers
        },
        data: function () {
            return {
                toggle: "allGames"
            }
        },
        methods: {
            changeToggle: function (toggleName) {
                this.toggle = toggleName;
            },
            displayModal: function (modalName) {
                this.$emit('displayModal', modalName)
            },
            selectGame: function (gameId) {
                this.changeToggle("viewGame");
                this.$store.commit("selectGame", gameId);
            }
        }
    }
</script>

<style scoped>
    .modal-showing {
        opacity: 0.3;
    }
    #game-display {
        text-align: left;
        margin-top: 20px;
        margin-left: 20px;
    }
    #all-games {
        text-align: center;
        display: flex;
    }
</style>

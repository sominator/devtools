<template>
    <div id="app">
        <div id="menu-container">
            <b-button-group>
                <b-button variant="info" v-show="rootToggle==='games'">Designer</b-button>
                <b-button v-show="rootToggle==='simulator'" v-on:click="toggleRoot('games')">Designer</b-button>
                <b-button variant="info" v-show="rootToggle==='simulator'">Simulator</b-button>
                <b-button v-show="rootToggle==='games'" v-on:click="toggleRoot('simulator')">Simulator</b-button>
            </b-button-group>
        </div>
        <div id="games-container" v-show="rootToggle === 'games'">
            <Games @displayModal="displayModal" />
            <div id="modal-container" v-show="modalToggle != null">
                <CreateGame v-if="modalToggle === 'createGame'" @createGame="createGame" @cancelModal="cancelModal" />
                <CreateContainer v-else-if="modalToggle === 'createContainer'" @createContainer="createContainer" @cancelModal="cancelModal" />
                <CreateCard v-else-if="modalToggle === 'createCard'" @createCard="createCard" @cancelModal="cancelModal" />
                <CreateListItem v-else-if="modalToggle === 'createListItem'" @createListItem="createListItem" @cancelModal="cancelModal" />
                <CreateMechanic v-else-if="modalToggle === 'createMechanic'" @createMechanic="createMechanic" @cancelModal="cancelModal" />
            </div>
        </div>
        <div id="simulator-container" v-show="rootToggle === 'simulator'">
            <Simulator />
        </div>
    </div>
</template>

<script>
    import Games from './components/Games.vue';
    import Simulator from './components/Simulator.vue';
    import CreateGame from './components/modals/CreateGame.vue';
    import CreateContainer from './components/modals/CreateContainer.vue';
    import CreateCard from './components/modals/CreateCard.vue';
    import CreateListItem from './components/modals/CreateListItem.vue';
    import CreateMechanic from './components/modals/CreateMechanic.vue';

    export default {
        name: 'App',
        components: {
            Games,
            Simulator,
            CreateGame,
            CreateContainer,
            CreateCard,
            CreateListItem,
            CreateMechanic
        },
        data: function () {
            return {
                modalToggle: null,
                rootToggle: "games"
            }
        },
        methods: {
            cancelModal: function () {
                this.modalToggle = null;
                this.$store.commit('modalInactive');
            },
            createGame: function (game) {
                this.$store.commit('createGame', game);
                this.cancelModal();
            },
            createContainer: function (container) {
                this.$store.commit('createContainer', container);
                this.cancelModal();
            },
            createCard: function (card) {
                this.$store.commit('createCard', card);
                this.cancelModal();
            },
            createListItem: function (listItem) {
                this.$store.commit('createListItem', listItem);
                this.cancelModal();
            },
            createMechanic: function (mechanic) {
                this.$store.commit('createMechanic', mechanic);
                this.cancelModal();
            },
            displayModal: function (modalName) {
                this.modalToggle = modalName;
                this.$store.commit('modalActive');
            },
            toggleRoot: function (toggle) {
                this.rootToggle = toggle;
            }
        }
    }
</script>

<style>
    .root-selected {
        background-color: #17a2b8;
    }
    button:focus{
        background-color: #17a2b8;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
    }
    #games-container {
        margin-top: 40px;
        margin-left: 20px;
    }
    #menu-container {
        margin-top: 40px;
        text-align: center;
    }
    #modal-container {
        position: fixed;
        bottom: 40%;
        left: 40%;
    }
    #simulator-container {
        margin-top: 40px;
        margin-left: 20px;
    }
</style>

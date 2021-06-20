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
            <Simulator v-if="this.$store.state.roomId !== null"/>
        </div>
        <div id="img-footer" v-show="!this.$store.state.modalState && rootToggle==='games'">
            <a href="https://www.nightpathpub.com" target="_blank">
                <img src="./assets/Nightpath-Publishing-Logo-Blue-White-Stacked.png" alt="Nightpath Publishing Logo"/>
            </a>
            <a href="mailto:info@entromancy.com">
                <p style="color: #f8f9fa; margin-right: 1vw; margin-top: 1vh">Send Us Feedback!</p>
            </a>
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
    img {
        width: 7%;
        height: auto;
        margin-right: 2vw;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
        min-height: 100vh;
    }
    #games-container {
        margin-top: 40px;
        margin-left: 20px;
    }
    #img-footer {
        position: fixed;
        bottom: 2vh;
        text-align: right;
    }
    #menu-container {
        margin-top: 40px;
        text-align: center;
    }
    #modal-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    #simulator-container {
        margin-top: 40px;
        margin-left: 20px;
    }
    @media screen and (max-width: 900px) {
        img {
            width: 15%;
        }
        #img-footer {
            font-size: 12px;
        }
        #menu-container {
            margin-left: 35px;
        }
    }
</style>

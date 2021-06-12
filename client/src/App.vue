<template>
    <div id="app">
        <div id="app-container">
            <Games @displayModal = "displayModal" />
        </div>
        <div id="modal-container" v-show="modalToggle != null">
            <CreateGame v-if="modalToggle === 'createGame'" @createGame = "createGame" @cancelModal = "cancelModal" />
            <CreateContainer v-else-if="modalToggle === 'createContainer'" @createContainer = "createContainer" @cancelModal = "cancelModal" />
            <CreateMechanic v-else-if="modalToggle === 'createMechanic'" @createMechanic = "createMechanic" @cancelModal = "cancelModal" />
        </div>
    </div>
</template>

<script>
    import Games from './components/Games.vue';
    import CreateGame from './components/modals/CreateGame.vue';
    import CreateContainer from './components/modals/CreateContainer.vue';
    import CreateMechanic from './components/modals/CreateMechanic.vue';

    export default {
        name: 'App',
        components: {
            Games,
            CreateGame,
            CreateContainer,
            CreateMechanic
        },
        data: function () {
            return {
                modalToggle: null
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
            createMechanic: function (mechanic) {
                this.$store.commit('createMechanic', mechanic);
                this.cancelModal();
            },
            displayModal: function (modalName) {
                this.modalToggle = modalName;
                this.$store.commit('modalActive');
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
    }
    #app-container {
        margin-top: 40px;
        margin-left: 20px;
    }
    #modal-container {
        position: fixed;
        bottom: 35%;
        left: 35%;
    }
</style>

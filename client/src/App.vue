<template>
    <div id="app">
        <b-button-group>
            <b-button variant="info" v-on:click="toggle = 'games'">Games</b-button>
            <b-button variant="info" v-on:click="toggle = 'diceroller'">Dice Roller</b-button>
        </b-button-group>
        <Games v-show="toggle === 'games'" />
        <DiceRoller v-show="toggle === 'diceroller'" />
    </div>
</template>

<script>
    import Games from './components/Games.vue';
    import DiceRoller from './components/DiceRoller.vue';

    export default {
        name: 'App',
        components: {
            Games,
            DiceRoller
        },
        data: function () {
            return {
                toggle: "games"
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

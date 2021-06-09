<template>
    <div id="app">
        <b-button-group>
            <b-button variant="primary" v-on:click="toggle = 'mechanics'">Mechanics</b-button>
            <b-button variant="primary" v-on:click="toggle = 'npcs'">NPCs</b-button>
            <b-button variant="primary" v-on:click="toggle = 'locations'">Locations</b-button>
            <b-button variant="primary" v-on:click="toggle = 'diceroller'">Dice Roller</b-button>
        </b-button-group>
        <Mechanics v-show="toggle === 'mechanics'" />
        <NPCs v-show="toggle === 'npcs'" />
        <Locations v-show="toggle === 'locations'"/>
        <DiceRoller v-show="toggle === 'diceroller'" />
    </div>
</template>

<script>
    import Mechanics from './components/Mechanics.vue';
    import NPCs from './components/NPCs.vue';
    import Locations from './components/Locations.vue';
    import DiceRoller from './components/DiceRoller.vue';

    export default {
        name: 'App',
        components: {
            Mechanics,
            NPCs,
            Locations,
            DiceRoller
        },
        data: function () {
            return {
                toggle: "mechanics"
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

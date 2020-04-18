<template>
    <div id="app">
        <button v-on:click="toggle = 'mechanics'">Mechanics</button>
        <button v-on:click="toggle = 'npcs'">NPCs</button>
        <button v-on:click="toggle = 'locations'">Locations</button>
        <Mechanics v-show="toggle == 'mechanics'" />
        <NPCs v-show="toggle == 'npcs'" />
        <Locations v-show="toggle == 'locations'"/>
    </div>
</template>

<script>
    import Mechanics from './components/Mechanics.vue';
    import NPCs from './components/NPCs.vue';
    import Locations from './components/Locations.vue';

    export default {
        name: 'App',
        components: {
            Mechanics,
            NPCs,
            Locations
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

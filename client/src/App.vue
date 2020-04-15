<template>
    <div id="app">
        <button v-on:click="toggle = 'dice roller'">Dice Roller</button>
        <button v-on:click="toggle = 'card simulator'">Card Simulator</button>
        <DiceRoller v-show="toggle == 'dice roller'" />
        <CardSimulator v-show="toggle == 'card simulator'"/>
    </div>
</template>

<script>
    import DiceRoller from './components/DiceRoller.vue';
    import CardSimulator from './components/CardSimulator.vue';

    export default {
        name: 'App',
        components: {
            DiceRoller,
            CardSimulator
        },
        data: function () {
            return {
                toggle: "dice roller"
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

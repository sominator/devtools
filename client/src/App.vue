<template>
    <div id="app">
        <DiceRoller />
        <CardSimulator />
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

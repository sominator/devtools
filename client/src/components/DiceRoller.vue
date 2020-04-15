<template>
    <div id="dice-roller">
        <div id="input">
            <h2>Input</h2>
            <p>x = <input type="number" :placeholder="x" v-model="x"/> y = <input type="number" :placeholder="y" v-model="y"/></p>
            <p>Roll xd2 + y <button v-on:click="roll(2)">Roll it!</button></p>
            <p>Roll xd4 + y <button v-on:click="roll(4)">Roll it!</button></p>
            <p>Roll xd6 + y <button v-on:click="roll(6)">Roll it!</button></p>
            <p>Roll xd8 + y <button v-on:click="roll(8)">Roll it!</button></p>
            <p>Roll xd10 + y <button v-on:click="roll(10)">Roll it!</button></p>
            <p>Roll xd12 + y <button v-on:click="roll(12)">Roll it!</button></p>
            <p>Roll xd20 + y <button v-on:click="roll(20)">Roll it!</button></p>
            <p>Roll xd100 + y <button v-on:click="roll(100)">Roll it!</button></p>
        </div>
        <div id="output">
            <h2>Output</h2>
            <p v-for="(item, index) in response" :key="index">{{item}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DiceRoller',
        data: function () {
            return {
                response: [],
                x: 1,
                y: 0

            }
        },
        methods: {
            roll: function (num) {
                let result = ((Math.floor(1 + (Math.random() * num)) * this.x) + parseInt(this.y));
                this.response.push("Rolled " + this.x + "d" + num + " + " + this.y + " = " + result);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #dice-roller {
        display: flex;
        justify-content: center;
    }
    #input {
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        border-right: 2px solid black;
        padding: 10px;
        margin-top: 10px;
        margin-right: 20px;
    }
    #output {
        max-width: 1000px;
        margin-top: 20px;
    }
    input {
        width: 50px;
    }
</style>

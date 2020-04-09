<template>
    <div id="dice">
        <button v-on:click="rolld2">Roll d2</button>
        <button v-on:click="rolld4">Roll d4</button>
        <button v-on:click="rolld6">Roll d6</button>
        <button v-on:click="rolld8">Roll d8</button>
        <button v-on:click="rolld10">Roll d10</button>
        <button v-on:click="rolld12">Roll d12</button>
        <button v-on:click="rolld20">Roll d20</button>
        <button v-on:click="rolld100">Roll d100</button>
        <p>{{response}}</p>
    </div>
</template>

<script>
    export default {
        name: 'DiceRoller',
        data: function () {
            return {
                response: null
            }
        },
        methods: {
            rolld2: function () {
                this.response = (Math.floor(1 + (Math.random() * 2)));
            },
            rolld4: function () {
                this.response = (Math.floor(1 + (Math.random() * 4)));
            },
            rolld6: function () {
                this.response = (Math.floor(1 + (Math.random() * 6)));
            },
            rolld8: function () {
                this.response = (Math.floor(1 + (Math.random() * 8)));
            },
            rolld10: function () {
                this.response = (Math.floor(1 + (Math.random() * 10)));
            },
            rolld12: function () {
                this.response = (Math.floor(1 + (Math.random() * 12)));
            },
            rolld20: function () {
                this.response = (Math.floor(1 + (Math.random() * 20)));
            },
            rolld100: function () {
                this.response = (Math.floor(1 + (Math.random() * 100)));
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>

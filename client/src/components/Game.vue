<template>
    <div>
        <b-card bg-variant="info" text-variant="white" header-tag="header" footer-tag="footer" id="game">
            <template #header>
                <h3>{{game.name}}</h3>
            </template>
            <template #footer>
                <em>{{game.description}}</em>
            </template>
            <b-button variant="secondary" @click="selectGame">Select Game</b-button>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Game',
        props: {
            game: Object
        },
        methods: {
            selectGame: function () {
                this.$emit("selectGame", this.game.id);
            }
        }
    }
</script>

<style scoped>
    #game {
        min-width: 400px;
        margin-bottom: 30px;
    }
</style>

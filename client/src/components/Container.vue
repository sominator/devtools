<template>
    <div>
        <b-card bg-variant="info" text-variant="white" header-tag="header" footer-tag="footer" id="container">
            <template #header><h3>{{container.name}}</h3></template>
            <b-card-text>
                <p>{{container.description}}
                </p>
            </b-card-text>
            <b-button variant="secondary" @click="selectContainer">Select Container</b-button>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Container',
        props: {
            game: Object
        },
        methods: {
            selectContainer: function () {
                this.$emit("selectContainer");
            }
        }
    }
</script>

<style scoped>
    #container {
        min-width: 400px;
        margin-bottom: 30px;
    }
</style>

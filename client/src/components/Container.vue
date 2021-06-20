<template>
    <div>
        <b-card bg-variant="info" text-variant="white" header-tag="header" footer-tag="footer" id="container">
            <template #header>
                <h3>{{container.name}}</h3>
            </template>
            <b-button variant="secondary" v-if="container.type === 'deck'" @click="selectContainer">Select Deck</b-button>
            <b-button variant="secondary" v-if="container.type === 'list'" @click="selectContainer">Select List</b-button>
            <b-button variant="secondary" v-if="container.type === 'mechanics-group'" @click="selectContainer">Select Mechanics Group</b-button>
            <template #footer>
                <em>{{container.description}}</em>
            </template>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Container',
        props: {
            container: Object
        },
        methods: {
            selectContainer: function () {
                this.$emit("selectContainer", this.container.id, this.container.type);
            }
        }
    }
</script>

<style scoped>
    #container {
        width: 30vw;
        margin-bottom: 30px;
    }
    button {
        min-width: 40%;
    }
    @media screen and (max-width: 900px) {
        #container {
            width: 50vw;
        }
        button {
            min-width: 90%;
        }
    }
</style>

<template>
    <div id="create-game">
        <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" label="Game Name:" label-for="input-1">
                <b-form-input id="input-1" v-model="game.name" placeholder="e.g. 'Entromancy'" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Game Description:" label-for="input-2">
                <b-form-input id="input-2" v-model="game.description" placeholder="e.g. 'New TTRPG'" required></b-form-input>
            </b-form-group>
            <div id="button-footer">
                <b-button type="submit" variant="info">Add Game</b-button>
                <b-button variant="danger" @click="onCancel">Cancel</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'CreateGame',
        data: function () {
            return {
                game: {
                    name: '',
                    description: ''
                }
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();
                this.$emit("createGame", this.game);
            },
            onCancel(event) {
                event.preventDefault();
                this.$emit("cancelModal");
            }
        }
    }
</script>

<style scoped>
    #create-game {
        background-color: #6c757d;
        border-radius: 10px;
        color: white;
        padding: 10px;
    }
    button {
        margin-right: 10px;
    }
    @media screen and (max-width: 900px) {
        button {
            margin-top: 10px;
        }
        #button-footer {
            text-align: center;
        }
    }
</style>

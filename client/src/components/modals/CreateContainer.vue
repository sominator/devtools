<template>
    <div id="create-container">
        <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" label="Container Name:" label-for="input-1">
                <b-form-input id="input-1" v-model="container.name" placeholder="e.g. 'Container 1'" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Container Description:" label-for="input-2">
                <b-form-input id="input-2" v-model="container.description" placeholder="e.g. 'New Container'" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="Container Type:" label-for="input-3">
                <b-form-radio-group id="input-3" v-model = "container.type" required>
                    <b-form-radio value="deck">Deck</b-form-radio>
                    <b-form-radio value="list">List</b-form-radio>
                    <b-form-radio value = "mechanics-group">Mechanics Group</b-form-radio>
                </b-form-radio-group>
            </b-form-group>
            <b-button type="submit" variant="info">Add Container</b-button>
            <b-button variant="danger" @click="onCancel">Cancel</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'CreateContainer',
        data: function () {
            return {
                container: {
                    name: '',
                    description: '',
                    type: ''
                }
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();
                this.$emit("createContainer", this.container);
            },
            onCancel(event) {
                event.preventDefault();
                this.$emit("cancelModal");
            }
        }
    }
</script>

<style scoped>
    #create-container {
        background-color: #6c757d;
        border-radius: 10px;
        color: white;
        padding: 10px;
    }
    button {
        margin-right: 10px;
    }
</style>

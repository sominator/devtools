<template>
    <div id="create-card">
        <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" label="Card Name:" label-for="input-1">
                <b-form-input id="input-1" v-model="card.name" placeholder="e.g. 'Shadow Bolt'" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Card Description:" label-for="input-2">
                <b-form-input id="input-2" v-model="card.description" placeholder="e.g. 'Deals 1d6 damage.'" required></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="info">Add Card</b-button>
            <b-button variant="danger" @click="onCancel">Cancel</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'CreateCard',
        data: function () {
            return {
                card: {
                    name: '',
                    description: ''
                }
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();
                this.$emit("createCard", this.card);
            },
            onCancel(event) {
                event.preventDefault();
                this.$emit("cancelModal");
            }
        }
    }
</script>

<style scoped>
    #create-card {
        background-color: #6c757d;
        border-radius: 10px;
        color: white;
        padding: 10px;
    }
    button {
        margin-right: 10px;
    }
</style>

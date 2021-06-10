<template>
    <div id="create-mechanic">
        <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" label="Mechanic Name:" label-for="input-1">
                <b-form-input id="input-1" v-model="mechanic.name" placeholder="e.g. 'Mechanic 1'" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Mechanic Description:" label-for="input-2">
                <b-form-input id="input-2" v-model="mechanic.description" placeholder="e.g. 'New Mechanic'" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="Dice Model:" label-for="input-3">
                <b-form inline>
                    <b-form-spinbutton v-model="mechanic.x" min="1" max="100"></b-form-spinbutton>
                    <b-form-select id="input-3" v-model="mechanic.diceModel" :options="diceModels" required></b-form-select>
                    <b-form-spinbutton v-model="mechanic.y" min="-100" max="100"></b-form-spinbutton>
                </b-form>
            </b-form-group>
            <b-button type="submit" variant="info">Add Mechanic</b-button>
            <b-button variant="danger" @click="onCancel">Cancel</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'CreateMechanic',
        data: function () {
            return {
                mechanic: {
                    name: '',
                    description: '',
                    diceModel: null,
                    x: 1,
                    y: 0
                },
                diceModels: [
                    { value: null, text: 'Select a dice model', disabled: true },
                    { value: 2, text: "d2" },
                    { value: 4, text: "d4" },
                    { value: 6, text: "d6" },
                    { value: 8, text: "d8" },
                    { value: 10, text: "d10" },
                    { value: 12, text: "d12" },
                    { value: 20, text: "d20" },
                    { value: 100, text: "d100" },
                ]
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();
                this.$emit("createMechanic", this.mechanic);
            },
            onCancel(event) {
                event.preventDefault();
                this.$emit("cancelModal");
            }
        }
    }
</script>

<style scoped>
    #create-mechanic {
        background-color: #6c757d;
        border-radius: 10px;
        color: white;
        padding: 10px;
    }
</style>

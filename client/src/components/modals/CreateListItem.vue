<template>
    <div id="create-list-item">
        <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" label="List Item Name:" label-for="input-1">
                <b-form-input id="input-1" v-model="listItem.name" placeholder="e.g. 'Marty & Marta Barkeep'" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="List Item Description:" label-for="input-2">
                <b-form-input id="input-2" v-model="listItem.description" placeholder="e.g. 'Town Tavernkeeps.'" required></b-form-input>
            </b-form-group>
            <div id="button-footer">
                <b-button type="submit" variant="info">Add List Item</b-button>
                <b-button variant="danger" @click="onCancel">Cancel</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'CreateListItem',
        data: function () {
            return {
                listItem: {
                    name: '',
                    description: ''
                }
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();
                this.$emit("createListItem", this.listItem);
            },
            onCancel(event) {
                event.preventDefault();
                this.$emit("cancelModal");
            }
        }
    }
</script>

<style scoped>
    #create-list-item {
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

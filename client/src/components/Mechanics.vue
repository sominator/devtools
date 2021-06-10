<template>
    <div>
        <div id="mechanics-container" v-bind:class="{'modal-showing': modalToggle===true}">
            <div id="mech-generator">
                <p><b-button pill variant="secondary" v-on:click="modalToggle = true">+ Create Mechanic</b-button></p>
            </div>
            <div id="mechanics">
                <b-card-group deck>
                    <Mechanic v-for="mechanic in mechanics" :key="mechanic.id" :mechanic="mechanic" />
                </b-card-group>
            </div>
        </div>
        <div id="modal" v-show="modalToggle===true">
            <CreateMechanic @createMechanic = "createMechanic" @changeToggle="changeToggle"/>
        </div>
    </div>
</template>

<script>
    import Mechanic from './Mechanic.vue';
    import CreateMechanic from './modals/CreateMechanic.vue';

    export default {
        name: 'Mechanics',
        components: {
            Mechanic,
            CreateMechanic
        },
        data: function () {
            return {
                modalToggle: false,
                mechanicsId: 0,
                mechanics: {

                }
            }
        },
        methods: {
            changeToggle: function () {
                this.modalToggle = !this.modalToggle;
            },
            createMechanic: function (mechanic) {
                this.mechanics[this.mechanicsId] = {
                    id: this.mechanicsId,
                    name: mechanic.name,
                    description: mechanic.description,
                    diceModel: mechanic.diceModel,
                    x: mechanic.x,
                    y: mechanic.y
                };
                this.mechanicsId++;
                this.changeToggle();
            }
        }
    }
</script>

<style scoped>
    .modal-showing {
        opacity: 0.3;
    }
    #modal {
        position: fixed;
        bottom: 35%;
        left: 35%;
    }
    #mechanics-container {
        text-align: left;
        margin-top: 20px;
        margin-left: 20px;
    }
    #mechanics {
        text-align: center;
        display: flex;
    }
</style>

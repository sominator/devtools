<template>
    <div>
        <div id="mechanics-container" v-bind:class="{'modal-showing': this.$store.state.modalState}">
            <div v-show="toggle==='allMechanics'">
                <p><b-button pill variant="secondary" v-on:click="changeToggle('allContainers')">Back to Containers</b-button></p>
                <p><b-button pill variant="secondary" v-on:click="displayModal('createMechanic')">+ Create Mechanic</b-button></p>
                <div id="all-mechanics" v-if="this.$store.state.selectedContainerId !== null">
                    <b-card-group deck>
                        <Mechanic v-for="mechanic in this.$store.getters.selectedContainer.mechanics" :key="mechanic.id" :mechanic="mechanic" />
                    </b-card-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Mechanic from './Mechanic.vue';

    export default {
        name: 'Mechanics',
        components: {
            Mechanic
        },
        data: function () {
            return {
                toggle: "allMechanics"
            }
        },
        methods: {
            changeToggle: function (toggle) {
                this.$emit('changeToggle', toggle);
                this.$store.commit('toggleContainerShowing');
            },
            displayModal: function (modalName) {
                this.$emit('displayModal', modalName)
            },
        }
    }
</script>

<style scoped>
    .modal-showing {
        opacity: 1;
    }
    #all-mechanics {
        text-align: center;
        display: flex;
    }
    @media screen and (max-width: 900px) {
        #all-mechanics {
            justify-content: center;
        }
    }
</style>

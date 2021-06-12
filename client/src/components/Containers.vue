<template>
    <div>
        <div id="containers-container" v-bind:class="{'modal-showing': this.$store.state.modalState}">
            <div v-show="toggle === 'allContainers'">
                <p><b-button pill variant="secondary" v-on:click="displayModal('createContainer')">+ Create Container</b-button></p>
                <div id="all-containers" v-if = "this.$store.state.selectedGameId !== null">
                    <b-card-group deck>
                        <Container v-for="container in this.$store.getters.selectedGame.containers" :key="container.id" :container="container" @selectContainer="selectContainer" />
                    </b-card-group>
                </div>
            </div>
            <div v-show="toggle === 'viewContainer'">
                <div id="view-container">
                    <Mechanics @displayModal ="displayModal" @changeToggle="changeToggle"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Container from './Container.vue';
    import Mechanics from './Mechanics.vue';

    export default {
        name: 'Containers',
        components: {
            Container,
            Mechanics
        },
        data: function () {
            return {
                toggle: "allContainers"
            }
        },
        methods: {
            changeToggle: function (toggleName) {
                this.toggle = toggleName;
            },
            displayModal: function (modalName) {
                this.$emit('displayModal', modalName)
            },
            selectContainer: function (containerId) {
                this.changeToggle("viewContainer");
                this.$store.commit("selectContainer", containerId);
            }
        }
    }
</script>

<style scoped>
    .modal-showing {
        opacity: 0.3;
    }
    #container-display {
        text-align: left;
        margin-top: 20px;
        margin-left: 20px;
    }
    #all-containers {
        text-align: center;
        display: flex;
    }
</style>

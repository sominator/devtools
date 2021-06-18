<template>
    <div>
        <div id="containers-container" v-bind:class="{'modal-showing': this.$store.state.modalState}">
            <div v-show="toggle === 'allContainers'">
                <p><b-button pill variant="secondary" v-on:click="displayModal('createContainer')">+ Create Container</b-button></p>
                <div id="all-containers" v-if="this.$store.state.selectedGameId !== null">
                    <b-card-group deck>
                        <Container v-for="container in this.$store.getters.selectedGame.containers" :key="container.id" :container="container" @selectContainer="selectContainer" />
                    </b-card-group>
                </div>
            </div>
            <div v-show="toggle === 'viewDeck'">
                <div class="view-container">
                    <Deck @displayModal="displayModal" @changeToggle="changeToggle" />
                </div>
            </div>
            <div v-show="toggle === 'viewList'">
                <div class="view-container">
                    <List @displayModal="displayModal" @changeToggle="changeToggle" />
                </div>
            </div>
            <div v-show="toggle === 'viewMechanicsGroup'">
                <div class="view-container">
                    <Mechanics @displayModal="displayModal" @changeToggle="changeToggle" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Container from './Container.vue';
    import Deck from './Deck.vue';
    import List from './List.vue';
    import Mechanics from './Mechanics.vue';

    export default {
        name: 'Containers',
        components: {
            Container,
            Deck,
            List,
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
            selectContainer: function (containerId, containerType) {
                if (containerType === "deck") {
                    this.changeToggle("viewDeck");
                } else if (containerType === "list") {
                    this.changeToggle("viewList");
                } else if (containerType === "mechanics-group") {
                    this.changeToggle("viewMechanicsGroup");
                } 
                this.$store.commit("selectContainer", containerId);
                this.$store.commit('toggleContainerShowing');
            }
        }
    }
</script>

<style scoped>
    .modal-showing {
        opacity: 1;
    }
    #all-containers {
        text-align: center;
        display: flex;
    }
</style>

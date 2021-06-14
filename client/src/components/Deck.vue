<template>
    <div>
        <div id="deck-container" v-bind:class="{'modal-showing': this.$store.state.modalState}">
            <div v-show="toggle==='allCards'">
                <p><b-button pill variant="secondary" v-on:click="changeToggle('allContainers')">Back to Containers</b-button></p>
                <p><b-button pill variant="secondary" v-on:click="displayModal('createCard')">+ Create Card</b-button></p>
                <div id="all-cards" v-if="this.$store.state.selectedContainerId !== null">
                    <b-card-group deck>
                        <Card v-for="card in this.$store.getters.selectedContainer.decks" :key="card.id" :card="card" />
                    </b-card-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from './Card.vue';

    export default {
        name: 'Deck',
        components: {
            Card
        },
        data: function () {
            return {
                toggle: "allCards"
            }
        },
        methods: {
            changeToggle: function (toggle) {
                this.$emit('changeToggle', toggle);
            },
            displayModal: function (modalName) {
                this.$emit('displayModal', modalName)
            }
        }
    }
</script>

<style scoped>
    .modal-showing {
        opacity: 0.3;
    }
    #all-cards {
        text-align: center;
        display: flex;
    }
</style>

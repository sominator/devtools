<template>
    <div>
        <div id="deck-container" v-bind:class="{'modal-showing': this.$store.state.modalState}">
            <div v-show="toggle==='allCards'">
                <p><b-button pill variant="secondary" v-on:click="changeToggle('allContainers')">Back to Containers</b-button></p>
                <p>
                    <b-button pill variant="secondary" v-on:click="displayModal('createCard')">+ Create Card</b-button>
                    <b-button pill variant="danger" v-if="this.$store.state.selectedContainerId !== null" v-on:click="exportDeck">Export into Simulator</b-button>
                </p>
                <div id="all-cards" v-if="this.$store.state.selectedContainerId !== null">
                    <b-card-group deck>
                        <Card v-for="card in this.$store.getters.selectedContainer.cards" :key="card.id" :card="card" />
                    </b-card-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from './Card.vue';
    import io from 'socket.io-client';
    let socket = io('https://ttrpg-dev-tools.herokuapp.com/');

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
                this.$store.commit('toggleContainerShowing');
            },
            displayModal: function (modalName) {
                this.$emit('displayModal', modalName)
            },
            exportDeck: function () {
                socket.emit('exportDeck', this.$store.getters.selectedContainer, this.$store.state.roomId);
            }
        },
        created: function () {
            socket.on('connect', () => {
                this.$store.commit('storeRoomId', socket.id);
                console.log("Vue connected! " + this.$store.state.roomId);
            });

        }
    }
</script>

<style scoped>
    button {
        margin-right: 5px;
    }
    .modal-showing {
        opacity: 1;
    }
    #all-cards {
        text-align: center;
        display: flex;
    }
    @media screen and (max-width: 900px) {
        #all-cards {
            justify-content: center;
        }
    }
</style>

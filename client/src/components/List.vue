<template>
    <div>
        <div id="deck-container" v-bind:class="{'modal-showing': this.$store.state.modalState}">
            <div v-show="toggle==='allListItems'">
                <p><b-button pill variant="secondary" v-on:click="changeToggle('allContainers')">Back to Containers</b-button></p>
                <p>
                    <b-button pill variant="secondary" v-on:click="displayModal('createListItem')">+ Create List Item</b-button>
                    <b-button pill variant="danger" v-if="this.$store.state.selectedContainerId !== null" v-on:click="randomListItem">Select a Random List Item</b-button>
                    <b-modal 
                             v-model="modalShow" 
                             scrollable 
                             centered 
                             header-bg-variant="secondary"
                             header-text-variant="light"
                             body-bg-variant="info"
                             body-text-variant="light"
                             footer-bg-variant="secondary"
                             footer-text-variant="light"
                             cancel-disabled
                             title="Random List Item"
                     >
                        <h1>{{randomObj.name}}</h1>
                        <p style="overflow-wrap: break-word"><em>{{randomObj.description}}</em></p>
                        <template #modal-footer>
                            <b-button variant="danger" @click="modalShow = !modalShow">Close</b-button>
                        </template>
                    </b-modal>
                </p>
                <div id="all-lists" v-if="this.$store.state.selectedContainerId !== null">
                    <b-card-group deck>
                        <ListItem v-for="listItem in this.$store.getters.selectedContainer.listItems" :key="listItem.id" :listItem="listItem" />
                    </b-card-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ListItem from './ListItem.vue';
    
    export default {
        name: 'List',
        components: {
            ListItem
        },
        data: function () {
            return {
                toggle: "allListItems",
                modalShow: false,
                randomObj: {
                    name: "",
                    description: "Create some list items to select one at random."
                }
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
            randomListItem: function () {
                if (this.$store.getters.selectedContainer.listItemsId > 0) {
                    let obj = this.$store.getters.selectedContainer.listItems;
                    let keys = Object.keys(obj);
                    this.randomObj = (obj[keys[keys.length * Math.random() << 0]]);
                }
                this.modalShow = !this.modalShow;
            }
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
    #all-list-items {
        text-align: center;
        display: flex;
    }
</style>

import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        containerShowing: false,
        gamesId: 0,
        games: {},
        modalState: false,
        selectedGameId: null,
        selectedContainerId: null
    },
    getters: {
        selectedGame: state => {
            return state.games[state.selectedGameId];
        },
        selectedContainer: state => {
            return store.getters.selectedGame.containers[state.selectedContainerId];
        }
    },
    mutations: {
        createGame (state, game) {
            state.games[state.gamesId] = {
                id: state.gamesId,
                name: game.name,
                description: game.description,
                containersId: 0,
                containers: {}
            };
            state.gamesId++;
            console.log(state.games);
        },
        createContainer(state, container) {
            if (container.type === "mechanics-group") {
                store.getters.selectedGame.containers[store.getters.selectedGame.containersId] = {
                    id: store.getters.selectedGame.containersId,
                    name: container.name,
                    description: container.description,
                    type: container.type,
                    mechanicsId: 0,
                    mechanics: {}
                }
            } else if (container.type === "deck") {
                store.getters.selectedGame.containers[store.getters.selectedGame.containersId] = {
                    id: store.getters.selectedGame.containersId,
                    name: container.name,
                    description: container.description,
                    type: container.type,
                    cardsId: 0,
                    cards: {}
                }
            }
            store.getters.selectedGame.containersId++;
            console.log(state.games);
        },
        createCard(state, card) {
            store.getters.selectedContainer.cards[store.getters.selectedContainer.cardsId] = {
                id: store.getters.selectedContainer.cardsId,
                name: card.name,
                description: card.description
            }
            store.getters.selectedContainer.cardsId++;
            console.log(state.games);
        },
        createMechanic(state, mechanic) {
            store.getters.selectedContainer.mechanics[store.getters.selectedContainer.mechanicsId] = {
                id: store.getters.selectedContainer.mechanicsId,
                name: mechanic.name,
                description: mechanic.description,
                diceModel: mechanic.diceModel,
                x: mechanic.x,
                y: mechanic.y
            }
            store.getters.selectedContainer.mechanicsId++;
            console.log(state.games);
        },
        modalActive (state) {
            state.modalState = true;
        },
        modalInactive (state) {
            state.modalState = false;
        },
        selectGame (state, gameId) {
            state.selectedGameId = gameId;
        },
        selectContainer(state, containerId) {
            state.selectedContainerId = containerId;
        },
        toggleContainerShowing(state) {
            state.containerShowing = !state.containerShowing;
        }
    }
})

new Vue({
    render: h => h(App),
    store: store,
}).$mount('#app')

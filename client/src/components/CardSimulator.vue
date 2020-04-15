<template>
    <div id="card-simulator">
        <div :id="containerId" v-if="downloaded" />
        <div class="placeholder" v-else>
            Downloading ...
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardSimulator',
        data() {
            return {
                downloaded: false,
                gameInstance: null,
                containerId: 'game-container'
            }
        },
        async mounted() {
            const game = await import('@/game/cardsim')
            this.downloaded = true
            this.$nextTick(() => {
                this.gameInstance = game.launch(this.containerId)
            })
        },
        destroyed() {
            this.gameInstance.destroy(false)
        }
    }
</script>

<style scoped>
    #card-simulator{
        margin-top: 20px;
    }
</style>

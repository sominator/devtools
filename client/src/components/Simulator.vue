<template>
    <div :id="containerId" v-if="downloaded" class="simulator" />
    <div class="placeholder" v-else>
        Starting simulator!
    </div>
</template>

<script>
    export default {
        name: 'Simulator',
        data: function () {
            return {
                containerId: 'simulator',
                downloaded: false,
                gameInstance: null
            }
        },
        async mounted() {
            const game = await import('./simulator/simulator');
            this.downloaded = true;
            this.$nextTick(() => {
                this.gameInstance = game.launch(this.containerId, this.$store.state.roomId);
            })
        },
        destroyed() {
            this.gameInstance.destroy(false);
        }
    }
</script>

<style scoped>
    #simulator {
        text-align: center;
        margin-top: 20px;
        min-width: 100vw;
        min-height: 80vh;
    }
</style>

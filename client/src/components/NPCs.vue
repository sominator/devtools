<template>
    <div id="npcs">
        <div id="npc-generator">
            <p><button>+</button> Create NPC</p>
        </div>
        <NPC />
    </div>
</template>

<script>
    import NPC from './NPC.vue';

    export default {
        name: 'NPCs',
        components: {
            NPC
        }
    }
</script>

<style scoped>
    #npcs {
        margin-top: 20px;
        margin-left: 20px;
    }
    #npc-generator {
       
        width: 160px;
    }
    button {
        border-radius: 15px;
        font-size: 15px;
    }
    button:focus {
        outline: 0;
    }
</style>

<template>
    <div id="mechanics">
        <div id="mech-generator">
            <p><button>+</button> Create Mechanic</p>
        </div>
        <Mechanic />
    </div>
</template>

<script>
    import Mechanic from './Mechanic.vue';

    export default {
        name: 'Mechanics',
        components: {
            Mechanic
        }
    }
</script>

<style scoped>
    #mechanics {
        margin-top: 20px;
        margin-left: 20px;
    }
    #mech-generator {
       
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

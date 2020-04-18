<template>
    <div id="locations">
        <div id="location-generator">
            <p><button>+</button> Create Location</p>
        </div>
        <Location />
    </div>
</template>

<script>
    import Location from './Location.vue';

    export default {
        name: 'Locations',
        components: {
            Location
        }
    }
</script>

<style scoped>
    #locations {
        margin-top: 20px;
        margin-left: 20px;
    }
    #location-generator {
       
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

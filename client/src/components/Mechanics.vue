<template>
    <div>
        <div id="mechanics" v-bind:class="{'modal-showing': modalToggle===true}">
            <div id="mech-generator">
                <p><b-button pill variant="primary" v-on:click="modalToggle = !modalToggle">+ Create Mechanic</b-button></p>
            </div>
        </div>
        <div id="modal" v-show="modalToggle===true">
            <Mechanic />
        </div>
    </div>
</template>

<script>
    import Mechanic from './Mechanic.vue';

    export default {
        name: 'Mechanics',
        components: {
            Mechanic
        },
        data: function () {
            return {
                modalToggle: false
            }
        }
    }
</script>

<style scoped>
    .modal-showing {
        opacity: 0.3;
    }
    #modal {
        position: fixed;
        bottom: 40%;
        left: 40%;
    }
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

<template>
    <div>
        <b-card bg-variant="info" text-variant="white" header-tag="header" footer-tag="footer" id="mechanic">
            <template #header><h3>{{mechanic.name}}</h3></template>
            <b-card-text>
                <p>Dice Model:
                    <span v-if="mechanic.y >= 0">{{mechanic.x}}d{{mechanic.diceModel}}+{{mechanic.y}}</span>
                    <span v-else>{{mechanic.x}}d{{mechanic.diceModel}}{{mechanic.y}}</span>
                </p>
            </b-card-text>
            <b-button variant="secondary" @click="roll">Roll Mechanic</b-button>
            <br /><br />
            <p>{{output}}</p>
            <template #footer><em>{{mechanic.description}}</em></template>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Mechanic',
        props: {
            mechanic: Object
        },
        data: function () {
            return {
                output: "Click 'roll mechanic' to generate a result."
            }
        },
        methods: {
            roll: function () {
                let result = ((Math.floor(1 + (Math.random() * this.mechanic.diceModel)) * this.mechanic.x) + parseInt(this.mechanic.y));
                this.output = "Rolled " + this.mechanic.x + "d" + this.mechanic.diceModel + " + " + this.mechanic.y + " = " + result;
            }
        }
    }
</script>

<style scoped>
    #mechanic {
        min-width: 400px;
        margin-bottom: 30px;
    }
</style>

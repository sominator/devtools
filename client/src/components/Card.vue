<template>
    <div>
        <b-card bg-variant="info" text-variant="white" header-tag="header" footer-tag="footer" id="card">
            <template #header><h3>{{card.name}}</h3></template>
            <b-card-text>
                <p><em>{{card.description}}</em></p>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            card: Object
        }
    }
</script>

<style scoped>
    p {
        text-align: left;
    }
    #card {
        min-height: 400px;
        min-width: 400px;
        margin-bottom: 30px;
    }
</style>

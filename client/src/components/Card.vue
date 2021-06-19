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
        min-height: 30vw;
        width: 30vw;
        margin-bottom: 30px;
    }
    @media screen and (max-width: 900px) {
        #card {
            min-height: 50vw;
            width: 50vw;
        }
    }
</style>

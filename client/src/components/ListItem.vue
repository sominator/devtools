<template>
    <div>
        <b-card bg-variant="info" text-variant="white" header-tag="header" footer-tag="footer" id="list-item">
            <template #header><h3>{{listItem.name}}</h3></template>
            <b-card-text>
                <p><em>{{listItem.description}}</em></p>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'ListItem',
        props: {
            listItem: Object
        }
    }
</script>

<style scoped>
    p {
        text-align: left;
    }
    #list-item {
        min-height: 30vw;
        width: 30vw;
        margin-bottom: 30px;
    }
    @media screen and (max-width: 900px) {
        #list-item {
            min-height: 50vw;
            width: 50vw;
        }
    }
</style>

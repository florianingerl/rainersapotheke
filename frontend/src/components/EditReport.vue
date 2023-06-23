<template>

<h1>Auditbericht editieren</h1>



</template>

<script>

export default {
    name : 'EditAuditReport',
    data(){
        return {
            auditReport : {
            }
        };
    },
    methods: { 

    },
    mounted() {
        let id = this.$route.params.id;
        console.log(id);
    }
}

</script>

<style scoped>
.button-box {
    display:flex;
    orientation: row
}

.button-box button {
    margin: 5px;
}

</style>
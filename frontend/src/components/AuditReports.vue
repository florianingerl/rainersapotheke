<template>

<h1>Auditberichte</h1>

<router-link to="newauditreport" class="btn btn-primary">Neuen Auditbericht erstellen</router-link>

</template>

<script>

export default {
    name : 'AuditReports',
    data(){
        return {
            
        };
    },
    methods : {
       
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
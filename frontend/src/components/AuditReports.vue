<template>

<div class="button-box">
<button type="button" class="col-4 mt-5 btn btn-primary" @click="this.newReportMode=false">Alle Auditberichte anzeigen</button>
<button type="button" class="col-4 mt-5 btn btn-primary" @click="this.newReportMode=true">Neuen Auditbericht erstellen</button>
</div>
<NewReport v-if="newReportMode" />

</template>

<script>
import NewReport from './NewReport.vue';

export default {
    name : 'AuditReports',
    components : { NewReport },
    data(){
        return {
            newReportMode : false
        };
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
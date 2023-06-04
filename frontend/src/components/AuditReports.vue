<template>
<h1>Auditbericht</h1>

<button type="button" class="btn btn-primary" @click="this.newReportMode=true">Neuen Auditbericht erstellen</button>

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
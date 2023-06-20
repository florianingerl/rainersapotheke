<template>

<h1>Neuer Auditbericht</h1>

<div>
  <div class="mb-3 mt-3">
    <label for="name" class="form-label">Name:</label>
    <input v-model="newAuditReport.name" type="text" class="form-control" id="name" placeholder="Name des Auditberichtes" name="name">
  </div>
  <div class="mb-3">
    <label for="author" class="form-label">Author:</label>
    <input v-model="newAuditReport.author" type="text" class="form-control" id="author" placeholder="Autor des Auditberichts" name="author">
  </div>

  <button class="btn btn-primary" @click="createNewAuditReportClicked">Erstellen</button>
</div>

</template>

<script>

export default {
    name : 'NewAuditReport',
    data(){
        return {
            newAuditReport : {
                author: "",
                name: ""
            }
        };
    },
    methods: { 
        createNewAuditReportClicked(){
            console.log('The method was called.')
            console.log( this.newAuditReport );
        }

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
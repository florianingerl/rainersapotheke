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
            var xhr = new XMLHttpRequest();
var url = "http://localhost:3000/insertnewauditreport";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log("I now log the responseText\n");
        console.log(json);
        alert("The new auditreport was successfully inserted!");

        this.$router.push('/auditreports')
    }
};
var data = JSON.stringify(this.newAuditReport);
xhr.send(data);


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
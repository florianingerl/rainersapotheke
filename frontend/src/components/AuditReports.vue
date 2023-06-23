<template>

<h1>Auditberichte</h1>

<router-link to="newauditreport" class="btn btn-primary">Neuen Auditbericht erstellen</router-link>

<div class="container mt-3">
 
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>Author</th>
        <th>Name</th>
        <th>Creation_date</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="ar in auditReports" :key="ar.id">
           <td>{{ ar.id }}</td>
           <td>{{ ar.author }} </td>
           <td>{{ ar.name }} </td>
           <td>{{ ar.creation_date }} </td>
           <td> <router-link to="editauditreport/3" class="btn btn-primary">Edit 1</router-link> </td>
           <td> <button type="button" @click="editClicked(ar.id)">Edit 2</button> </td>
        </tr>
    </tbody>
  </table>


</div>


</template>

<script>

export default {
    name : 'AuditReports',
    data(){
        return {
            auditReports : []
        };
    },
    methods : {
       editClicked(id){
          console.log("You want to edit the report with id " + id);
       }
    },
    mounted(){
        console.log("The component is mounted!");
        fetch("http://localhost:3000/showauditreports").then( res => console.log( res ) );
        fetch("http://localhost:3000/showauditreports").then( res => res.json() ).then (jsonData => this.auditReports= jsonData );
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
<template>

<div class="container mt-3">
 
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>Beschreibung</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="norm in allNorms" :key="norm.id">
           <td>{{ norm.id }}</td>
           <td>{{ norm.beschreibung }} </td>
        </tr>
     
    </tbody>
  </table>

</div>

<router-link to="insertnewnorm" class="btn btn-primary">Neue Norm erstellen</router-link>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Neue Norm im modalen Dialog erstellen
</button>

<!-- The Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Neue Norm erstellen</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <NewNorm/>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>

</template>



<script>
import NewNorm from "./NewNorm.vue";

export default {
  name: 'HelloNorms', 
  components : { NewNorm },
  data(){
    return {
        allNorms :[]
  
    };
  },
  methods: {
   
  },

  mounted(){
    console.log("The component is mounted!");

     fetch("http://localhost:3000/shownorms").then( res => console.log( res ) );
     fetch("http://localhost:3000/shownorms").then( res => res.json() ).then (jsonData => this.allNorms= jsonData );
    
  }
}
</script>
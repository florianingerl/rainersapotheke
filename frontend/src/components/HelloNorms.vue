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

<NewNorm />

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
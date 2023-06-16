<template>

<div>
  <div class="mb-3 mt-3">
    <label for="id" class="form-label">Norm_ID:</label>
    <input v-model="norm.id" type="text" class="form-control" name="id" id="id" placeholder="Geben Sie eine Norm-ID ein">
  </div>
  <div class="mb-3">
    <label for="beschreibung" class="form-label">Norm_Beschreibung:</label>
    <input v-model="norm.beschreibung" type="text" class="form-control" id="beschreibung" placeholder="Geben Sie die Norm-Beschreibung ein" name="beschreibung">
  </div>
  <button class="btn btn-primary" @click="insertNorm">Neue Norm einfügen</button>
</div>



</template>

<script>
export default {
  name: 'NewNorm',
  
  data(){
    return {
        norm : { id: "", beschreibung: "" }
  
    };
  },
  methods: {
      insertNorm(){
        console.log("The method insertNorm was called");
        console.log(this.norm);

        var xhr = new XMLHttpRequest();
var url = "http://localhost:3000/insertnewnorm";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log("I now log the responseText\n");
        console.log(json);
        alert("The new norm was successfully inserted!");

        this.$router.push('/norms')
    }
};
var data = JSON.stringify(this.norm);
xhr.send(data);
    }
   
  },

  mounted(){
    
    
  }
}
</script>
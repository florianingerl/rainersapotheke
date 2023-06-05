<template>
<h1>Auditbericht</h1>

<form>

<div>Selected: {{ selected }}</div>

<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option v-if="this.allNorms.length > 0" >{{ this.allNorms[0].id }}</option>
  <option v-if="this.allNorms.length > 1">{{ this.allNorms[1].id }}</option>
  <option v-for="norm in this.allNorms" :key="norm.id">{{ norm.id }}</option>
</select>

</form>


</template>

<script>
    export default {
        name : 'NewReport',
        setup(){
            console.log("Component was setup!");
        },
        mounted(){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log( xhttp.responseText );
                this.allNorms = JSON.parse(xhttp.responseText);
                console.log( this.allNorms );
            }
            };
            xhttp.open("GET", "http://localhost:3000/shownorms", true);
            xhttp.send();
        },
        
        data(){
            return {
                selected: "",
                allNorms: []
            };
        }
        
    }

</script>
<template>
<h1>Auditbericht</h1>

<form>

<div>Norm: {{ selectedNormId }}</div>

<select v-model="selectedNormId">
  <option disabled value="">Wählen Sie eine Norm</option>
  <option v-for="norm in this.allNorms" :key="norm.id">{{ norm.id }}</option>
</select>

<div>Normpunkt: {{ selectedChapter }}</div>
<select v-model="selectedChapter">
  <option disabled value="">Bitte wählen Sie einen Normpunkt:</option>
  <option v-for="normpunkt in this.normpunkte" :key="normpunkt.beschreibung">{{ normpunkt.beschreibung }}</option>
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
            this.refresh();
        },
        
        data(){
            return {
                selectedNormId: "",
                selectedChapter: "",
                allNorms: [],
                normpunkte : []
            };
        },
        watch : {
            selectedNormId(newNormId, old){
                console.log( {old,newNormId} );

                var xhttp = new XMLHttpRequest();
                
                xhttp.onreadystatechange = () => {
                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log( xhttp.responseText );
                this.normpunkte = JSON.parse(xhttp.responseText);
                console.log( this.normpunkte);
                 }
                };
                xhttp.open("GET", "http://localhost:3000/shownormpunkte/"+ this.selectedNormId, true);
                xhttp.send();

                
            }
        },
        methods :{
            refresh(){
            var xhttp = new XMLHttpRequest();
                
            xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log( xhttp.responseText );
                this.allNorms = JSON.parse(xhttp.responseText);
                console.log( this.allNorms );
            }
            };
            xhttp.open("GET", "http://localhost:3000/shownorms", true);
            xhttp.send();    
            }
        }
        
        
    }

</script>
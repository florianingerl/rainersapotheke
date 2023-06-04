<template>
<h1>Auditbericht</h1>

<form>

<div>Selected: {{ selected }}</div>

<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>

</form>

</template>

<script>
    export default {
        name : 'NewReport',
        
        data(){
            return {
                selected: ""
            };
        }
        
    }

</script>
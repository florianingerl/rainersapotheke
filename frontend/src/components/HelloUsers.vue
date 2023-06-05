<template>

<div class="container mt-3">
 
  <table class="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Vorname</th>
        <th>Nachname</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="user in allUsers" :key="user.id">
           <td>{{ user.id }}</td>
           <td>{{ user.vorname }} </td>
           <td>{{ user.nachname }} </td>
           <td> <button type="button" @click="deleteUser(user.id)">Delete me!</button> </td>
           <td> <button type="button" @click="deleteUser2(user.id)">Delete me 2!</button> </td>
           <td> <button type="button" @click="deleteUser3(user)">Delete me 3!</button> </td>
        </tr>
     
    </tbody>
  </table>

  <a href="http://localhost:3000/getAllUsersInPdf" class="btn btn-primary">Get all the users as a pdf</a>
</div>

</template>

<script>
export default {
  name: 'HelloUsers',
  
  data(){
    return {
        allUsers: [{id: 1, vorname: "Florian", nachname: "Ingerl"}, {id :2, vorname: "Michael", nachname: "Kogan" }]
  
    };
  },
  methods: {
    deleteUser(id){
        console.log("The user with id " + id + " should be deleted!");
        fetch("http://localhost:3000/deleteUser/"+id+"/").then( res => res.json() ).then (jsonData => this.allUsers = jsonData );
    },
    deleteUser2(id){
        console.log("The user with id " + id + " should be deleted in another way!");
        fetch("http://localhost:3000/deleteUser2?id="+id).then( res => res.json() ).then (jsonData => this.allUsers = jsonData );
    },

    deleteUser3(user){
        console.log("The user with id " + user.id + " should be deleted in yet another way!");

        var xhr = new XMLHttpRequest();
var url = "http://localhost:3000/deleteUser3";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log("I now log the responseText\n");
        console.log(json);
        this.allUsers = json;
    }
};
var data = JSON.stringify(user);
xhr.send(data);
    }

  },

  mounted(){
    console.log("The component is mounted!");

    // fetch("http://localhost:3000/").then( res => res.json() ).then( jsonData => this.allUsers = jsonData );
     fetch("http://localhost:3000/").then( res => console.log( res ) );
     fetch("http://localhost:3000/").then( res => res.json() ).then (jsonData => this.allUsers = jsonData );
    
  }
}
</script>
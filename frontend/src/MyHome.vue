<template>
  <NavBar :menu="this.menu" @menu-clicked="menuClicked">
    <h1>This is the content inside the navbar</h1>

    <HelloUsers v-if="menu==='users'"/>
    <HelloWorld v-if="menu==='vue'" />
  </NavBar>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HelloUsers from './components/HelloUsers.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'MyHome',
  components: {
    NavBar,
    HelloUsers,
    HelloWorld
  },
  data(){
    return {
        menu : 'users'
    }
  },

  methods: {
    menuClicked(menu){
        console.log("The menu " + menu + " was clicked!");
        this.menu = menu;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

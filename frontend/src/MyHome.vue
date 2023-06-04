<template>
  <NavBar>
    <h1>This is the content inside the navbar</h1>

    <HelloUsers />
  </NavBar>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HelloUsers from './components/HelloUsers.vue'

export default {
  name: 'MyHome',
  components: {
    NavBar,
    HelloUsers
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

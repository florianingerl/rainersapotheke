<template>
  <NavBar>
    <router-view></router-view>   

  </NavBar>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'MyHome',
  components: {
    NavBar
  },
  data(){
    return {
        
    }
  },

  methods: {
    
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

<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr/>
    <ShowModal/>
    <hr/>
    <TextApp/>
    <hr/>
  </div>
</template>

<script>
import HelloWorld from './components/Springframe/HelloWorld.vue'
import ShowModal from './components/Springframe/ShowModal.vue'
import TextApp from './components/Springframe/TextApp.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ShowModal,
    TextApp
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
hr{
  border: 2px solid pink;
}
</style>

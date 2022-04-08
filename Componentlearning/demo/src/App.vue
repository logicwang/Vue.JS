<template>
  <div id="app">
    <HelloWorld/>
    <hr/>
    <ShowModal/>
    <hr/>
    <TextApp/>
    <hr/>
    <PoPover/>
    <hr/>
  </div>
</template>

<script>
import HelloWorld from './components/Popover/HelloWorld.vue'
import ShowModal from './components/Popover/ShowModal.vue'
import TextApp from './components/Popover/TextApp.vue'
import PoPover from './components/Popover/PoPover.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ShowModal,
    TextApp,
    PoPover
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
}
hr{
  border: 2px solid pink;
}
</style>

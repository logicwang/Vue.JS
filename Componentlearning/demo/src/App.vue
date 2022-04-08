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
    <Dialog/>
    <hr/>
  </div>
</template>

<script>
import HelloWorld from './components/Popover/HelloWorld.vue'
import ShowModal from './components/Popover/ShowModal.vue'
import TextApp from './components/Popover/TextApp.vue'
import PoPover from './components/Popover/PoPover.vue'
import Dialog from './components/Popover/Dialog.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ShowModal,
    TextApp,
    PoPover,
    Dialog
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

<template>
  <div id="app">
    <button @click="show" type="button">xxxx</button>
    <div v-if="seen" class="WYF">
      <div class="box">
        现在你看到我了
        <button @click="show" type="button">关闭</button>
      </div>
    </div>
    {{ message }}
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <v-demo></v-demo>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Demo from './components/Demo.vue';

export default {
  name: 'App',
  methods: {
    show(){
      console.log('sss', this.seen)
      this.seen = !this.seen
    }
  },
  data() {
    return {
      message: 'x',
      seen: false
    }
  },
  components: {
    'v-demo': Demo,
    // HelloWorld
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
.WYF {
  position:fixed;
  background-color: #33333373;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.box {
  background-color: #fff;
  min-width: 320px;
  min-height: 210px;
}
</style>
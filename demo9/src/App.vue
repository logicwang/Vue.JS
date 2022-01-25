<template>
  <div>
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <hr />
    <v-demo1></v-demo1>
    <hr />
    <v-demo2></v-demo2>
    <hr />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Demo1 from "./components/demo1.vue";
import Demo2 from "./components/demo2.vue";

export default {
  // name: 'App',
  // components: {
  //   HelloWorld
  // }
  data() {
    return{
      counter: 0
    }
  },
  components:{
    "v-demo1": Demo1,
    "v-demo2": Demo2,
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
hr {
  margin-top: 20px;
  border: 3px solid #ff000f;
}
div{
  text-align: center;
}
</style>

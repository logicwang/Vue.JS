<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <hr />
    <v-demo1></v-demo1>
    <hr />
    <v-demo2></v-demo2>
    <hr />
    <v-demo3></v-demo3>
    <hr />
    <!--出处： https://cn.vuejs.org/v2/guide/forms.html -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Demo1 from "./components/demo1.vue";
import Demo2 from "./components/demo2.vue";
import Demo3 from "./components/demo3.vue";

export default {
  components: {
    "v-demo1": Demo1,  
    "v-demo2": Demo2,
    "v-demo3": Demo3,
  },
  // name: 'App',
  // components: {
  //   HelloWorld
  // }
  // data() {
  //   return{
  //     counter: 0
  //   }
  // },
};
</script>

<style>
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 3px solid #ff000f;
}
div {
  text-align: center;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

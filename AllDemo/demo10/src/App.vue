<template>
  <div>
    <hr />
    <v-demo1></v-demo1>
    <hr />
    <v-demo2></v-demo2>
    <hr />
    <v-demo3></v-demo3>
    <hr />
    <v-demo4></v-demo4>
    <hr />
    <v-demo5></v-demo5>
    <hr />
    <v-demo6></v-demo6>
    <hr />
    <v-demo7></v-demo7>
    <hr />
    <v-demo8></v-demo8>
    <hr />
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <!--出处： https://cn.vuejs.org/v2/guide/forms.html -->
  </div>
</template>

<script>
import Demo1 from "./components/demo1.vue";
import Demo2 from "./components/demo2.vue";
import Demo3 from "./components/demo3.vue";
import Demo4 from "./components/demo4.vue";
import Demo5 from "./components/demo5.vue";
import Demo6 from "./components/demo6.vue";
import Demo7 from "./components/demo7.vue";
import Demo8 from "./components/demo8.vue";

export default {
  components: {
    "v-demo1": Demo1,
    "v-demo2": Demo2,
    "v-demo3": Demo3,
    "v-demo4": Demo4,
    "v-demo5": Demo5,
    "v-demo6": Demo6,
    "v-demo7": Demo7,
    "v-demo8": Demo8,
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

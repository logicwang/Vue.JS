<template>
  <div id="app">
    <hr />
    <button @click="show" type="button">xxxx</button>
    <div v-if="seen" class="WYF">
      <div class="box">
        现在你看到我了
        <button @click="show" type="button">关闭</button>
      </div>
    </div>
    {{ message }}
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <v-demo1></v-demo1>
    <hr />
   <v-demo2></v-demo2> 
    <hr />
    <v-demo3></v-demo3>
    <hr />
    <v-demo4></v-demo4>
    <hr />
    <v-demo5></v-demo5>
    <v-demo6></v-demo6>
    <!-- <v-demo7></v-demo7> -->
    <!-- <v-demo8></v-demo8> -->
    <!-- <v-demo9></v-demo9> -->
    <!-- <v-demo10></v-demo10> -->
    <!-- <v-demo11></v-demo11> -->
    <!-- <v-demo12></v-demo12> -->
    <!-- <v-demo13></v-demo13> -->
    <!-- <v-demo14></v-demo14> -->
    <!-- <v-demo15></v-demo15>  -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Demo1 from "./components/demo1.vue";
import Demo2 from "./components/demo2.vue";
import Demo3 from "./components/demo3.vue";
import Demo4 from "./components/demo4.vue";
import Demo5 from "./components/demo5.vue";
import Demo6 from "./components/demo6.vue";
// import Demo7 from "./components/demo7.vue";
// import Demo8 from "./components/demo8.vue";
// import Demo9 from "./components/demo9.vue";
// import Demo10 from "./components/demo10.vue";
// import Demo11 from "./components/demo11.vue";
// import Demo12 from "./components/demo12.vue";
// import Demo13 from "./components/demo13.vue";
// import Demo14 from "./components/demo14.vue";
// import Demo15 from "./components/demo15.vue";
export default {
  name: "App",
  methods: {
    show() {
      console.log("sss", this.seen);
      this.seen = !this.seen;
    },
  },
  data() {
    return {
      message: "x",
      seen: false,
    };
  },
  components: {
    "v-demo1": Demo1,
    "v-demo2": Demo2,
    "v-demo3": Demo3,
    "v-demo4": Demo4,
    "v-demo5": Demo5,
    "v-demo6": Demo6,
    // "v-demo7": Demo7,
    // "v-demo8": Demo8,
    // "v-demo9": Demo9,
    // "v-demo10": Demo10,
    // "v-demo11": Demo11,
    // "v-demo12": Demo12,
    // "v-demo13": Demo13,
    // "v-demo14": Demo14,
    // "v-demo15": Demo15,

    // HelloWorld
  },
};
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
  position: fixed;
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
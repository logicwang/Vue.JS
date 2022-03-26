<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <router-link to="/index">首页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/friend">朋友圈</router-link>
      <router-view></router-view>
      <!-- <HelloWorld/> -->
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
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
</style>

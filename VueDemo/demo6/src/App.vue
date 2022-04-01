<template>
<div>
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button v-on:click="count++">你点击了我 {{ count }} 下.</button>
  <button v-on:click="count++">你点击了我 {{ count }} 下.</button>
  <button v-on:click="count++">你点击了我 {{ count }} 下.</button>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  // name: 'App',
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      count: 0,
    };
  },
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
</style>

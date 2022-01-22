<template>
  <div>
    <ul class="demo">
      <li v-for="value in object" :key="value">
        {{ value }}
      </li>
    </ul>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
export default {
  data() {
    return {
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
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

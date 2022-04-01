<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

// export default {
//   name: "App",
//   components: {
//     HelloWorld,
//   },
// };
export default {
  data() {
    return {
      parentMessage: "Parent",
      items: [
      { message: "Foo" },
      { message: "Bar" }
      ],
    };
  },
};
</script>

<style>
/* #app  */
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

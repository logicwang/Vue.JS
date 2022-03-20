<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
    <router-link :to="{ name: '/NewsApp', params: { userId: 1111 } }">click to news page</router-link>
  </div>
</template>
 
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    routerTo() {
      this.$router.push({ name: "NewsApp", params: { userId: 123 } });
    },
  },
};
</script>
 
<style>
</style>
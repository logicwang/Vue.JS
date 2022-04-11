<template id="news">
  <div>
    <h3>{{ title }}</h3>
    <ul class="home">
      <li v-for="(data, index) in newsList" :key="index">{{ data }}</li>
    </ul>
  </div>
</template>
<style scoped>
.homn li {
  display: block;
}
</style>
<script>
export default {
  name: "NewsApp",
  dara() {
    return {
      title: "首页",
      newList: ["11111", "aaaaaaaa", "aaaaaaaaaaaaa"],
    };
  },
};
</script>
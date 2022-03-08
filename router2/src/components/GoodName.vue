<template>
  <ul>
    <li
      @click="getGdoos(goods.id)"
      v-for="(goods, index) in goodsList"
      :key="index"
    >
      {{ goods.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "GoodName",
  data: function () {
    return {
      goodsList: [
        { id: 1, name: "小明" },
        { id: 2, name: "小花" },
        { id: 3, name: "小红" },
      ],
    };
  },
  methods: {
    getGdoos: function (id) {
      console.log(id);
      // 详情页跳转是编程式路由,push后面是跳转路径
      this.$router.push("/goods/detail");
    },
  },
};
</script>

<style>
</style>


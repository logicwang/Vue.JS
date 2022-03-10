<template>
  <div class="test">
    This is id :{{ router.params.testId }}
    <br />
    This is id :{{ router.params.testName }}

    <router-link to="/test/title1">1</router-link>
    <router-link to="/test/title2">2</router-link>
    <router-view></router-view>
    <div @click="gotoGoods">转跳详情页面</div>
    <router-link v-bind:to="{ name: 'goods' }"
      >用路由命名的方式转跳</router-link
    >
  </div>
</template>
<script>
export default {
  name:'TestAPP',
  data() {
    return {
      msg: "xxxxx",
    };
  },
  methods: {
    gotoGoods() {
      this.$router.push({
        path: "/goods",
        query: {
          goodsId: 666,
        },
      });
    },
  },
};
</script>
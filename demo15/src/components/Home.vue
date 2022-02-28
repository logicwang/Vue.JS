<template>
  <!-- 所有的内容要被根节点包含起来 -->
  <div>
    <v-header></v-header>
    <h2>首:{{ msg }}</h2>
    <button @click="run()">执行run方法</button>
  </div>
</template>
<script>
//引入头部组件
import Header from "./Header.vue";
export default {
  data() {
    return {
      msg: "msg",
    };
  },
  methods: {
    run() {
      alert(this.msg);
    },
  },
  components: {
    "v-header": Header,
  },
};
</script>
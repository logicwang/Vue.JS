<template>
  <div>
    demo3
    <v-home></v-home>
    <v-news></v-news>
  </div>
</template>
<script>
import Home from "./Home.vue";
import News from "./News.vue";
export default {
  data() {
    return {
      msg: "你好vue",
    };
  },
  components: {
    "v-home": Home,
    "v-news": News,
  },
};
</script>
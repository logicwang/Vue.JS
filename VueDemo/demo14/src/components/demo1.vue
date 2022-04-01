<template>
<div class="parent">
    <p>父组件: {{sthGiveChild}}</p>
    <Child v-model="sthGiveChild"></Child>
</div>
</template>
<script>
import Child from "./child";
export default {
  data() {
    return {
      sthGiveChild: "xxxxx",
    };
  },
  components: {
    Child,
  },
};
</script>
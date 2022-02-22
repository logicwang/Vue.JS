<template>
<div class="parent">
  <p>我: {{sthGiveChild}}</p>
  <Child @returnBack="turnBack" :give="sthGiveChild"></Child>
</div>
</template>
<script>
import Child from './child';
export default {
  data() {
    return {
      sthGiveChild: '小王'
    };
  },
  components: {
    Child
  },
  methods: {
    turnBack(val) {
      this.sthGiveChild = val;
    }
  }
}
</script>
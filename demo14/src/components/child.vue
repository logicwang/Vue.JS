<!-- child -->
<template>
<div class="child">
  <p>他(子组件):{{give}}</p>
  <a href="javascript:;" rel="external nofollow" @click="returnBackFn">回应</a>
</div>
</template>
<script>
export default {
  props: {
    give: String
  },
  methods: {
    returnBackFn() {
      this.$emit('returnBack', '小李');
    }
  }
}
</script>
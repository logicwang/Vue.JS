<template>
  <div>
    <button-counter></button-counter>
    <button v-on:click="count++">你点击了我 {{ count }} 次.</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>
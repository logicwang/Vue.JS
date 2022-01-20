<template>
  <div>
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
  <!-- 出处L:https://cn.vuejs.org/v2/guide/list.html -->
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>
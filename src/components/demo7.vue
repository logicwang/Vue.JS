<template>
  <div>
    <div v-if="type === 'A'">A</div>
    <div v-if="type === 'b'">b</div>
    <div v-else-if="type === 'c'">c</div>
    <div v-else>Not A/B/C</div>
    <h1 v-show="ko">h1111</h1>
    <!-- 出处： https://cn.vuejs.org/v2/guide/conditional.html -->
  </div>

</template>
<script>
export default {
  data: () => {
    return {
      type: "A",
      ko: true,
    };
  },
};
</script>
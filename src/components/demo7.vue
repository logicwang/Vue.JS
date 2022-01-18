<template>
  <div>
    <div v-if="type === 'A'">A</div>
    <div v-if="type === 'b'">b</div>
    <div v-else-if="type === 'c'">c</div>
    <div v-else>Not A/B/C</div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      type :"A",
    };
  },
};
</script>
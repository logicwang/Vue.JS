<template>
  <ul class="demo">
    <li v-for="value in object" :key="value">
      {{ value }}
    </li>
  </ul>
  <!-- 出处：https://cn.vuejs.org/v2/guide/list.html -->
</template>
<script>
export default {
  data() {
    return {
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
    };
  },
};
</script>

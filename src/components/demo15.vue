<template>
  <ul v-if="todos.length">
    <li v-for="todo in todos" :key="todo">
      {{ todo }}
    </li>
  </ul>
  <p v-else>No todos left!</p>
  <!--出处： https://cn.vuejs.org/v2/guide/list.html -->
</template>
<script>
export default {
  data() {
    return {
      todo: [1, 2, 3, 4, 5],
    };
  },
};
</script>
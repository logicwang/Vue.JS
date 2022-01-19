<template>
  <ul v-if="todos.length">
    <li v-for="todo in todos" :key="todo">
      {{ todo }}
    </li>
  </ul>
  <p v-else>No todos left!</p>
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
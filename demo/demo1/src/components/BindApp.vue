<template>
 <div id="app-4">
  <ol>
    <li v-for="todo in todos" :key="todo.todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
</template>

<script>
export default {
  name: "BindApp",
  data() {
    return {
        todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
    };
  },
};
</script>

<style>
</style>
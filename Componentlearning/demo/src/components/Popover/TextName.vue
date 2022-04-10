<template>
  <div id="app">
    <ul>
      <li v-for="todo in todos" :key="todo.todos">
        <span>{{ todo.text }}</span>
        <button @click="removeTodo($index)">X</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TextName",
  data() {
    return {
      todos: [
        { text: "Learn Vue.js" },
        { text: "Add some todos" },
        { text: "Learn JavaScript" },
        { text: "Build Something Awesome" },
      ],
    };
  },
  methods: {
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>
<style>
ul {
  list-style-type: none;
}
span {
  padding-top: 20px;
}
</style>
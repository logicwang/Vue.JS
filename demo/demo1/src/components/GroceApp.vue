<template>
  <div id="app-7">
    <ol>
      <todo-item
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id"
      ></todo-item>
      <li>{{ todo.text }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "GroceApp",
  data() {
    return {
          props: ['todo'],
      groceryList: [
        { id: 0, text: "蔬菜" },
        { id: 1, text: "奶酪" },
        { id: 2, text: "随便其它什么人吃的东西" },
      ],
    };
  },
};
</script>

<style>
</style>
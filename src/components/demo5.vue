<template>
  <div>
    <!-- <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. Feed the cat"
      />
      <button>Add</button>
    </form> -->
    <ul>
      <!-- <li
        is="todo-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
      ></li> -->
      <li v-for="item of list" v-bind:key="item.title">
        {{ item.title }}
      </li>
      <div>
        <span v-for="item of data" v-bind:key="item">{{item +5}},</span>
      </div>
      <div v-for="(value, name) in object" v-bind:key="value">
        {{name}}: {{ value }} 
      </div>    </ul>
  </div>
</template>
<script >
// https://cn.vuejs.org/v2/guide/list.html
export default {
  data() {
    return {
      list: [
        { title: '1' },
        { title: '2' },
        { title: '3' },
        { title: '4' },
        { title: '5' },
        { title: '6' },
      ],
      data: [1,2,3,4,5,6,7,8,9],
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  }
}
// Vue.component("todo-item", {
//   template:
//     "\
//     <li>\
//       {{ title }}\
//       <button v-on:click=\"$emit('remove')\">Remove</button>\
//     </li>\
//   ",
//   props: ["title"],
// });

// new Vue({
//   el: "#todo-list-example",
//   data: {
//     newTodoText: "",
//     todos: [
//       {
//         id: 1,
//         title: "Do the dishes",
//       },
//       {
//         id: 2,
//         title: "Take out the trash",
//       },
//       {
//         id: 3,
//         title: "Mow the lawn",
//       },
//     ],
//     nextTodoId: 4,
//   },
//   methods: {
//     addNewTodo: function () {
//       this.todos.push({
//         id: this.nextTodoId++,
//         title: this.newTodoText,
//       });
//       this.newTodoText = "";
//     },
//   },
// });
</script>
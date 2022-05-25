<template>
  <div>
    <div>{{ message }}</div>
    <div id="app-2">
      <span v-bind:title="age">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span>

      <div id="app-3">
        <p v-if="seen">现在你看到我了</p>
      </div>

      <div id="app-4">
        <ol>
          <li :key="todo" v-for="todo in todos">
            {{ todo.text }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Vue!",

      age: "页面加载于 " + new Date().toLocaleString(),

      seen: true,

      todos: [
        { text: "学习 JavaScript" },
        { text: "学习 Vue" },
        { text: "整个牛项目" },
      ],
    };
  },
};
</script>
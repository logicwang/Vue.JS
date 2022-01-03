<template>
  <div>
    <ul id="v-for-object" class="demo">
      <li v-for="value in object" v-bind:key="value.id">
        {{ value }}
      </li>
    </ul>
  </div>
</template>
<script>
new Vue({
  el: "#v-for-object",
  data: {
    object: {
      title: "How to do lists in Vue",
      author: "Jane Doe",
      publishedAt: "2016-04-10",
    },
  },
});
</script>

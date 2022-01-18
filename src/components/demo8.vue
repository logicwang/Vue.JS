<template>
  <div>
    <ul id="example-1">
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>
  </div>
  <!-- 出处：https://cn.vuejs.org/v2/guide/list.html -->
</template>
<script>
export default {
  data:() => ({
    items: [
    { message: "Foo" },
    { message: "Bar" }],
  }),
};
</script>
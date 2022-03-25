<template>
  <div>
    <div class="header">
      <h1>我是页头标题</h1>
      <div>
        <slot name="header"></slot>
      </div>
    </div>
    <div class="footer">
      <h1>我是页尾标题</h1>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "child1",
};
</script>
 
<style scoped>
.header {
  color: white;
}
</style>

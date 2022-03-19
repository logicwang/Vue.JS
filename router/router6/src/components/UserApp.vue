<template>
  <div class="user">
    <h4>用户信息</h4>
    <div>参数: {{id}}</div>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>
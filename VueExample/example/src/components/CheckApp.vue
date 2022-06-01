<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  name: "SplashApp",
  props:['title'],
  data: function () {
    return {
      message: "组件启动中...",
    };
  },
};
</script>
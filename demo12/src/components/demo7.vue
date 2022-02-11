<template>
  <div>
    <Button @click="handleClick">点击调用子组件方法</Button>
    <Child ref="child" />
  </div>
</template>    

<script>
import Child from "./child3.vue";

export default {
  components: {
    Child,
  },
  methods: {
    handleClick() {
      this.$refs.child.$emit("childmethod"); //子组件$on中的名字
    },
  },
};
</script>
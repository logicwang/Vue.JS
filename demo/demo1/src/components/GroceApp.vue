<template>
  <div id="app-7">
    <button class="switch" @click="toswitch">{{ editText }}</button>
  </div>
</template>

<script>
export default {
  name: "GroceApp",
  data() {
    return {
      editText: "编辑",
    };
  },
  methods: {
    toswitch() {
      let self = this;
      if (self.editText == "编辑") {
        self.editText = "完成";
      } else {
        self.editText = "编辑";
      }
    },
  },
};
</script>

<style>
</style>
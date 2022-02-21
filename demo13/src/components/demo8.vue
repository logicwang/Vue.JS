<template>
  <div>{{ cmsg }}</div>
</template>
<script>
export default {
  data() {
    return {
      cmsg: this.msg,
    };
  },
  props: ["msg"],
  created() {
    this.cmsg = 666;
  },
};
</script>

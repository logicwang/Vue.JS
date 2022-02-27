<template>
  <div>
    <span slot="center" v-show="showIt"> {{ msg }}</span>
    <div>
      <span>左边</span>
      <slot name="center">
        <span>中间</span>
      </slot>
      <span>右边</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "aaaaaaaaa",
      showIt: 1,
    };
  },
};
</script>

<template>
  <div>
      <!-- 插槽-插入 -->
      <span slot="center" v-show="showIt"> {{message}}</span>
    <div>
      <span>左边</span>
      <!-- slot：插槽   name="center"给插槽具名 -->
      <slot name="center">
        <!-- 插槽默认值 -->
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
      message: "aaaaaaaaa",
      showIt: 1,
    };
   },
//     components:{
//             cpn: {
//                 template: '#cpn',
//             }
//         },
};
</script>

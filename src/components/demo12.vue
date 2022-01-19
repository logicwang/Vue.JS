<template>
<ul>
  <li v-for="n in evenNumbers " :key="n">{{ n }}</li>
</ul>
<!-- 出处：https://cn.vuejs.org/v2/guide/list.html 显示过滤/排序后的结果 -->
</template>
<script>
export default {
  data() {
    return {
      numbers: [ 1, 2, 3, 4, 5 ]
    };
  },
  computed: {
  evenNumbers: function () {
    return this.numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
};
</script>

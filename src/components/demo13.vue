<template>
  <div>
    <ul v-for="set in sets" :key="set">
      <li v-for="aaa in even(set)" :key="aaa">{{ aaa }}</li>
    </ul>
  </div>
  <!-- 出处：https://cn.vuejs.org/v2/guide/list.html 显示过滤/排序后的结果 -->
</template>
<script>
export default {
  data() {
    return {
      set: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
        aaa: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
    };
  },
  methods: {
  even (numbers) {
    return numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
};
</script>
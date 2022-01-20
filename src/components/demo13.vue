<template>
  <div>
    <ul v-for="(set, index) in sets" :key="index" :data-index="index">
      <li v-for="(n, idx) in even(set)" :key="idx">{{ n }} </li>
    </ul>
  </div>
  <!-- 出处：https://cn.vuejs.org/v2/guide/list.html 显示过滤/排序后的结果 -->
</template>
<script>
export default {
  data() {
    return {
      sets: [
        ['wwww', 2, 3, 4, 5 ],
        [6, 7, 8, 9, 10],
        [6, 7, 8, 9, 10],
        [6, 7, 8, 9, 10],
        [6, 7, 8, 9, 10],
        [6, 7, 8, 9, 10],
      ]
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
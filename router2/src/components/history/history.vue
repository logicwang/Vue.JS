<template>
  <div>
    <div class="history">
      <h1>1111111</h1>
      <button @click="handleSon1()">点我到1</button>
      <button @click="handleSon2()">点我到2有参数</button>
    </div>
  </div>
</template>
<script>
export default {
  name:'HistoryApp',
  data() {
    return {
      age: 22,
    };
  },
  methods: {
    handleSon1() {
      this.$router.push({ name: "son1" });
    },
     handleSon2() {
      this.$router.push({ name: "son1" });
    },
  },
};
</script>
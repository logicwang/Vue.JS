<template>
  <div>
    <div class="history">
      <h1>主</h1>
      <button @click="handleSon1()">副组件</button>
      <button @click="handleSon2()">副组件2(参数)</button>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "HistoryApp",
  data(){
    return{
      age:22
    }
  },
  methods: {
    handleSon1() {
      this.$router.push({ name: "son1" });
    },
    handleSon2() {
      this.$router.push({ name: "son2" ,params:{agee:this.age}});
    },
  },
};
</script>
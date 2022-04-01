<template>
  <div>
    <h2>ssss</h2>
    <button @click="run()">执行run方法</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是组建首页!",
    };
  },
  methods:{
      run(){
          alert('hello!');
      }
  }
};
</script>
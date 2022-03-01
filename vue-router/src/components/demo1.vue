<template>
  <div>
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link> -->
    <button @click="linkToHome">首页</button>
    <button @click="linkToAbout">关于</button>
    <!-- <router-link></router-link> -->
  </div>
</template>
<script>
export default {
  name:'App',
  methods:{
    linkToHome(){
      this.$router.push('./home')
    },
    linkToAbout(){
      this.$router.push('./about')
    },
  }
}
</script>
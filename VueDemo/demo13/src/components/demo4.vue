<template>
  <div>
    <button onclick="load">动态加载组件</button>
    <component v-bind:is="currentTabComponent" :message="message"></component>
    <span>{{ message }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentTabComponent: null,
      message: "hello!",
    };
  },
  methods:{
        load:function(){
            this.currentTabComponent = 'child';
        }
    },
};
</script>
<template>
  <div>
    <child></child>
  </div>
</template>
<script>
  import child from './child1.vue';
  export default {
    components: {
      child
    },
    methods: {
      fatherMethod() {
        console.log('测试');
      }
    }
  };
</script>
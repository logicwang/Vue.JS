<template>
  <div>
    <LayOut />
    <ConTinar />
  </div>
</template>
<script>
    import LayOut from './components/view/LayOut'
    import ConTinar from './components/view/ConTinar.vue'


export default {
  name: "App",
  components: {
    LayOut,
    ConTinar
  },
};
</script>
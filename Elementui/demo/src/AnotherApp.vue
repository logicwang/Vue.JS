<template>
  <div>
    <LayOut />
    <ConTinar />
    <MethodApp />
  </div>
</template>
<script>
    import LayOut from './components/view/LayOut'
    import ConTinar from './components/view/ConTinar.vue'
    import MethodApp from './components/view/MethodApp.vue'


export default {
  name: "App",
  components: {
    LayOut,
    ConTinar,
    MethodApp
  },
};
</script>
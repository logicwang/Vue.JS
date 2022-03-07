<template>
  <div>
    <hr />
    <v-GameRouter></v-GameRouter>
    <hr />
  </div>
</template>
<script>
import App from "./components/App.vue";
import GameRouter from './components/GameRouter.vue'
export default {
  components: {
    "v-App": App,
    "v-GameRouter" : GameRouter,
  },
};
</script>
<template>
  <div>
    <hr />
    <v-GameRouter></v-GameRouter>
    <hr />
  </div>
</template>
<script>
import GameRouter from "./history/history.vue";
export default {
  components: {
    "v-GameRouter": GameRouter,
  },
};
</script>
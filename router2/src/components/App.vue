<template>
  <div>
    <hr />
    <v-GameRouter></v-GameRouter>
    <hr />
  </div>
</template>
<script>
import GameRouter from "./history/HistoryApp.vue";
export default {
  components: {
    "v-GameRouter": GameRouter,
  },
};
</script>
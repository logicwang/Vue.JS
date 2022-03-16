<template>
  <div>
    <hr />
    <HistoryApp></HistoryApp>
    <hr />
    <App></App>
    <hr />
  </div>
</template>
<script>
import HistoryApp from "./components/history/HistoryApp.vue";
import App from "./components/App.vue";


export default {
  components: {
    HistoryApp,
    App,
  },
};
</script>
<style scoped>
hr {
  border: 1px solid red;
}
div{
  text-align: center;
}
</style>
<template>
  <div>
    <hr />
    <HistoryApp></HistoryApp>
    <hr />
    <App></App>
    <hr />
    <One></One>
  </div>
</template>
<script>
import HistoryApp from "./components/history/HistoryApp.vue";
import App from "./components/App.vue";
import One from "./components1/App.vue";


export default {
  components: {
    HistoryApp,
    App,
    One
  },
};
</script>
<style scoped>
hr {
  border: 1px solid red;
}
</style>
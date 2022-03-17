<template>
  <body>
    <div>
      <hr />
      <HistoryApp></HistoryApp>
      <hr />
      <App></App>
      <hr />
      <One></One>
      <hr />
      <View></View>
    </div>
  </body>
</template>
<script>
import HistoryApp from "./components/history/HistoryApp.vue";
import App from "./components/App.vue";
import One from "./components1/App.vue";
import View from "./components2/ViewApp.vue";

export default {
  components: {
    HistoryApp,
    App,
    One,
    View,
  },
};
</script>
<style scoped>
hr {
  border-bottom: 5px solid red;
  border-radius: 10px;
}
body {
  margin: 0;
}
</style>
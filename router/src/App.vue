<template>
  <body>
    <div>
      <div id="app">
        <h1>Named Views</h1>
        <ul>
          <li>
            <router-link to="/">/</router-link>
          </li>
          <li>
            <router-link to="/other">/other</router-link>
          </li>
        </ul>
        <router-view class="view one"></router-view>
        <router-view class="view two" name="a"></router-view>
        <router-view class="view three" name="b"></router-view>
      </div>
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
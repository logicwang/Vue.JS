<template>
  <div>
        <div id="app">
      <h1>Named Routes</h1>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
        <li><router-link :to="{ name: 'home' }">home</router-link></li>
        <li><router-link :to="{ name: 'foo' }">foo</router-link></li>
        <li><router-link :to="{ name: 'bar', params: { id: 123 }}">bar</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
    <FooApp></FooApp>
    <BazApp></BazApp>
    <BarApp></BarApp>
  </div>
</template>
<script>
import FooApp from "./Foo.vue";
import BazApp from "./Baz.vue";
import BarApp from "./Bar.vue";
export default {
  component: {
    FooApp,
    BazApp,
    BarApp,
  },
};
</script>
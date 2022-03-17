<template>
  <div>
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
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
  components: 
  FooApp,
  BazApp,
  BarApp
};
</script>
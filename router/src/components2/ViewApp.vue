<template>
  <div>
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
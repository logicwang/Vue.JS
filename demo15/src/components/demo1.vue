<template>
  <div>
    <div>slot内容分发</div>
    <Weather>
      <template slot="header">
        <p>我是页头的具体内容</p>
      </template>
      <template slot="footer">
        <p>我是页尾的具体内容</p>
      </template>
    </Weather>
  </div>
</template>
 
<script>
import Weather from "./Weather.vue";

export default {
  name: "father1",
  components: {
    Weather,
  },
};
</script>
<style>
.footer {
  background: pink;
  color: black;
}

.header {
  background: yellow;
}
p{
  color: black;

}
</style>
<template>
  <div>
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what')">Say what</button>
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">Submit</button>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  methods: {
    say: function (message) {
      alert(message);
    },
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
  },
};
</script>
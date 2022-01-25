<template>
  <div>
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what')">Say what</button>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  methods: {
    say: function (message) {
      alert(message);
    },
  },
};
</script>
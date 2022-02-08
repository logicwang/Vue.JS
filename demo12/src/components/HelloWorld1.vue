<template>
  <div>
    <h3>{{ title }}</h3>
    <blog-post ... v-on:enlarge-text="postFontSize += 0.1"></blog-post>
    <button v-on:click="$emit('enlarge-text', 0.1)">Enlarge text</button>
  </div>
</template>
<script>
export default {
  name: "BlogPost",
  props: {
    title: String,
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount;
    },
  },
};
</script>
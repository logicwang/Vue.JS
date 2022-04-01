<template>
  <div>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-post
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
      ></blog-post>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [
        /* ... */
      ],
      postFontSize: 1,
    };
  },
};
</script>

<template>
  <div>
    <button v-on:click="$emit('enlarge-text')">Enlarge text</button>
    <blog-post ... v-on:enlarge-text="postFontSize += 0.1"></blog-post>
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button>Enlarge text</button>
      <div v-html="post.content"></div>
    </div>
    <div id="blog-posts-events-demo">
      <div :style="{ fontSize: postFontSize + 'em' }">
        <blog-post
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:post="post"
        ></blog-post>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name:"WorldHellow",
    props: {
    title: String
  },
};
</script>
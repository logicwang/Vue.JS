<template>
  <div>
    <h3>{{ title }}</h3>
    <div v-html="content"></div>
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title"
      v-bind:content="post.content"
      v-bind:publishedAt="post.publishedAt"
      v-bind:comments="post.comments"
    ></blog-post>
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { props: ["post"] };
    title:111
  },
};
</script>

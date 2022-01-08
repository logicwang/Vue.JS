<template>
  <div>
    <!-- <blog-post title="My journey with Vue" :key="post"></blog-post>
    <blog-post title="Blogging with Vue" :key="post"></blog-post>
    <blog-post title="Why Vue is so fun" :key="post"></blog-post> -->
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title"
    >
      <P>{{ post.title }}</P>
    </blog-post>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
    };
  },
};
</script>
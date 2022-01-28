<template>
  <div>
    <blog-post title="My journey with Vue"></blog-post>
    <blog-post title="Blogging with Vue"></blog-post>
    <blog-post title="Why Vue is so fun"></blog-post>
    <BlogPost></BlogPost>
  </div>
</template>
<script>
import BlogPost from './HelloWorld1.vue'
export default {
  name: "App",
  components: {
   BlogPost,
  },
};
</script>
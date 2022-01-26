<template>
  <div>
    <blog-post title="My journey with Vue"></blog-post>
    <blog-post title="Blogging with Vue"></blog-post>
    <blog-post title="Why Vue is so fun"></blog-post>
    <Blogpost></Blogpost>
  </div>
</template>
<script>
import Blogpost from "./Blogpost.vue";
export default {
  components: {
    Blogpost,
  },
};
</script>
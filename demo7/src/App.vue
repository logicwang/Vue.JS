<template>
  <div>
    <hello-world msg="121212"></hello-world>
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title"
    ></blog-post>
    <blog-post title="My journey with Vue"></blog-post>
    <blog-post title="Blogging with Vue"></blog-post>
    <blog-post title="Why Vue is so fun"></blog-post>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BlogPost from "./components/HelloWorld1.vue";
export default {
  name: "APP",
  components: {
    HelloWorld,
    BlogPost,
  },
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

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

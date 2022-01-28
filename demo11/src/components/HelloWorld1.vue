<template>
  <div>
    <h3>{{ title }}</h3>
    <!-- <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title"
    ></blog-post> -->
  </div>
</template>
<script>
export default {
  name: "BlogPost",
  props: {
    title: String,
  },
};
// export default {
//   data() {
//     return {
//       posts: [
//         { id: 1, title: "My journey with Vue" },
//         { id: 2, title: "Blogging with Vue" },
//         { id: 3, title: "Why Vue is so fun" },
//       ],
//     };
//   },

// };
</script>

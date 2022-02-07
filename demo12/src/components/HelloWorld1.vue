<template>
  <div>
    <h3>{{ title }}</h3>
    <button v-on:click="$emit('enlarge-text')">Enlarge text</button>
    <!-- <blog-post ... v-on:enlarge-text="postFontSize += 1"></blog-post> -->
    
  </div>
</template>
<script>
export default {
  name: "BlogPost",
  props: {
    title: String,
  },
  // data(){
  //   return{
  //      posts: [
  //     { id: 1, title: 'My journey with Vue' },
  //     { id: 2, title: 'Blogging with Vue' },
  //     { id: 3, title: 'Why Vue is so fun' }
  //   ]
  //   }
  // }
};
</script>
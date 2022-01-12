<template>
<div class="blog-post">
  <h3>{{ title }}</h3>
  <div v-html="content"></div>
 <blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:post="post"
></blog-post>
</div>

</template>
<script>
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </
    div>
  `
})
</script>
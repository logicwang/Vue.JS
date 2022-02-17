<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Linkssss</h2>
    <h3>{{ message1 }}</h3>
  </div>
</template>

<script>
export default {
  name: 'WelloHorld',
  props: ['message1'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
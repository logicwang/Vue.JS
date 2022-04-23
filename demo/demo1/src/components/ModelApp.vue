<template>
  <div id="app-6">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  name: "ModelApp",
  data() {
    return {
      message: "Hello Vue!",
    };
  },
};
</script>

<style>
input{
    margin: 0;
    margin-bottom: 5px;
}
</style>
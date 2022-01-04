<template>
  <div id="e-1">
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>



    <span>Multiline message2 is:</span>
    <p style="white-space: pre-line">{{ message2 }}</p>
    <br />
    <textarea v-model="message2" placeholder="add multiple lines"></textarea>
  </div>
</template>
<script>
export default {
  e1: "#app",
  data: () => ({
    message: "aaaa",
    message2: "bbb",
  }),
};
</script>

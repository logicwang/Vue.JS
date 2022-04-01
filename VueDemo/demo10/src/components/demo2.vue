<template>
  <div>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <br />
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  data() {
    return {
      message: " ",
    };
  },
};
</script>

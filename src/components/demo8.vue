<template>
  <div id="e-1" style="margin-top: 20px">
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>

    <span>Multiline message2 is:</span>
    <p style="white-space: pre-line">{{ message2 }}</p>
    <br />
    <textarea v-model="message2" placeholder="add multiple lines"></textarea>
    <ul style="marging-top: 20px; width: 500px; border:1px solid;">
      <option>A</option>
      <option>B</option>
      <option>C</option>
      <br />
      <span>Selected: {{ selected }}</span>
    </ul>
  </div>
</template>
<script>
export default {
  data: () => ({
    message: "aaaa",
    message2: "bbb",
    selected: "aaa",
  }),
};
</script>

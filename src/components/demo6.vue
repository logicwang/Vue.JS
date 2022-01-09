<template>
  <div id="e-1" style="margin-top: 20px">
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <span>Multiline message2 is:</span>
    <p style="white-space: pre-line">{{ message2 }}</p>
    <br />
    <ul>
      <p>
        <textarea
          v-model="message2"
          placeholder="add multiple lines"
        ></textarea>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
        <label for="jack">Jack</label>
      </p>
      <p>
        <input type="checkbox" id="john" value="John" v-model="checkedNames" />
        <label for="john">John</label>
      </p>
      <p>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
        <label for="mike">Mike</label>
      </p>
      <br />
    </ul>
    <span>Checked names: {{ checkedNames }}</span>
  </div>
</template>
<script>
export default {
  e1: "#app",
  data: () => ({
    message: "aaaa",
    message2: "bbb",
    checkedNames: [],
  }),
};
</script>

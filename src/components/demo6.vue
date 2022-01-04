<template>
  <div id="e-1">
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
  </div>
</template>
<script>
export default {
    e1: "#app",
    data:()=> ({
        message: "aaaa"

    })
}
</script>

<template>
  <div>
    <select v-model="selected" multiple style="width: 50px">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>selected: {{ selected }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: [],
    };
  },
};
</script>
<template>
  <div>
    <select v-model="selected">
      <option disabled value="">点击选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
};
</script>
<style>
span{
    padding-left: 10px;
}
</style>
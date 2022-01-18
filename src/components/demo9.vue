<template>
  <div>
    <select v-model="selected" multiple style="width: 50px">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br />
    <span>Selected: {{ selected }}</span>
  </div>
</template>
<script>
export default {
  //   data: () => {
  //     return  {

  //       selected: ['C'],
  //     }
  // },
    data: function() {
      return  {
        selected: ['C'],
      }
  },
  // data() {
  //   return  {

  //     selected: ['aaaaa'],
  //   }
  // },
};


// function wang()  {

// }

// const wang1 = () => {

// }
</script>
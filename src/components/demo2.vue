<template>
  <div id="demo">{{ fullName }}</div>
</template>

<script>
export default{
  e1 : "demo",
  return:{
    data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }

</script>
<template>
  <div id="demo">{{ fullName }}</div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Foo",
      lastName: "Bar",
    };
  },
  computed: {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  },
};
</script>
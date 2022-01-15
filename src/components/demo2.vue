<template>
  <div id="demo">{{ fullName }}</div>
  <!-- 出处:https://cn.vuejs.org/v2/guide/computed.html -->
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

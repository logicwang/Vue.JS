<template>
  <div>child</div>
</template>
 
<script>
export default {
  name: "child",
  data() {
    return {};
  },
  props: "someprops",
  methods: {
    parentHandleclick(e) {
      console.log(e);
    },
  },
};
</script>
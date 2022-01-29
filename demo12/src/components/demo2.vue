<template>
  <div>
    <Aaa></Aaa>
  </div>
</template>
<script>
import Aaa from "./Aaa.vue";
export default {
  data() {
    return {
      name: "Aaa",
      props: [Aaa],
    };
  },
  components: {
    Aaa,
  },
};
</script>
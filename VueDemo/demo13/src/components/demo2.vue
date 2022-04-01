<template>
     <div>
        <WelloHorld  :message1="messageToHelloWorld"></WelloHorld>
    </div>
</template>
<script>
import WelloHorld from "./WelloHorld.vue";

export default {
  name: "App",
  data() {
    return {
      messageToHelloWorld: "我是父组件向下传递的信息",
    };
  },
  components: {
    WelloHorld,
  },
};
</script>

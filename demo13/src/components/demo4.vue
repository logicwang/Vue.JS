  <template id="simpleDemo">
  <div>
    {{ msg }}
    <input v-model="parentMsg" />
    <br />
    <child v-bind:my-Message="parentMsg"></child>
    <!--可以理解成var mymesage = parentMsg;-->
  </div>
</template>

<script>
// import child from "./Child.vue";
export default {
  data() {
    return {
      parentMsg: "hello Prop",
    };
  },
  components: {
    child: {
      template: "#simpleDemo",
      props: ["msg"], //自定义名字
    },
  },
};
</script>
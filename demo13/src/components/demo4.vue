  <template id="simpleDemo">
  <div>
    {{ myMessage }}
    <input v-model="parentMsg" />
    <br />
    <child v-bind:my-Message="parentMsg"></child>
    <!--可以理解成var mymesage = parentMsg;-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentMsg: "hello Prop",
    };
  },
  components: {
    child: {
      template: "#simpleDemo",
      props: ["myMessage"], //自定义名字
    },
  },
};
</script>
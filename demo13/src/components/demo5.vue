 <template>
  <table>
    <tr>
      <th colspan="2">子组件</th>
    </tr>
    <tr>
      <td>名字</td>
      <td>年龄</td>
    </tr>
    <tr>
      <td>{{ myName }}</td>
      <td>{{ myAge }}</td>
    </tr>
    <div id="app">
      <my-component :my-name="name" :my-age="age"></my-component>
    </div>
  </table>
</template>
<script>
export default {
  data() {
    return {
      name: "小明",
      age: 24,
    };
  },
  components: {
    "my-component": {
      template: "#myComponent",
      props: ["myName", "myAge"],
    },
  },
};
</script>
<template>
  <div>
    <label>
      {{ label }}
      {{ value }}
      <input v-bind="$attrs" v-bind:value="value" v-on="inputListeners" />
    </label>
  </div>
</template>
<script>
export default {
  props: ["label", "value"],
  // methods:{
  //   inputListeners() {
  //     console.log('dddd')
  //     // var vm = this;
  //     // // `Object.assign` 将所有的对象合并为一个新对象
  //     // return Object.assign(
  //     //   {},
  //     //   // 我们从父级添加所有的监听器
  //     //   this.$listeners,
  //     //   // 然后我们添加自定义监听器，
  //     //   // 或覆写一些监听器的行为
  //     //   {
  //     //     // 这里确保组件配合 `v-model` 的工作
  //     //     input(event) {
  //     //       vm.$emit("input", event.target.value);
  //     //     },
  //     //   }
  //     // );
  //   },
  // },
  computed: {
    inputListeners: function () {
      var vm = this
      // console.log('dddd', vm)
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            console.log('dddd', vm)
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
    // inputListeners() {
    //   console.log('dddd')
    //   // var vm = this;
    //   // // `Object.assign` 将所有的对象合并为一个新对象
    //   // return Object.assign(
    //   //   {},
    //   //   // 我们从父级添加所有的监听器
    //   //   this.$listeners,
    //   //   // 然后我们添加自定义监听器，
    //   //   // 或覆写一些监听器的行为
    //   //   {
    //   //     // 这里确保组件配合 `v-model` 的工作
    //   //     input(event) {
    //   //       vm.$emit("input", event.target.value);
    //   //     },
    //   //   }
    //   // );
    // },
  },
  data() {
    return {
      inheritAttrs: true,
      // computed: {
      //   inputListeners() {
      //     var vm = this;
      //     // `Object.assign` 将所有的对象合并为一个新对象
      //     return Object.assign(
      //       {},
      //       // 我们从父级添加所有的监听器
      //       this.$listeners,
      //       // 然后我们添加自定义监听器，
      //       // 或覆写一些监听器的行为
      //       {
      //         // 这里确保组件配合 `v-model` 的工作
      //         input(event) {
      //           vm.$emit("input", event.target.value);
      //         },
      //       }
      //     );
      //   },
      // },
      // label: " aaa",
      // value: " bbb ",
      // inputListeners: "asdasda",
    };
  },
};
</script>
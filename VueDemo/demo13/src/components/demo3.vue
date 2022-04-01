<template>
  <div>
    <h1>{{ title }}</h1>
    <Child
      :pMag="msg"
      :pExpression="msgExpA + msgExpB"
      :pObj="msgObj"
      :pObjMsg="msgObj.msg3"
      :pArray="msgArray"
      :pIsBoolean="isMsg"
    >
    </Child>
  </div>
</template>
<script>
import Child from "./Child";
export default {
  name: "Father",
  components: {
    Child,
  },
  data() {
    return {
      title: "这是父组件",
      msg: "我是父组件单向传过来的数据",
      msgExpA: "props也可以是一个表达式:我是表达式A",
      msgExpB: ",我是表达式B",
      msgObj: {
        msg1: "props也可以是一个对象",
        msg2: "另外.props也可以单传一个对象中的任一属性:",
        msg3: "我是props对象中的属性msg3",
      },
      msgArray: [
        {
          id: 1,
          msg: "props也可以是一个数组",
        },
        {
          id: 2,
          msg: "一般结合v-for来循环渲染",
        },
        {
          id: 3,
          msg: "使用v-for时别忘了给key赋值哦~",
        },
      ],
      isMsg: true,
    };
  },
};
</script>
<style>
h1{
    font-size: 10px;
}
</style>
<template>
  <div class="child-box">
    <h1>{{ title }}</h1>
    <h1>{{ pMag }}</h1>
    <br />
    <h1>{{ pExpression }}</h1>
    <br />
    <h1>{{ pObj.msg1 }}</h1>
    <h1>{{ pObj.msg2 }}</h1>
    <br />
    <h1>{{ pObjMsg }}</h1>
    <br />
    <ul>
      <li v-for="item in pArray" :key="item.id">
        <h1>{{ item.msg }}</h1>
      </li>
    </ul>
    <br />
    <h1>props也可以是布尔类型,一般结合v-if和v-else使用</h1>
    <h1 v-if="pIsBoolean">当你看见我,说明pIsBoolean是true</h1>
    <h1 v-else>当你看见我,说明pIsBoolean是false</h1>
  </div>
</template>
<script>
export default {
  name: "Child",
  props: ["pMag", "pExpression", "pObj", "pObjMsg", "pArray", "pIsBoolean"],
  data() {
    return {
      title: "这是子组件",
    };
  },
};
</script>


<style scoped>
ul{
    list-style-type: none;
}
h1{
    font-size:10px;
}
</style>
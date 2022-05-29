<template>
  <div>
    <div>a is : {{ a }}</div>
    <hr />
    <div>
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
    <hr />
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
      aaaaaaaa
    </div>
    <hr />
    <div>
      <!-- 列表渲染 -->
      <ul id="example-1">
        <li v-for="item in items" :key="item.message">
          {{ item.message }}
        </li>
        <!--用v-for把一个数组对应为一组元素-->
      </ul>
    </div>
    <hr />
    <div>
      <ul id="example-2">
        <li v-for="(item, index) in items" :key="index">
          {{ parentMessage }} - {{ index }} - {{ item.message }}
          <!-- 在 v-for 块中，我们可以访问所有父作用域的 property。v-for 还支持一个可选的第二个参数，即当前项的索引。 -->
        </li>
      </ul>
    </div>
    <!-- 在 v-for 里使用对象 -->
    <hr />
    <div>
      <ul id="v-for-object" class="demo">
        <!-- 你也可以用 v-for 来遍历一个对象的 property。 -->
        <li v-for="value in object" :key="value">
          {{ value }}
        </li>
      </ul>

      <div v-for="(value, name) in object" :key="name">
        {{ name }}: {{ value }}
      </div>
      <div v-for="(value, name, index) in object" :key="value">
        {{ index }}. {{ name }}: {{ value }}
        <!-- 可以用第三个参数作为索引 -->
      </div>
    </div>
    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      a: 1,
      message: "asdwegfwrgwrg",
      isActive: true,
      hasError: false,
      activeColor: "red",
      fontSize: 30,
      items: [{ message: "Foo" }, { message: "Bar" }],
      parentMessage: "Parent",
      item: [{ message: "Foo" }, { message: "Bar" }],
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
    };
  },
  created() {
    console.log("a is: " + this.a);
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0;
      });
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>
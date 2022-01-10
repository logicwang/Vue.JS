# hello-world

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


data 在 html 中和 单文件组件 .vue 中的使用方法

```js
var vm = new Vue({
    el: '#example',
    data: {
        message: 'WANGYUFEI'
    },
    computed: {
        // 计算属性的 getter
        reversedMessage: function () {
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('')
        }
    }
})
```

```vue
<template>
  <button v-on:click="count++">You clicked me {{ count }} times.</button>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>
``
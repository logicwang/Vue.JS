<template>
  <div id="app">
    <ul id="example-1">
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    e1: "#example-1",
    data:()=> ({
         items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
    })
}
</script>

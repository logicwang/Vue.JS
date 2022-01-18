<template>
  <div>
    <ul id="example-2">
      <li v-for="(item, index) in items" :key="index">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
  </div>
  <!-- 出处:https://cn.vuejs.org/v2/guide/list.html -->
</template>
<script>


export default {
  data: () => ({
        parentMessage: 'Parent',
    items: [
      { message: "Foo", aaa: 22222 }, 
      { message: "Bar", aaa: '' }
      
    ],
    OBJ: {
      A: 12222,
    },
  }),
  
};
</script>

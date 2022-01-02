<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index" v-on:click="sss(index)">
        {{ item.aaa }} / {{index}}
      </li>
    </ul>

    <ul>
        {{OBJ.A}}
    </ul>
    <button v-on:click="onoooo">click </button>
  </div> 
</template>
<script>
export default {
  data: () => ({
    items: [
      { message: "Foo", aaa: 22222 }, 
      { message: "Bar", aaa: '' }
      
    ],
    OBJ: {
      A: 12222,
    },
  }),
  methods: {
    onoooo() {
      this.OBJ.A = 44444
      this.items.push({
        message: "345",
        aaa: 5555
      })
    },
    sss(index) {
      console.log(index)
      this.items[index].aaa = 9999999
    }
  }
};
</script>

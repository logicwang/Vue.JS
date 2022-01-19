<template>
<div>
  <span v-for="n in 10" :key="n">{{ n }} </span>
</div>
</template>
<script>
export default {
  data(){
    return{
      n: [ 1, 2, 3, 4, 5 ]
    }
  }
}
</script>
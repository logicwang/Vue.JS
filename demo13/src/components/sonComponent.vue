<template>
  <div>子
    {{ fatherMsg }}
    <button @click="change">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'sonComponent',
  props: ['fatherMsg'],
  methods: {
    change() {
      this.fatherMsg = '666666666'
    }
  }
}
</script>

<template>
  <div>
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
      class="border"
    ></el-tree>
  </div>
</template>

<script>
export default {
  data () {
    return {

      data: [{
        label: '项目经理 张大大',
        children: [{
          label: '产品leader-小亮',
          children: [{
            label: '产品-小丽'
          }, {
            label: '产品-大光'
          }]
        },
        {
          label: 'UIleader-小美',
          children: [{
            label: 'ui-小高'
          }]
        },
        {
          label: '技术leader-老马',
          children: [{
            label: '前端-小刘'
          }, {
            label: '前端-小华'
          }, {
            label: '后端-小李'
          }]
        },
        {
          label: '测试leader-老王',
          children: [{
            label: '测试-小赵'
          }, {
            label: '测试-小强'
          }]
        },
        {
          label: '运维leader-老李',
          children: [{
            label: '运维-小涛'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  },

};
</script>
<style lang="scss">
.border{
    border:1px solid;
    width: auto;
}
</style>
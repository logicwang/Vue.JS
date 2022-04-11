<template>
  <div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>
    </el-row>
    <el-row class="name">
      <el-button round>默认按钮</el-button>
      <el-button size="medium" round>中等按钮</el-button>
      <el-button size="small" round>小型按钮</el-button>
      <el-button
        size="plain"
        class="plan-btn"
        icon="el-icon-s-tools"
        native-type="true"
        style="font-size: 30px; height: auto; width: auto"
      ></el-button>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.name {
  .plan-btn {
    padding: 12px 12px;
  }
}
</style>
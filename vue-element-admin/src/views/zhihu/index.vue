<template>
  <el-main>
    <div class="container_box">
      <el-card class="header">
        <el-form
          ref="tableData"
          :model="searchForm"
          label-width="90px"
          resetFields
        >
          <el-row>
            <el-col :span="6">
              <el-form-item label="合同名称">
                <el-input
                  v-model.trim="searchForm.targetCompanyName"
                  placeholder="请输入合同名称"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label-width="20px">
                <el-button
                  type="primary"
                  size="small"
                  icon="el-icon-search"
                  @click="getList()"
                  >查询</el-button
                >
                <el-button
                  type="primary"
                  size="small"
                  icon="el-icon-refresh"
                  @click="handleReset()"
                  >重置</el-button
                >
                <!-- 新增数据弹框 -->
                <el-button type="primary" @click="dialogFormVisible = true"
                  >内容</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
    </div>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {},
    };
  },
};
</script>

<style>
.el-form-item {
  margin-bottom: 0px;
}
.el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #DCDFE6;
    border-color: #DCDFE6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    -webkit-transition: 0.1s;
    transition: 0.1s;
    font-weight: 400;
    /* -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none; */
    padding: 8px 15px;
    font-size: 14px;
    border-radius: 4px;
}
</style>
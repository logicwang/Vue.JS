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
              <el-form-item label="姓名">
                <el-input
                  v-model.trim="searchForm.targetCompanyName"
                  placeholder="请输入列表数据"
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
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  :formatter="formatter"
                >
                </el-table-column>
                <el-table-column
                  prop="tag"
                  label="标签"
                  width="100"
                  :filters="[
                    { text: '家', value: '家' },
                    { text: '公司', value: '公司' },
                  ]"
                  :filter-method="filterTag"
                  filter-placement="bottom-end"
                >
                  <template slot-scope="scope">
                    <el-tag
                      :type="scope.row.tag === '家' ? 'primary' : 'success'"
                      disable-transitions
                      >{{ scope.row.tag }}</el-tag>
                  </template>
                </el-table-column>
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家",
        },
      ],
      searchForm: {},
    };
  },
  methods: {
    // 计算属性
    mounted() {
      this.getLabelList();
      this.getList();
    },
    // 重置列表
    handleReset() {
      this.searchForm = {};
      this.getList();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
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
  background: #ffffff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
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
.el-form-item__label {
  width: 50px;
}
</style>
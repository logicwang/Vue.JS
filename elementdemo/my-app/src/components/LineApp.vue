<template>
  <div class="center border">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="Data" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-dialog title="信息" v-model="tableData">
            <el-form :model="form" ref="form" :before-close="disableClose">
              <el-form-item
                label="日期"
                prop="Data"
                style="width: 50%; padding-bottom: 25px"
                :rules="[
                  {
                    required: true,
                    message: '请输入合同名称',
                  },
                  {
                    message: '只能输入汉字、数字、字母、括号',
                    pattern: /^[a-zA-Z0-9\u4e00-\u9fa5()（）]+$/,
                  },
                ]"
                :label-width="Data"
              >
                <el-input
                  v-model="tableData.Data"
                  maxlength="50"
                  clearable
                  autocomplete="on"
                />
              </el-form-item>
              <el-form-item
                label="姓名"
                style="width: 50%; padding-bottom: 25px"
                prop="name"
                :rules="[
                  {
                    required: true,
                    message: '输入合同附件',
                  },
                  {
                    pattern: /^[a-zA-Z0-9\u4e00-\u9fa5()（）]+$/,
                    message: '只能输入汉字、数字、字母、括号',
                  },
                ]"
                :label-width="name"
              >
                <el-input
                  v-model="tableData.name"
                  clearable
                  autocomplete="off"
                />
              </el-form-item>
              <el-form-item
                label="省份"
                style="width: 50%; padding-bottom: 25px"
                prop="province"
                :label-width="province"
                :rules="[
                  {
                    required: true,
                    message: '请输入公司名称',
                  },
                  {
                    pattern: /^[a-zA-Z0-9\u4e00-\u9fa5()（）]+$/,
                    message: '只能输入汉字、数字、字母、括号',
                  },
                ]"
              >
                <el-input
                  v-model="tableData.province"
                  clearable
                  autocomplete="off"
                />
              </el-form-item>
              <el-form-item
                label="地址"
                style="width: 50%; padding-bottom: 25px"
                prop="address"
                :label-width="address"
                :rules="[
                  {
                    required: true,
                    message: '请输入公司名称',
                  },
                  {
                    pattern: /^[a-zA-Z0-9\u4e00-\u9fa5()（）]+$/,
                    message: '只能输入汉字、数字、字母、括号',
                  },
                ]"
              >
                <el-input
                  v-model="tableData.address"
                  clearable
                  autocomplete="off"
                />
              </el-form-item>
              <el-form-item
                label="邮编"
                style="width: 50%; padding-bottom: 25px"
                prop="zip"
                :label-width="zip"
                :rules=" [
                {required:true, message: '请输入数量'},
                {type:'number', message: '数量必须为数字值'}
                ],"
              >
                <el-input
                  v-model="tableData.zip"
                  clearable
                  autocomplete="off"
                />
              </el-form-item>
            </el-form>
            <div class="dialog-footer">
              <el-button @click="quxiao">取 消</el-button>
              <el-button @click="add('form')" type="primary">确定</el-button>
            </div>
          </el-dialog>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
    quxiao() {
      this.dialogFormVisible = false;
      console.log(this.dialogFormVisible);
    },
    disableClose() {
      this.disableForm = {};
      this.$refs["disableForm"].clearValidate();
      this.dialogDisable = true;
    },
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
    };
  },
};
</script>
<style scoped>
.center {
  margin: 0 auto;
  max-width: 65%;
}
.border {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
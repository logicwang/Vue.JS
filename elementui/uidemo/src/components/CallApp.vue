<template>
  <div class="oDiv">
    <div>
      <div style="margin-top: 20px">
        <div style="float: left; margin-left: 27px" max-height="100%">
          <el-button @click="handleCheckAllChange(val)"
            >全选</el-button
          >
          <el-button @click="delArray">批量删除</el-button>
        </div>
      </div>
      <el-table
        :data="tableData"
        ref="multipleTable"
        style="width: 100%"
        max-height="250"
        :fit="false"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" highlight-current-row>
        </el-table-column>
        <el-table-column fixed prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120" :stripe="true">
        </el-table-column>
        <el-table-column prop="province" label="省份" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="300">
        </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              size="mini"
              class="el-button el-button--text el-button--small"
              round
              type="danger"
              @click="handleDelete(scope.$aaa, scope.row)"
              >删除</el-button
            >
          </template></el-table-column
        >
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableDataAmount: [],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎1",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎1",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎1",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎1",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
    };
  },
  methods: {
    deleteRow(rows) {
      rows.splice(1);
    },
    // 选择事件 得到选中的数据
    handleSelectionChange(data) {
      this.tableDataAmount = data;
    },
    // 批量清除
    delArray() {
      var that = this;
      // 拿到选中的数据；
      var val = this.tableDataAmount;
      // 如果选中数据存在
      if (val) {
        // 将选中数据遍历
        val.forEach(function (item) {
          // 遍历源数据
          that.tableData.forEach(function (itemI, indexI) {
            // 如果选中数据跟元数据某一条标识相等，删除对应的源数据
            if (item.name === itemI.name) {
              that.tableData.splice(indexI, 1);
              console.log("------tableDate---", that.tableData);
            }
          });
        });
      }
      // 清除选中状态
      this.$refs.multipleTable.clearSelection();
    },
    // 一件全选
    
    // 删除数据
    handleDelete(index) {
      this.$confirm("确定要删除选择项吗?, 是否继续?", "提示", {
        //confirm() 方法用于显示一个带有指定消息和 OK 及取消按钮的对话框。
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.tableData.splice(index, 1);
          console.log("---tableData--", this.tableData);
          this.ListLoadData; //重新加载 数据
          this.$message({ type: "success", message: "删除成功" });
        })
        .catch((err) => {
          if (err != "cancel") {
            this.$message({ type: "error", message: "删除失败 " + err });
          }
        });
    },
  },
};
</script>
<style lang="scss">
.oDiv {
  margin: 0 auto;
  max-width: 60%;
  border: 1px solid #9093993d;
}
</style>
<template>
  <div id="aaa">
  <div class="name">
      <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      sort-orders="”array“"
    >
      <el-form-item label="日期">
        <el-input v-model="formInline.date" sort-orders="”array“"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" sort-orders="”array“"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="formInline.address" sort-orders="”array“"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="arrsDel">批量删除</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        date: "",
        name: "",
        address: "",
      },
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
    };
  },
  created() {
    // 页面默认有没有数据不重要,重要的是拿到数据或数据改变就要去处理数据,添加或改变自增id,也就是模拟索引值
    for (let i = 0; i < this.tableData.length; i++) {
      this.tableData[i].zizengId = i;
    }
  },
  methods: {
    // 获取选中的数据
    handleSelectionChange(val) {
      console.log("下面打印的是选中的数据");
      console.log(val);
      this.multipleSelection = val;
    },
    // 批量删除
    arrsDel() {
      // 删除时arr接收选中数据的自增Id
      let arr = [];
      //定义一个空值
      for (
        let i = 0;
        i < this.multipleSelection.length;
        i++ //定义关键字i的值为0；当i小于多选框时，返回数组中元素的数目；i增加
      ) {
        arr.push(this.multipleSelection[i].zizengId); //此处接收了所有选中的自增id
        //定义push()方法(将一个或多个元素添加到数组的末尾，并返回该数组的新长度),在里面定义
      }
      arr.sort(); //此处作用是将数组内的值从小到大排序,下面循环从小到大删除,就不会出现问题
      for (let a = 0; a < arr.length; a++) {
        this.tableData.splice(arr[a] - a, 1); //这一步就已经删除成功了,arr[a]-a的原因是每次删除后原数组都会发生变化,我们的删除起点要改变一下  splice()方法用于添加或删除数组中的元素。
      }
      // 删除完成后要从新排一下我们的自增id
      for (let i = 0; i < this.tableData.length; i++) {
        this.tableData[i].zizengId = i;
      }
    },
    // 增加新数据
    onSubmit() {
      this.tableData.unshift({
        date: this.formInline.date,
        name: this.formInline.name,
        address: this.formInline.address,
      });
      // 添加完数据还要从新排一下我们的自增id
      for (let i = 0; i < this.tableData.length; i++) {
        this.tableData[i].zizengId = i;
      }
    },
  },
};
</script>

<style lang="scss">
#aaa {
  margin: 0 auto;
  border: 1px solid #9093993d;
  max-width: 65%;
  .name{
    padding: 25px;
  }
}
</style>
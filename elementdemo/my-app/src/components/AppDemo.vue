<template>
  <div>
    <!--工具条-->
    <el-row>
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px">
        <el-form
          class="title-bar"
          style="border-bottom: 2px solid #eef1f6; margin-bottom: 10px"
        >
          <el-form-item
            style="font-weight: bold"
            label="条目列表"
          ></el-form-item>
          <div>
            <el-form-item style="float: right">
              <el-button
                style="margin-left: 10px"
                type="danger"
                @click="batchRemove"
                :disabled="this.sels.length === 0"
                >批量删除</el-button
              >
            </el-form-item>
            <el-form-item style="float: right">
              <el-button type="primary" @click="handleAdd">新增</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-col>
    </el-row>
    <!--列表-->
    <el-table
      border
      :data="lists"
      highlight-current-row
      v-loading="listLoading"
      style="width: 100%"
      @selection-change="selsChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        type="index"
        label="序号"
        width="80"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="itemName"
        label="条目名称"
        align="center"
      ></el-table-column>
      <el-table-column prop="num" label="播放模式" align="center">
        <template slot-scope="scope">
          <span>{{
            scope.itemModel == 0
              ? "循环播放"
              : scope.itemModel == 1
              ? "随机播放"
              : "暂无"
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="frimName" label="歌曲数量" align="center">
        <template slot-scope="scope">
          <span>{{
            scope.row.musicUuidList.length
              ? scope.row.musicUuidList.length
              : "0"
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="320" align="center">
        <template slot-scope="scope">
          <el-button
            style="margin-bottom: 4px"
            size="small"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            style="margin-bottom: 4px"
            size="small"
            :disabled="scope.$index == 0"
            type="primary"
            @click="moveUpward(scope.row, scope.$index)"
            >上移</el-button
          >
          <el-button
            style="margin-bottom: 4px"
            size="small"
            type="primary"
            :disabled="scope.$index + 1 == lists.length"
            @click="moveDown(scope.row, scope.$index)"
            >下移</el-button
          >
          <el-button
            style="margin-bottom: 4px"
            size="small"
            type="danger"
            @click="handleDel(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sels: [],
      listLoading: false,
      lists: JSON.parse(sessionStorage.getItem("lists"))
        ? JSON.parse(sessionStorage.getItem("lists"))
        : [],
      siteForm: JSON.parse(sessionStorage.getItem("listenInfo"))
        ? JSON.parse(sessionStorage.getItem("listenInfo"))
        : {},
    };
  },
  methods: {
    //批量删除
    selsChange: function (sels) {
      this.sels = sels;
      console.log(this.sels);
    },
    batchRemove: function () {
      var ids = this.sels.map((item) => item.id);
      this.$confirm("确认删除选中记录吗？", "提示", {
        type: "warning",
      })
        .then(() => {
          // this.listLoading = true;
          // console.log(ids.map(Number))
          ids.map(Number).forEach((item) => {
            for (let i = this.lists.length - 1; i >= 0; i--) {
              if (this.lists[i].id == item) {
                this.lists.splice(i, 1);
              }
              // console.log(this.lists[i])
            }
          });
          sessionStorage.setItem("lists", JSON.stringify(this.lists));
        })
        .catch(() => {});
    },
    //删除
    handleDel: function (index) {
      this.$confirm("确认删除该条目吗？", "提示", {}).then(() => {
        this.addLoading = true;
        this.lists.splice(index, 1);
        this.$message({
          message: "删除成功",
          type: "success",
        });
      });
    },
    // 上移
    moveUpward(index) {
      if (index > 0) {
        let upData = this.lists[index - 1];
        this.lists.splice(index - 1, 1);
        this.lists.splice(index, 0, upData);
      } else {
        this.$message({
          message: "已经是第一条，上移失败",
          type: "warning",
        });
      }
    },
    // 下移
    moveDown(index) {
      if (index + 1 == this.lists.length) {
        this.$message({
          message: "已经是最后一条，下移失败",
          type: "warning",
        });
      } else {
        let downData = this.lists[index + 1];
        this.lists.splice(index + 1, 1);
        this.lists.splice(index, 0, downData);
      }
    },
        handleAdd() {
      console.log("打印tabledata", this.tableData);
      this.tableData.push(this.form);
    },
  },
};
</script>
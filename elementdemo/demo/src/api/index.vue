<template>
  <div>
    <!-- 条件查询 -->
    <el-form :inline="true" :model="query" size="small ">
      <el-form-item label="分类名称">
        <el-input v-model="query.name" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select
          v-model="query.status"
          clearable
          filterable
          style="width: 85px"
        >
          <el-option label="正常" value="1"></el-option>
          <el-option label="禁用" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button icon="el-icon-search" type="primary" @click="queryData"
          >查询</el-button
        >
        <el-button icon="el-icon-refresh" @click="reload">重置</el-button>
        <el-button
          icon="el-icon-circle-plus-outline"
          type="primary"
          @click="openAdd"
          >新增</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table stripe :data="list" border style="width: 100%">
      <el-table-column align="center" width="60px" type="index" label="序号">
      </el-table-column>
      <el-table-column align="center" prop="name" label="分类名称">
      </el-table-column>
      <el-table-column align="center" prop="sort" label="排序">
      </el-table-column>
      <el-table-column align="center" prop="remark" label="备注">
      </el-table-column>
      <el-table-column align="center" prop="status" label="状态">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">
            {{ scope.row.status ? "正常" : "禁用" }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            @click="handleEdit(scope.row.id)"
            size="mini"
            >编辑</el-button
          >
          <el-button
            type="danger"
            @click="handleDelete(scope.row.id)"
            size="mini"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.current"
      :page-sizes="[10, 20, 50]"
      :page-size="page.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
    >
    </el-pagination>
    <!-- 弹框 -->
    <Edit
      :title="edit.title"
      :visible="edit.visible"
      :formData="edit.formData"
      :remoteClose="remoteClose"
    />
  </div>
</template>
<script>
import api from "@/api/category";
import Edit from "./edit";
export default {
  name: "Category", //和对应路由表中配置的name值一致
  components: {
    Edit,
  },
  data() {
    return {
      query: {}, //查询条件
      list: [],
      page: {
        current: 1, //当前页码
        size: 20, //每页显示多少条
        total: 0, //总计录数
      },
      // statusOptions, // 状态下拉框数组
      edit: {
        title: "",
        visible: false,
        formData: {},
      },
    };
  },

  filters: {
    statusFilter(status) {
      // 0 禁用,1 正常
      const statusMap = { 0: "danger", 1: "success" };
      return statusMap[status];
    },
  },

  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      api
        .getList(this.query, this.page.current, this.page.size)
        .then((response) => {
          this.list = response.data.records;
          this.page.total = response.data.total;
        });
    },

    handleEdit(id) {
      //通过id查询详情
      api.getById(id).then((response) => {
        if (response.code === 20000) {
          // 将查询的详情传递
          this.edit.formData = response.data;
          this.edit.title = "编辑";
          this.edit.visible = true;
        }
      });
    },

    //删除
    handleDelete(id) {
      this.$confirm("确认删除这条记录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 发送删除请求
          api.deleteById(id).then((response) => {
            this.$message({
              type: response.code === 20000 ? "success" : "error",
              message: response.message,
            });
          });
          //刷新列表数据
          this.fetchData();
        })
        .catch(() => {
          //取消删除，不用理会
        });
    },

    //val 是切换之后的每页显示多少条
    handleSizeChange(val) {
      this.page.size = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.page.current = val;
      this.fetchData();
    },
    // 条件查询
    queryData() {
      //将页码变为1，第1页
      this.page.current;
      this.fetchData();
    },
    //重置
    reload() {
      this.query = {};
      this.fetchData();
    },
    // 关闭窗口
    remoteClose() {
      this.edit.formData = {};
      this.edit.visible = false;
      this.fetchData();
    },
    // 点击新增
    openAdd() {
      this.edit.visible = true;
      this.edit.title = "新增";
    },
  },
};
</script>

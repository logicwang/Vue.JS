<template>
  <div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      // 分页相关
      page: {
        total: 0, // 总记录数
        current: 1, // 当前页码
        size: 20, // 每页显示20条数据,
      },
      query: {}, // 查询条件
    };
  },
  // 钩子函数获取数据
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await api.getList(
        this.query,
        this.page.current,
        this.page.size
      );
      this.list = data.records;
      this.page.total = data.total;
    },
    // 编辑
    handleEdit(id) {
      console.log("编辑", id);
    },
    //删除
    handleDelete(id) {
      console.log("删除", id);
    },
  },
};
</script>

<style>
</style>
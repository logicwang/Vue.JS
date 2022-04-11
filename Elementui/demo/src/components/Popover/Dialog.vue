<template>
  <div>
    <el-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</el-button
    >
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <div>
      <div class="pageGroup">
        <el-button size="small" @click="pervious">上一页</el-button>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="current"
          :page-size="pageSize"
          layout="pager"
          :total="total"
          ref="pageGroup"
        >
        </el-pagination>
        <el-button size="small" @click="next">下一页</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DialogApp",
  data() {
    return {
      dialogVisible: false,
      current: 1,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done(_);
        })
        .catch((_) => {
          _;
        });
    },
    handleSizeChange(val) {
      console.log(val);
    },
    handleCurrentChange(val) {
      //console.log(val)
      this.$emit("pageChange", val);
    },
    pervious() {
      this.$refs.pageGroup.prev();
    },
    next() {
      this.$refs.pageGroup.next();
    },
  },
  props: {
    currentPage: Number,
    pageSize: Number,
    total: Number,
  },
  watch: {
    currentPage: {
      handler() {
        this.current = this.currentPage;
      },
      deep: true,
    },
  },
  created() {
    this.current = this.currentPage;
  },
};
</script>
<style scoped>
.el-pager li {
  font-size: 12px;
  height: 24px;
  line-height: 18px;
  padding: 0 5px;
  box-sizing: border-box;
}
</style>
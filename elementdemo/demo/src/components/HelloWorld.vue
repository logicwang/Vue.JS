<template>
  <div>
    <!--条件查询-->
    <el-form />
    <!--表格-->
    <el-table />
    <!--分页组件-->
    <el-pagination />
    <!-- 弹框  -->
    <Edit />
  </div>
</template>
<script>
import api from "@/api/category";
import Edit from "./edit";
export default {
  components: {
    Edit,
  },
  data() {
    return {};
  },
  created() {
    this.fetchData();
  },
};
</script>
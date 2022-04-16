<template>
  <div>
    <el-table-column
  prop="name"
  label="姓名"
  width="180">
  <template slot-scope="scope">
  	<!--可编辑列-->
    <el-input v-if="scope.row.status" v-model="scope.row.name"></el-input>
    <!--显示-->
    <span v-else>{{scope.row.name}}</span>
  </template>
</el-table-column>


<el-table-column
  prop="address"
  label="地址"
  :formatter="formatter">
  <template slot-scope="scope">
  	<!--可编辑列下拉选择-->
    <el-select  v-if="scope.row.status" v-model="scope.row.address" placeholder="请选择">
      <el-option v-for="item in cityList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
    <span v-else>{{scope.row.address}}</span>
  </template>
</el-table-column>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>
  <el-dialog
    :title="title"
    :visible.sync="visible"
    width="500px"
    :before-close="handleClose"
  >
    <el-form
      :rules="rules"
      ref="formData"
      :model="formData"
      label-width="100px"
      label-position="right"
      style="width: 400px"
    >
      <el-form-item label="分类名称:" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="状态:" prop="status">
        <el-radio-group v-model="formData.status">
          <el-radio :label="1" value="1">正常</el-radio>
          <el-radio :label="0" value="0">禁用</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="排序:" prop="sort">
        <el-input-number
          v-model="formData.sort"
          :min="1"
          :max="10000"
          style="width: 295px"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="备注:" prop="remark">
        <el-input type="textarea" v-model="formData.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')"
          >确定</el-button
        >
        <el-button @click="handleClose">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import api from "@/api/category";
export default {
  props: {
    //弹窗标题
    title: {
      type: String,
      default: "",
    },
    // 弹出窗口，true弹出
    visible: {
      type: Boolean,
      default: false,
    },
    // 提交表单数据
    formData: {
      type: Object,
      default: {},
    },
    remoteClose: Function, // 用于关闭窗口
  },
  data() {
    return {
      rules: {
        // porp值
        name: [{ required: true, message: "请输入分类名称", trigger: "blur" }],
        status: [
          { required: true, message: "请输入分类名称", trigger: "change" },
        ],
        sort: [{ required: true, message: "请输入分类名称", trigger: "blur" }],
      },
    };
  },

  methods: {
    // 关闭窗口
    handleClose() {
      this.$refs["formData"].resetFields();
      // 注意不可以通过 this.visble = false 来关闭,因为它是父组件的属性
      this.remoteClose();
    },
    // 提交表单数据
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 校验通过，提交表单数据
          this.submitData();
        } else {
          // 校验不通过
          return false;
        }
      });
    },
    
    // 异步方法提交数据
    async submitData() {
      let response = null;
      if (this.formData.id) {
        //编辑
        response = await api.update(this.formData);
      } else {
        //新增
        response = await api.add(this.formData);
      }
      // 等上面返回数据response后再进行处理
      if (response.code === 20000) {
        // 提交成功, 关闭窗口, 刷新列表
        this.$message({
          showClose: true,
          message: "保存成功",
          type: "success",
        });
        // 关闭窗口
        this.handleClose();
      } else {
        this.$message({
          showClose: true,
          message: "保存失败",
          type: "error",
        });
      }
    },
  },
};
</script>
<style>
</style>

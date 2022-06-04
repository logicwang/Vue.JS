<template>
  <div>
    <el-form
      :model="addForm"
      :rules="addFormRules"
      ref="addFormRref"
      label-width="100px"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="addForm.email"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="tel">
        <el-input v-model="addForm.tel"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    // 验证邮箱的规则
    var checkEmail = (rule, value, cb) => {
      // 邮箱正则表达式
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (regEmail.test(value)) {
        return cb();
      }
      cb(new Error("请输入合法的邮箱"));
    };

    // 验证手机号的规则
    var checkTel = (rule, value, cb) => {
      const regTel =
        /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/;
      if (regTel.test(value)) {
        return cb();
      }
      cb(new Error("请输入合法的电话"));
    };
    return {
      // 获取用户列表的参数对象
      queryInfo: {
        query: "",
        // 当前的页数
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 10,
      },
      UserList: [],
      total: 0,
      // 控制添加用户对话框的显示和隐藏
      addDialogVisible: false,
      //添加用户的表单数据
      addForm: {
        email: "",
        tel: "",
      },
      //添加表单验证规则对象
      addFormRules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" },
        ],
        tel: [
          { required: true, message: "请输入电话", trigger: "blur" },
          { validator: checkTel, trigger: "blur" },
        ],
      },
    };
  },
};
</script>

<style>
</style>
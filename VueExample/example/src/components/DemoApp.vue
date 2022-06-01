<template>
  <div class="textcenter">
    <el-form
      ref="simpleForm"
      :model="simpleForm"
      label-width="100px"
      :rules="simpleRules"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="simpleForm.name" placeholder="请输入您的姓名" />
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="simpleForm.sex">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input
          v-model.number="simpleForm.age"
          placeholder="请输入您的年龄"
        />
      </el-form-item>
      <el-form-item label="所在年级" prop="class">
        <el-select v-model="simpleForm.class" placeholder="请选择您的年级">
          <el-option label="一年级" value="一年级" />
          <el-option label="二年级" value="二年级" />
          <el-option label="三年级" value="三年级" />
          <el-option label="四年级" value="四年级" />
          <el-option label="五年级" value="五年级" />
          <el-option label="六年级" value="六年级" />
        </el-select>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="simpleForm.phone" placeholder="请输入您的手机号码" />
      </el-form-item>
      <el-form-item label="爱好" prop="hobby">
        <el-checkbox-group v-model="simpleForm.hobby">
          <el-checkbox label="唱歌" name="hobby" />
          <el-checkbox label="跳舞" name="hobby" />
          <el-checkbox label="跑步" name="hobby" />
          <el-checkbox label="健身" name="hobby" />
          <el-checkbox label="做饭" name="hobby" />
          <el-checkbox label="吃货" name="hobby" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="deviceOnSubmit()" 
          >立即创建</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /**
       * 简单的表单
       */
      // 表单模型
      simpleForm: {
        name: "",
        sex: "",
        age: "",
        class: "",
        phone: "",
        hobby: [],
      },
      deviceFormVisible: false,
      deviveInfo: {},
      // 表单规则
      simpleRules: {
        name: [
          { required: true, message: "请输入您的姓名", trigger: "blur" },
          { min: 3,max: 10,message: "长度在 3 到 10 个字符",trigger: "blur",},
        ],
        sex: [
          { required: true, message: "请选择您的性别", trigger: "change" }
        ],
        age: [
          { required: true, message: "请选择您的年龄", trigger: "blur" },
          { type: "number", message: "年龄必须为数值类型", trigger: "blur" },
        ],
        class: [
          { required: true, message: "请选择您所在的年级", trigger: "change" },
        ],
        phone: [
          { required: true, message: "请输入您的手机号码", trigger: "blur" },
          { min: 11, max: 11, message: "请输入11位手机号", trigger: "blur" },
        ],
        hobby: [
          { required: true, message: "至少选择一个爱好", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 保存设备
    deviceOnSubmit() {
      this.updateState({
        deviceFormVisible: false,
        deviveInfo: {},
      });
    },
  },
};
</script>

<style>
.textcenter {
  margin: 0 auto;
  max-width: 50%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-form-item__content {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
</style>
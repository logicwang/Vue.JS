<template>
  <div>
    <div id="app">
      <h1>职位的增删改查</h1>
      <div class="head">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-input
              v-model="userInfo.name"
              placeholder="请输入你的公司名"
            ></el-input>
          </el-col>
          <el-col :span="6">
            <el-input
              v-model="userInfo.position"
              placeholder="请输入你的职位"
            ></el-input>
          </el-col>
          <el-col :span="6">
            <el-input
              v-model="userInfo.major"
              placeholder="请输入你的专业"
            ></el-input>
          </el-col>
          <el-col :span="6">
            <el-input
              v-model="userInfo.number"
              placeholder="请输入数量"
            ></el-input>
          </el-col>
        </el-row>
        <el-button type="primary" @click="addUser" class="add-btn" plain
          >添加信息</el-button
        >
      </div>
      <!-- 主体内容 -->
      <div class="body">
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="序号" width="180"
              ><template slot-scope="scope">
                {{ scope.$index + 1 }}
              </template></el-table-column
            >
            <el-table-column
              prop="name"
              label="公司名"
              width="180"
            ></el-table-column>
            <el-table-column prop="position" show-overflow-tooltip label="职位"></el-table-column>
            <el-table-column prop="major" show-overflow-tooltip label="专业"></el-table-column>
            <el-table-column prop="number" show-overflow-tooltip label="数量"></el-table-column>
            <el-table-column prop="birthday" show-overflow-tooltip label="操作">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  @click="editUser(scope.row, scope.$index)"
                  circle
                ></el-button>
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  @click="delUser(scope.$index)"
                  circle
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
      <!-- 编辑框 -->
      <el-dialog
        title="编辑用户信息"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <div>
          <el-form ref="form" :model="editObj" label-width="80px">
            <el-form-item label="公司名"
              ><el-input v-model="editObj.name"></el-input
            ></el-form-item>
            <el-form-item label="职位"
              ><el-input v-model="editObj.position"></el-input
            ></el-form-item>
            <el-form-item label="专业"
              ><el-input v-model="editObj.major"></el-input
            ></el-form-item>
            <el-form-item label="数量"
              ><el-input v-model="editObj.number"></el-input
            ></el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallApp",
  data() {
    return {
      userInfo: {
        name: "",
        position: "",
        major: "",
        number: "",
      },
      tableData: [
        {
          name: "互联网+学院",
          position: "专职教师专职教师专职教师专职教师专职教师",
          major: "对外贸易",
          number: "2",
        },
        {
          name: "徐州重工",
          position: "工厂车研发部工程师",
          major: "精密机械制造",
          number: "12",
        },
        {
          name: "北京青码科技",
          position: "前端开发工程师",
          major: "Vue、React",
          number: "4",
        },
      ],
      dialogVisible: false,
      editObj: {
        name: "",
        position: "",
        major: "",
        number: "",
      },
      userIndex: 0,
    };
  },
  methods: {
    //添加
    addUser() {
      if (!this.userInfo.name) {
        this.$message({
          message: "请输入你的公司名！",
        });
        return;
      }
      if (!this.userInfo.position) {
        this.$message({
          message: "请输入你的职位！",
          type: "warning",
        });
        return;
      }
      if (!this.userInfo.major) {
        this.$message({
          message: "请输入你的专业！",
          type: "warning",
        });
        return;
      }
      if (!this.userInfo.number) {
        this.$message({
          message: "请输入数量！",
          type: "warning",
        });
        return;
      }
      this.tableData.push(this.userInfo);
      this.userInfo = {
        name: "",
        position: "",
        major: "",
        number: "",
      };
    },

    //删除
    delUser(idx) {
      this.$confirm("确认删除此用户信息？")
        .then((_) => {
          this.tableData.splice(idx, 1), { _ };
        })
        .catch((_) => {
          _;
        });
    },
    //编辑
    editUser(item, idx) {
      this.userIndex = idx;
      this.editObj = {
        name: item.name,
        position: item.position,
        major: item.major,
        number: item.number,
      };
      this.dialogVisible = true;
    },

    handleClose() {
      this.dialogVisible = false;
    },

    confirm(Vue) {
      this.dialogVisible = false;
      Vue.set(this.tableData, this.userIndex, this.editObj);
    },
  },
};
</script>

 <style>
#app {
  width: 1024px;
  margin: 0 auto;
}
.add-btn {
  margin-top: 20px;
  width: 100%;
}
.body {
  margin-top: 20px;
  border: 1px solid #ebeef5;
}
.el-button--primary.is-plain {
  color: #409eff;
  margin-top: 24px;
  background: #ecf5ff;
  border-color: #b3d8ff;
  margin-bottom: 30px;
}
</style>
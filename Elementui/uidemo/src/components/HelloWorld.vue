<!-- 通讯录页 -->
<template>
  <div class="page-item page-callrecords">
    <div class="page-content" ref="pageTab">
      <div class="page-tab">
        <el-form
          :model="selectForm"
          ref="selectForm"
          label-width="80px"
          class="form"
        >
          <el-form-item label="姓名：" class="form-item">
            <el-input
              v-model="selectForm.name"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="电话：" class="form-item style">
            <el-input
              v-model="selectForm.phone"
              placeholder="请输入电话1或电话2"
            ></el-input>
          </el-form-item>
          <div class="clear"></div>
          <!-- 
          <el-form-item label="分类" class="form-item">
            <el-select v-model="form.classify" placeholder="选择" class="form-item">
              <el-option label="分类一" value="shanghai"></el-option>
              <el-option label="分类二" value="beijing"></el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item>
            <el-button
              type="primary"
              icon="el-icon-search"
              class="form-btn btn-style right"
              @click="onSelect()"
              >搜索</el-button
            >
          </el-form-item>
          <el-button
            type="primary"
            icon="el-icon-plus"
            class="form-btn right"
            @click="onAddRow()"
            >添加</el-button
          >
        </el-form>
        <!-- 表格试视图 v-if="cutLayout"-->
        <el-table
          :data="tableDataList"
          style="width: 100%"
          :max-height="tabHeight"
          border
          :header-cell-style="{ background: '#00abbe', color: '#fff' }"
        >
          <!--
          <el-table-column type="selection" width="40"></el-table-column> -->
          <el-table-column
            prop="id"
            label="id"
            width="50"
            align="center"
          ></el-table-column>
          <!--
          <el-table-column style="color: #828282" align="center" prop="classify" label="分类"></el-table-column> -->
          <el-table-column
            align="center"
            prop="name"
            label="姓名"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="phone1"
            min-width="170"
            label="电话1"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="phone2"
            min-width="170"
            label="电话2"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="address"
            width="226"
            min-width="170"
            label="地址"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="remark"
            label="备注"
          ></el-table-column>
          <el-table-column align="center" label="操作" width="190">
            <template slot-scope="scope">
              <!-- size="small" -->
              <el-button
                size="mini"
                class="operation-btn"
                round
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                class="operation-btn operation-btn-delete"
                round
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[5, 10, 20, 30]"
          :page-size="5"
          layout="prev, pager, next,  sizes, total, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
    <!-- 新增 编辑 窗口 -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      class="change-pwd"
      style="width: 1300px"
    >
      <table>
        <tr>
          <td width="100px;"></td>
          <td>
            <el-form :model="dialogForm" ref="dialogForm">
              <el-form-item label="姓名：" class="form-item">
                <el-input
                  v-model="dialogForm.name"
                  placeholder="请输入姓名"
                ></el-input>
              </el-form-item>
              <el-form-item label="电话1" class="form-item">
                <el-input
                  v-model="dialogForm.phone1"
                  placeholder="请输入电话1"
                ></el-input>
              </el-form-item>
              <el-form-item label="电话2" class="form-item">
                <el-input
                  v-model="dialogForm.phone2"
                  placeholder="请输入电话2"
                ></el-input>
              </el-form-item>
              <el-form-item label="地址" class="form-item">
                <el-input
                  v-model="dialogForm.address"
                  placeholder="请输入地址"
                ></el-input>
              </el-form-item>
              <el-form-item label="备注" class="form-item">
                <el-input
                  v-model="dialogForm.remark"
                  placeholder="请输入备注"
                ></el-input>
              </el-form-item>
            </el-form>
            <div>
              <el-button @click="dialogCancel()">取消</el-button>
              <el-button
                type="primary"
                v-on:click="dialogSave()"
                :loading="addLoading"
                >保存</el-button
              >
            </div>
          </td>
        </tr>
      </table>
    </el-dialog>
  </div>
</template>

<script>
//import { mapState } from 'vuex'
var _index; //定义一个全局变量，以获取行数据的行号
export default {
  name: "HelloWorld",
  components: {},
  props: {},
  data() {
    return {
      dialogTitle: "", //对话框标题
      dialogVisible: false, //是否显示新增窗口
      dialogForm: [], //对话框中的form 新增和编辑
      pageCurrentNum: "", //当前页码
      addLoading: false,
      selectForm: {
        //查询条件的form
        name: "",
        phone: "",
        classify: "",
      },
      tableData: [
        {
          id: "100",
          classify: "分类一",
          name: "刘加料",
          phone1: "1381111111",
          phone2: "12877777",
          address: "中国",
          remark: "备注2",
          operation: "",
        },
        {
          id: "101",
          classify: "分类二",
          name: "王国为",
          phone1: "1392222222",
          phone2: "12888888888",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "102",
          classify: "分类一",
          name: "刘辚中",
          phone1: "1392274422",
          phone2: "12887777788",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "103",
          classify: "分类二",
          name: "刘珍从",
          phone1: "13922456562",
          phone2: "12883534888",
          address: "中国",
          remark: "备注3",
          operation: "",
        },
        {
          id: "104",
          classify: "分类二",
          name: "李国为",
          phone1: "1392234222",
          phone2: "1282348888",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "105",
          classify: "分类一",
          name: "王五中",
          phone1: "1392226786722",
          phone2: "109834588",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "106",
          classify: "分类二",
          name: "贺炜洁",
          phone1: "1392222222",
          phone2: "12888888888",
          address: "中国",
          remark: "备注3",
          operation: "",
        },
        {
          id: "107",
          classify: "分类一",
          name: "刘加料",
          phone1: "1381111111",
          phone2: "12877777",
          address: "中国",
          remark: "备注2",
          operation: "",
        },
        {
          id: "108",
          classify: "分类二",
          name: "王标准",
          phone1: "1392222222",
          phone2: "12888888888",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "109",
          classify: "分类一",
          name: "刘宵厅",
          phone1: "1392112422",
          phone2: "1288327788",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "110",
          classify: "分类二",
          name: "刘材料",
          phone1: "139786456562",
          phone2: "122344888",
          address: "中国",
          remark: "备注3",
          operation: "",
        },
        {
          id: "111",
          classify: "分类二",
          name: "李杰杰",
          phone1: "139223422",
          phone2: "128234823288",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "112",
          classify: "分类一",
          name: "王为要",
          phone1: "1392222346722",
          phone2: "102334588",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "113",
          classify: "分类二",
          name: "贺炒菜",
          phone1: "1392222222",
          phone2: "12888888888",
          address: "中国",
          remark: "备注3",
          operation: "",
        },
        {
          id: "114",
          classify: "分类一",
          name: "刘加料",
          phone1: "1381111111",
          phone2: "12877777",
          address: "中国",
          remark: "备注2",
          operation: "",
        },
        {
          id: "115",
          classify: "分类二",
          name: "王国为",
          phone1: "1392222222",
          phone2: "12888888888",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "116",
          classify: "分类一",
          name: "王口水",
          phone1: "1392274422",
          phone2: "12887777788",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "117",
          classify: "分类二",
          name: "刘中断",
          phone1: "13922456562",
          phone2: "12883534888",
          address: "中国",
          remark: "备注3",
          operation: "",
        },
        {
          id: "118",
          classify: "分类二",
          name: "张灯具",
          phone1: "1392234222",
          phone2: "1282348888",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "119",
          classify: "分类一",
          name: "张材要",
          phone1: "1392226786722",
          phone2: "109834588",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "120",
          classify: "分类二",
          name: "王可数",
          phone1: "1392222222",
          phone2: "12888888888",
          address: "中国",
          remark: "备注3",
          operation: "",
        },
        {
          id: "121",
          classify: "分类一",
          name: "李尖凿",
          phone1: "1381111111",
          phone2: "12877777",
          address: "中国",
          remark: "备注2",
          operation: "",
        },
        {
          id: "122",
          classify: "分类二",
          name: "王顶替",
          phone1: "1392222222",
          phone2: "12888888888",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "123",
          classify: "分类一",
          name: "赵酒店",
          phone1: "1392112422",
          phone2: "1288327788",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "124",
          classify: "分类二",
          name: "王灯光",
          phone1: "139786456562",
          phone2: "122344888",
          address: "中国",
          remark: "备注3",
          operation: "",
        },
        {
          id: "125",
          classify: "分类二",
          name: "刘耧杰",
          phone1: "139223422",
          phone2: "128234823288",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "126",
          classify: "分类一",
          name: "李安",
          phone1: "1392222346722",
          phone2: "102334588",
          address: "中国",
          remark: "备注1",
          operation: "",
        },
        {
          id: "127",
          classify: "分类二",
          name: "王为菜",
          phone1: "1392222222",
          phone2: "12888888888",
          address: "中国",
          remark: "备注3",
          operation: "",
        },
      ],
      tableDataList: [],
      tableDataSelect: [],
      currentPage4: 1,
      tabHeight: 1080,
      total: 20,
      pagetRowNum: 5, //每页显示的行数
      //cutLayout: false,
    };
  },
  computed: {
    //...mapState(['tableDataAllPage'])
  },
  watch: {},

  beforeCreate() {},
  beforeUpdate() {
    this.tabHeight = this.$refs.pageTab.offsetHeight - 137;
  },
  beforeMount() {},
  mounted() {
    let _this = this;
    window.onresize = function () {
      if (_this.$refs.pageTab) {
        _this.tabHeight = _this.$refs.pageTab.offsetHeight - 137;
      }
    };

    this.ListLoadData(); //初始化列表
  },

  methods: {
    handleSizeChange(val) {
      //每页显示条数 变化事件
      console.log(`每页的行数 ${val} 条`);
      this.pagetRowNum = val;
      this.ListLoadData(); //改变每页的行数则 重新计算列表
    },
    handleCurrentChange(val) {
      //页码 变化事件
      console.log(`当前页: ${val - 1}`);
      this.tableDataList = this.tableDataAllPage[val - 1].list;
      this.pageCurrentNum = val; //当前页码
    },
    //初始化 列表数据
    ListLoadData() {
      //-------获取 列表数据 -------Sina API--Axios跨域 Get请求--------------------------------
      var dataLength = 0;
      dataLength = this.tableData.length;

      console.log("总行数: " + this.tableData.length + " " + dataLength);
      /* 分页算法 */
      this.tableDataAllPage = [];
      this.total = dataLength; //总行数
      var pageCount = Math.ceil(dataLength / this.pagetRowNum); //页数=总行数/每页的行数
      console.log("页数: " + pageCount);
      //遍历所有的分组
      var i = 0;
      var y = 0;
      for (var x = 1; x <= pageCount; x++) {
        var tabData = { list: [] };
        //console.log("第 "+x+"页---------------------------------------------");
        for (y; y < dataLength; y++) {
          //for(var y in response.data){
          //console.log("插入数据:  "+ y );
          var objList = {
            id: this.tableData[y].id,
            classify: this.tableData[y].classify,
            name: this.tableData[y].name,
            phone1: this.tableData[y].phone1,
            phone2: this.tableData[y].phone2,
            address: this.tableData[y].address,
            remark: this.tableData[y].remark,
            operation: this.tableData[y].operation,
          };
          tabData.list.push(objList);
          //console.log("插入数据: "+response.data[y].userID+" "+response.data[y].userName+" "+response.data[y].userExten+"");
          i++;
          if (i >= x * this.pagetRowNum) {
            //当数页码 * 每页的行数
            //console.log("当数页码:  "+ i +" " + x*this.pagetRowNum );
            y++; //加一
            break;
          }
        }
        this.tableDataAllPage.push(tabData);
      }
      this.tableDataList = this.tableDataAllPage[0].list;
      //--------------------------------------------------------------
    },
    //查询
    onSelect() {
      console.log(
        "onSelect 查询 " + this.selectForm.name + " " + this.selectForm.phone
      );
      var url =
        "http://192.168.1.75:5011/httpCli?action=query" +
        "&name=" +
        this.selectForm.name +
        "&phone=" +
        this.selectForm.phone;
      this.$http
        .get(url)
        .then((data) => {
          console.log(data);
          //this.tableform = data.body;
        })
        .catch((err) => {
          console.log(err);
        });
      /*
      this.tableDataSelect=this.tableData;
      var i=0;var len=this.tableData.length;
      for(i;i<len;i++){       
        if(this.selectForm.name!=""){
          if(this.selectForm.name!=this.tableData[i].name){
            console.log('onSelect name去除 ' + i +" " + this.tableData[i].name);
            this.tableData.splice(i, 1);           
            
          }
        }  
        if(this.selectForm.phone!=""){
          if(this.selectForm.phone!=this.tableData[i].phone1){
            this.tableData.splice(i, 1);
            console.log('onSelect phone1去除 ' + i +" " + this.tableData[i].phone1);
          }
        }        
      }*/
    },
    //新增数据
    onAddRow() {
      _index = -1; //-1为新增
      this.dialogTitle = "新增";
      this.dialogVisible = true;
      this.dialogForm = {
        name: "",
        phone1: "",
        phone2: "",
        address: "",
        remark: "",
      };
    },
    //编辑数据--------------------------------------------------------
    handleEdit(index, row) {
      console.log("handleEdit index:" + index + "  name:" + row.name);
      this.dialogTitle = "编辑";
      this.dialogVisible = true;
      this.dialogForm = Object.assign({}, row);
      _index = index; //用于判断是新增还是编辑
      //取到这一栏的值，也就是明白是在那一栏进行操作，从而将编辑后的数据存到表格中
    },
    //取消按扭
    dialogCancel() {
      this.dialogVisible = false; //对话框 不显示
    },
    //对话框 保存按钮
    dialogSave() {
      if (_index == -1) {
        this.sumbitAddRow(); //保存 新增
      } else {
        this.sumbitEditRow(); //保存 编辑
      }
    },
    //将新增的数据添加到表格中
    sumbitAddRow() {
      console.log("name: " + this.dialogForm.name);
      var new_id = this.tableData[this.tableData.length - 1].id;
      new_id = parseInt(new_id) + 1; //id 自动加 1
      console.log("new_id " + new_id);
      this.tableform = this.tableform || [];
      this.tableData.push({
        id: new_id,
        name: this.dialogForm.name,
        phone1: this.dialogForm.phone1,
        phone2: this.dialogForm.phone2,
        address: this.dialogForm.address,
        remark: this.dialogForm.remark,
      });
      //storage.set('url', this.url);
      this.ListLoadData(); //重新加载 数据
      this.handleCurrentChange(this.tableDataAllPage.length); //页码变化事件 跳到最后一页
      this.dialogVisible = false; //对话框 不显示
    },
    //保存编辑
    sumbitEditRow() {
      console.log(
        "sumbitEditRow _index:" + _index + "  name:" + this.dialogForm.name
      );
      this.dialogVisible = false; //对话框 不显示
      //更新当前列表的行内容
      var editData_index = _index; //当前页的行号
      this.tableDataList[editData_index].name = this.dialogForm.name;
      this.tableDataList[editData_index].phone1 = this.dialogForm.phone1;
      this.tableDataList[editData_index].phone2 = this.dialogForm.phone2;
      this.tableDataList[editData_index].address = this.dialogForm.address;
      this.tableDataList[editData_index].remark = this.dialogForm.remark;

      //同步更新 原始数据
      var edit_id = this.tableDataList[editData_index].id;
      var i = 0;
      for (i; i < this.tableData.length; i++) {
        //console.log("遍历数据:  "+ this.tableData[i].name );
        if (this.tableData[i].id == edit_id) {
          this.tableData[i].name = this.dialogForm.name;
          this.tableData[i].phone1 = this.dialogForm.phone1;
          this.tableData[i].phone2 = this.dialogForm.phone2;
          this.tableData[i].address = this.dialogForm.address;
          this.tableData[i].remark = this.dialogForm.remark;
        }
      }
      //
    },
    //删除数据-------------------------------------------------
    handleDelete(index, row) {
      console.log("handleDelete index:" + index + "  name:" + row.name);
      this.$confirm("确认要删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //删除
          //第一步 取这个 id 所在的 行号
          var i = 0;
          var del_index = -1;
          for (i; i < this.tableData.length; i++) {
            //console.log("遍历数据:  "+ this.tableData[i].name );
            if (this.tableData[i].id == row.id) {
              del_index = i;
            }
          }
          console.log("删除前 总行数: " + this.tableData.length + " ");
          this.tableData.splice(del_index, 1);
          console.log("删除后 总行数: " + this.tableData.length + " ");
          this.ListLoadData(); //重新加载 数据
          //console.log( "当前页: "+this.pageCurrentNum + " "   );
          this.handleCurrentChange(this.pageCurrentNum); //跳转至 当前页
          this.$message({ type: "success", message: "删除成功，傻逼!" });
        })
        .catch((err) => {
          if (err != "cancel") {
            this.$message({ type: "error", message: "删除失败，脑残! " + err });
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 22px;
}
.el-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.style {
  width: 48%;
  float: left;

}
.clear {
  clear: both;
}
  .btn-style{
        /* margin-left: 80px; */
    width: 10%;
    float: right;
    position: relative;
    bottom: 63px;
    right: 400px;
  }
</style>
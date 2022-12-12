<template>
  <div class="users">
    <el-input
      placeholder="请输入内容"
      v-model="input"
      class="input-with-select"
      style="width: 400px"
    >
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="search"
      ></el-button>
    </el-input>
    <el-button
      type="primary"
      @click="dialogFormVisible = true"
      style="margin-left: 20px; cursor: pointer; margin-bottom: 20px"
      >添加用户</el-button
    >
    <el-button
      type="primary"
      style="margin-left: 20px; cursor: pointer; margin-bottom: 20px"
      >全部清空</el-button
    >
    <!-- 表格渲染 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" width="30" label="#"> </el-table-column>
      <el-table-column prop="username" label="姓名" width=""> </el-table-column>
      <el-table-column prop="email" label="邮箱" width=""> </el-table-column>
      <el-table-column prop="mobile" label="电话" width=""> </el-table-column>
      <el-table-column prop="role_name" label="角色" width="">
      </el-table-column>
      <el-table-column label="状态" width="66">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.mg_state"
            @change="changeState(scope.row)"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="173">
        <template slot-scope="scope">
          <el-button
            @click="edit(scope.row)"
            type="primary"
            icon="el-icon-edit"
            size="mini"
          ></el-button>
          <el-button
            @click="del(scope.row)"
            type="danger"
            icon="el-icon-delete"
            size="mini"
          ></el-button>
          <el-button
            @click="set(scope.row)"
            type="warning"
            size="mini"
            icon="el-icon-setting"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="params.pagenum"
      :page-sizes="[1, 2, 5, 10, 15, 20, 100]"
      :page-size="params.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>

    <!-- 添加对话框 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
      <!-- 表单 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 编辑对话框 -->
    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible1">
      <!-- 表单 -->
      <el-form
        :model="ruleForm1"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm1.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm1.mobile"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="editOk()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 分页
      total: 10,
      tableData: [],
      value1: "",
      // 请求参数
      params: {
        query: "",
        pagenum: 1,
        pagesize: 5,
      },
      // 输入框
      input: "",
      // 添加-对话框
      dialogFormVisible: false,
      ruleForm: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      // 编辑-对话框
      dialogFormVisible1: false,
      ruleForm1: {
        email: "",
        mobile: "",
      },
      formLabelWidth: "120px",
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 获取数据、渲染页面
    getList() {
      this.$http
        .send(
          `users?query=${this.params.query}&pagenum=${this.params.pagenum}&pagesize=${this.params.pagesize}`
        )
        .then((res) => {
          console.log(res);
          if (res.data.meta.status == 200) {
            this.tableData = res.data.data.users;
            this.total = res.data.data.total;
          }
        }); 
    },
    // 添加用户
    add(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.send("/users", this.ruleForm, "post").then((res) => {
            // console.log(res);
            this.getList();
            this.dialogFormVisible = false;
            this.ruleForm = {
              username: "",
              password: "",
              email: "",
              mobile: "",
            };
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 单个删除用户
    del(row) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // console.log(row.id);
          this.$http.send("users/" + row.id, {}, "delete").then((res) => {
            // console.log(res.data);
            if (res.data.meta.status == 200) {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.getList();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 设置按钮
    set(row) {
      // 其实为一键删除
      this.$http.send("users/" + row.id, {}, "delete").then((res) => {
        this.getList();
      });

      // 修改角色信息  ????
      /* this.$http.send("users/"+row.id+row.role_name,{rid:-1},put).then(res=>{
        console.log(res.data);
        this.getList()
      }) */
    },

    // 搜索
    search() {
      this.params.query = this.input;
      this.getList();
    },  
    // 编辑内容
    edit(row) {
      this.dialogFormVisible1 = true;
      this.ruleForm1.email = row.email;
      this.ruleForm1.mobile = row.mobile;
      this.ruleForm1.id = row.id;
    },
    // 发送编辑
    editOk() {
      this.$http
        .send("users/" + this.ruleForm1.id, this.ruleForm1, "put")
        .then((res) => {
          console.log(res.data);
          this.getList();
          this.dialogFormVisible1 = false;
        });
    },
    // 修改状态
    changeState(row) {
      // console.log(row.mg_state);
      this.$http
        .send("users/" + row.id + "/state/" + row.mg_state,{},"put")
        .then((res) => {
          
          // console.log(res.data);
          this.getList();
        });
    },
    // 分页/修改每页数量
    handleSizeChange(val) {
      console.log(val);
      this.params.pagesize = val;
      this.getList();
    },
    // 分页/当前页
    handleCurrentChange(val) {
      console.log(val);
      this.params.pagenum = val;
      this.getList();
    },
  },
  created() {
    this.getList();
    // this.set(row)
  },
  computed: {},
};
</script>

<style lang='scss' scoped>
.users {
  margin-top: 10px;
  padding: 20px 20px;
  text-align: left;
  background: #fff;
  border-radius: 5px;
}
</style>

<template>
  <div class="roles">
    <el-button
      type="primary"
      @click="dialogFormVisible = true"
      style="cursor: pointer; margin-bottom: 20px"
      >添加角色</el-button
    >
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="角色描述">
            <span>{{ props.row.roleName }}</span>
          </el-form-item>
          <el-form-item label="角色名称">
            <span>{{ props.row.roleDesc }}</span>
          </el-form-item>
          <el-form-item label="角色 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="#"
      type="index">
    </el-table-column>
    <el-table-column
      label="角色名称"
      prop="roleName">
    </el-table-column>
    <el-table-column
      label="角色描述"
      prop="roleDesc">
    </el-table-column>
    <el-table-column label="操作" width="290">
        <template slot-scope="scope">
          <el-button
            @click="edit(scope.row)"
            type="primary"
            icon="el-icon-edit"
            size="mini"
          >编辑</el-button>
          <el-button
            @click="del(scope.row)"
            type="danger"
            icon="el-icon-delete"
            size="mini"
          >删除</el-button>
          <el-button
            @click="setRoles(scope.row.id)"
            type="warning"
            size="mini"
            icon="el-icon-setting"
          >分配权限</el-button>
        </template>
      </el-table-column>
  </el-table>

  <!-- 添加、编辑模态框 -->
  <el-dialog :title="editId==-1?'添加角色':'编辑信息'" :visible.sync="dialogFormVisible">
      <!-- 表单 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="ruleForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add('ruleForm')">确 定</el-button>
      </div>
  </el-dialog>

  <!-- 分配权限模态框 -->
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible1">
    <el-tree
  :data="treeList"
  show-checkbox
  default-expand-all
  node-key="id"
  ref="tree"
  highlight-current
  :props="defaultProps">
  </el-tree>

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="setTree()">确 定</el-button>
  </div>
</el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      roleId:-1,
      defaultProps:{
        children: 'children',
        label: 'authName'
      },
      editId:-1,
      tableData: [{
          id: '12987122',
          roleDesc: '董事长',
          roleName: '王晓亮',
        }, 
      ],
      dialogFormVisible: false,
      ruleForm: {
        roleName: "",
        roleDesc: "",
      },
      rules: {
        roleName: [
          { required: true, message: "请输入角色名称", trigger: "blur" },
        ],
        roleDesc: [
          { required: true, message: "请输入角色描述", trigger: "blur" },
        ],
      },
      dialogFormVisible1: false,
      treeList:[]
    };
  },
  methods: {
    // 获取角色列表
    getlist(){
      this.$http.get("roles").then(res=>{
        console.log(res.data);
        if (res.data.meta.status == 200) {
          this.tableData = res.data.data
        }
      })
    },
    // 添加、编辑角色
    add(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.editId == -1) {
            this.$http.post("/roles", this.ruleForm).then((res) => {
            console.log(res.data);
            // this.getList();
            if (res.data.meta.status == 201) {
            this.dialogFormVisible = false;
            this.ruleForm = {
              roleName: "",
              roleDesc: "",
            };
            this.getlist()
            this.$message({
                type: "success",
                message: "添加成功!",
              });
            }
          });
          }else {
            this.$http.put("roles/"+this.editId, this.ruleForm).then((res) => {
            console.log(res.data);
            // this.getList();
            if (res.data.meta.status == 200) {
            this.dialogFormVisible = false;
            this.ruleForm = {
              roleName: "",
              roleDesc: "",
            };
            this.getlist()
            this.$message({
                type: "success",
                message: "更新成功!",
              });
            }
            this.editId = -1
          });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 删除角色
    del(row){
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // console.log(row.id);
          this.$http.delete("roles/" + row.id).then((res) => {
            // console.log(res.data);
            if (res.data.meta.status == 200) {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.getlist()
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
    // 编辑回填
    edit(row){
      console.log(row);
      this.dialogFormVisible = true
      this.editId = row.id
      this.ruleForm.roleName = row.roleName
      this.ruleForm.roleDesc = row.roleDesc
    },
    // 获取权限列表
    getTree(){
      this.$http.get("rights/tree").then(res=>{
        console.log(res.data);
        if (res.data.meta.status == 200) {
          this.treeList = res.data.data
        }
      })
    },
    // 打开分配权限
    setRoles(id){
      this.dialogFormVisible1 = true
      this.roleId = id
      // console.log(id);
    },
    // 确认分配权限
    setTree(){
      // console.log(this.$refs.tree.getCheckedKeys());
      // 获取半选中的ID
      // console.log(this.$refs.tree.getHalfCheckedKeys());
      var rids = this.$refs.tree.getCheckedKeys().join(",")
      // console.log(rids);
      this.$http.post("roles/"+this.roleId+"/rights",{rids:rids}).then(res=>{
        console.log(res.data);
        if (res.data.meta.status = 200) {
          this.$message({
                type: "success",
                message: "权限更新成功!",
              });
          this.dialogFormVisible1 = false
        }
      })
    }
  },
  created() {
    this.getlist()
    this.getTree()
  },
};
</script>

<style lang='scss' scoped>
.roles{
  margin-top: 10px;
  padding: 20px 20px;
  text-align: left;
  background: #fff;
  border-radius: 5px;
}

.demo-table-expand {
    font-size: 0;
    padding: 0 10px;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

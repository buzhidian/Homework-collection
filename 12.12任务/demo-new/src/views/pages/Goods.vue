<template>
  <div class="goods">
    <el-input
      placeholder="请输入搜索内容"
      v-model="input"
      class="input-with-select"
      style="width: 400px"
      clearable
    >
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="search"
      ></el-button>
    </el-input>
    <el-button
      type="primary"
      @click="$router.push('addGoods')"
      style="margin-left: 20px; cursor: pointer; margin-bottom: 20px"
      >添加商品</el-button
    >
    <!-- 表格渲染 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="#" width="40"> </el-table-column>
      <el-table-column prop="goods_name" label="商品名称" width="">
      </el-table-column>
      <el-table-column prop="goods_price" label="商品价格(元)" width="120">
      </el-table-column>
      <el-table-column prop="goods_weight" label="商品重量" width="100">
      </el-table-column>
      <el-table-column label="添加时间" width="160">
        <template slot-scope="scope">
          {{ scope.row.add_time | filtime }}
          <!-- {{setTime(scope.row.add_time)}} -->
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120">
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

    <!-- 编辑对话框 -->
    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible1">
      <!-- 表单 -->
      <el-form
        :model="ruleForm1"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品名称" prop="goods_name">
          <el-input v-model="ruleForm1.goods_name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="goods_price">
          <el-input v-model="ruleForm1.goods_price"></el-input>
        </el-form-item>
        <el-form-item label="商品重量" prop="goods_weight">
          <el-input v-model="ruleForm1.goods_weight"></el-input>
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
      // 请求参数
      params: {
        query: "",
        pagenum: 1,
        pagesize: 10,
      },
      // 输入框
      input: "",
      // 添加-对话框
      dialogFormVisible: false,
      ruleForm: {
        goods_name: "",
        goods_cat: "1,2,3",
        goods_price: "",
        goods_number: "",
        goods_weight: "",
      },
      // 编辑-对话框
      dialogFormVisible1: false,
      ruleForm1: {
        goods_id: "",
        goods_name: "",
        goods_price: "",
        goods_weight: "",
        goods_number: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    // 获取数据、渲染页面
    getList() {
      this.$http
        .get("/goods", {
          params: this.params,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.meta.status == 200) {
            this.tableData = res.data.data.goods;
            this.total = res.data.data.total;
          }
        });
    },
    // 添加用户
    add(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post("/goods", this.ruleForm).then((res) => {
            console.log(res.data);
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
    // 单个删除商品
    del(row) {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log(row.goods_id);
          this.$http.delete("goods/" + row.goods_id).then((res) => {
            // console.log(res.data);
            if (res.data.meta.status == 200) {
              this.$message({
                type: "success",
                message: res.data.meta.msg,
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

    // 搜索
    search() {

      this.params.query = this.input;
      this.getList();
    },
    // 编辑内容
    edit(row) {
      console.log(row);
      this.dialogFormVisible1 = true;
      this.ruleForm1.goods_id = row.goods_id;
      this.ruleForm1.goods_name = row.goods_name;
      this.ruleForm1.goods_price = row.goods_price;
      this.ruleForm1.goods_weight = row.goods_weight;
      this.ruleForm1.goods_number = row.goods_number;
    },
    // 请求编辑
    editOk() {
      this.$axios
        .put("goods/" + this.ruleForm1.goods_id, this.ruleForm1)
        .then((res) => {
          console.log(res.data);
          this.$message.error(res.data.meta.msg);
          this.getList();
          this.dialogFormVisible1 = false;
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
  },
  filters: {
    filtime(val) {
      if (val > 1600000000 && val < 1660060799) {
        let time = new Date(val * 1000).toLocaleString().split("");
        time.splice(4, 1, "-");
        time.splice(6, 1, "-");
        let newTime = time.join("");
        return newTime;
      } else {
        let time = new Date(val * 1000).toLocaleString().split("");
        time.splice(4, 1, "-");
        time.splice(7, 1, "-");
        let newTime = time.join("");
        return newTime;
      }
      // return val
    },
  },
};
</script>

<style lang='scss' scoped>
.goods {
  margin-top: 10px;
  padding: 20px 20px;
  text-align: left;
  background: #fff;
  border-radius: 5px;
}
</style>

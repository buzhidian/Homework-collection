<template>
  <div class="index">
    <el-button type="primary" size="mini" class="add" @click="add">新增任务</el-button>
    <el-button type="primary" size="mini" class="clear" @click="open">清空任务</el-button>
    <el-calendar v-model="value">
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template slot="dateCell" slot-scope="{ date,data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          <!-- {{date.toLocaleDateString()}} -->
          {{ Number(data.day.split("-").slice(-1).join("-")) }}
          <!-- {{ data.isSelected ? "✔️" : "" }} -->
        <ul>
          <li :class="{ active: item.resource == 1 }" v-for="(item, index) in list" :key="index"
            v-show="(item.date == date.toLocaleDateString())" @click="edit(item, index)">
            {{ item.name }}
          </li>
        </ul>
        </p>
      </template>
    </el-calendar>

    <!-- 对话框 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="事件名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="代办时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item label="事件状态" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="0">代办</el-radio>
            <el-radio label="1">已办</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">{{ (editId == -1 ? "立即创建" : "修改") }}</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
      editId: -1,
      dialogFormVisible: false,
      ruleForm: {
        name: "",
        date1: new Date(),
        date2: "",
        resource: "0",
      },
      formLabelWidth: "120px",
      rules: {
        name: [
          { required: true, message: '请输入事件名称', trigger: 'blur' },
        ],
        date1: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择事件状态', trigger: 'change' }
        ],
      }
    };
  },
  methods: {
    // 新增
    add() {
      this.ruleForm = {
        name: "",
        date1: this.value,
        date2: "",
        resource: "0",
      }
      this.dialogFormVisible = true
    },
    // 创建
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(this.ruleForm);
          console.log(this.ruleForm.date1.toLocaleDateString());

          if (this.editId == -1) {
            this.$store.commit("add", { ...this.ruleForm, date: this.ruleForm.date1.toLocaleDateString() })
          } else {
            this.$store.commit("edit", { ...this.ruleForm, date: this.ruleForm.date1.toLocaleDateString(), index: this.editId })
            this.editId = -1
          }

          this.ruleForm = {
            name: "",
            date1: new Date(),
            date2: "",
            resource: "0",
          }

          this.dialogFormVisible = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 取消
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.editId = -1
      this.dialogFormVisible = false
    },
    // 回填
    edit(item, index) {
      this.editId = index
      this.dialogFormVisible = true
      console.log(item);
      this.ruleForm = { ...item, date1: new Date(item.date1), date2: new Date(item.date2), }
    },
    // 清空
    open() {
      this.$confirm('是否清空所有任务?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.commit("clear")
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    clear() {
      console.log(111);
    }
  },
  created() { },
  mounted() { },
  computed: {
    list() {
      return this.$store.state.list
    }
  }
};
</script>

<style lang='scss' scoped>
* {
  list-style: none;
}

p {
  width: 100%;
  height: 100%;
  // overflow: auto;
  text-align: left;
  padding: 0;
  margin: 0;

  // background: pink;
  ul {
    width: 100%;
    height: 73%;
    // background: pink;
    overflow: auto;
    padding: 0;
    margin: 0;
    color: #fff;

    li {
      padding: 3px;
      text-align: center;
      width: 70%;
      font-size: 12px;
      margin-bottom: 3px;
      background: #79b042;
      user-select: none;
    }

    .active {
      background: #881634;
    }
  }
}

.is-selected {
  color: #1989fa;
}

button {
  padding: 10px;
}
</style>

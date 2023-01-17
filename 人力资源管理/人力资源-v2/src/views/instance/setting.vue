<template>
  <!-- 审批设置 -->
  <div class="Security">
    <ul>
      <li>
        <span>请假</span> |
        <div class="box">
          <el-switch v-model="value1" active-color="#13ce66" />
          <i class="el-icon-setting" @click="dialogVisible = true"></i>
        </div>
      </li>
      <li>
        <span>加班</span> |
        <div class="box">
          <el-switch v-model="value2" active-color="#13ce66" />
          <i class="el-icon-setting" @click="dialogVisible = true"></i>
        </div>
      </li>
      <li>
        <span>离职</span> |
        <div class="box">
          <el-switch v-model="value3" active-color="#13ce66" />
          <i class="el-icon-setting" @click="dialogVisible = true"></i>
        </div>
      </li>
    </ul>
    <!-- 弹出框 -->
    <el-dialog :visible.sync="dialogVisible" title="提示" width="40%">
      <div class="block">
        <el-upload drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
          <i class="el-icon-upload"></i>
          <div>将文件拖到此处</div>
        </el-upload>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
      dialogVisible: false,
      state: {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Security {
  margin: 15px;
  height: 120px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  ul {
    display: flex;
    margin-top: 15px;
    li {
      width: 180px;
      border: 1px solid #eee;
      display: flex;
      margin-right: 20px;
      border-radius: 4px;
      align-items: center;
      justify-content: space-between;
      padding: 15px 20px;
      box-sizing: border-box;
      color: rgb(121, 120, 120);
      .box {
        position: relative;
        .el-switch {
          margin-right: 10px;
        }
        .el-icon-setting {
          position: absolute;
          top: -6px;
        }
      }
    }
  }
}
.block {
  width: 100%;
  height: 200px;
  text-align: center;
  .el-avatar {
    margin-top: 60px;
  }
}
</style>

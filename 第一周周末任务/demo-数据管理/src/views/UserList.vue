<template>
  <div class="userList">
    <!-- 表格 -->
    <el-table ref="singleTable" :data="userList" style="width: 100%">
      <el-table-column type="index" label="#" width="100px"> </el-table-column>
      <el-table-column property="registe_time" label="注册日期" width="">
      </el-table-column>
      <el-table-column property="username" label="用户姓名" width="">
      </el-table-column>
      <el-table-column property="city" label="注册地址"> </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="20"
      layout="total, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
  
  <script>
import { getUserList, getNum4 } from "../utils/API";
export default {
  data() {
    return {
      userList: [],
      total: 0,
      currentPage1: 1,
    };
  },
  methods: {
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage1 = val;
      getUserList((this.currentPage1 - 1) * 20).then((res) => {
        console.log(res);
        this.userList = res;
      });
    },
  },
  created() {
    // 获取用户总数
    getNum4().then((res) => {
      console.log(res);
      this.total = res.count;
    });
    // 获取用户列表
    getUserList(0).then((res) => {
      console.log(res);
      this.userList = res;
    });
  },
};
</script>
  
  <style lang='scss' scoped>
.el-pagination {
  margin: 20px;
}
  .el-table{
    border: 1px solid #dfe6ec;
  }
</style>
  
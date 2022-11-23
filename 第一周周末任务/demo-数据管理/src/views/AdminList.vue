<template>
  <div class="adminList">
    <!-- 表格 -->
    <el-table ref="singleTable" :data="adminList" style="width: 100%">
      <el-table-column property="user_name" label="姓名" width="">
      </el-table-column>
      <el-table-column property="create_time" label="注册日期" width="">
      </el-table-column>
      <el-table-column property="city" label="地址"> </el-table-column>
      <el-table-column property="admin" label="权限"> </el-table-column>
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
import { getNum6, getAdminList } from "../utils/API";
export default {
  data() {
    return {
      adminList: [],
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
      getAdminList((this.currentPage1 - 1) * 20).then((res) => {
        console.log(res.data);
        this.adminList = res.data;
      });
    },
  },
  created() {
    getNum6().then((res) => {
      console.log(res);
      this.total = res.count;
    });
    getAdminList(0).then((res) => {
      console.log(res.data);
      this.adminList = res.data;
    });
  },
};
</script>
  
  <style lang='scss' scoped>
.el-pagination {
  margin: 20px;
}
.el-table {
  border: 1px solid #dfe6ec;
}
</style>
  
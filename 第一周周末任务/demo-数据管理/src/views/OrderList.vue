<template>
  <div class="orderList">
    <el-table :data="orderList" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="店铺名称">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="收货地址">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.restaurant_id }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="订单 ID" prop="id"> </el-table-column>
      <el-table-column label="总价格" prop="total_amount"> </el-table-column>
      <el-table-column label="订单状态" prop="status_bar.title"> </el-table-column>
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
import { getOrderTotal, getOrderList } from "../utils/API";
export default {
  data() {
    return {
      orderList: [],
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
      getOrderList((this.currentPage1 - 1) * 20).then((res) => {
        console.log(res);
        this.orderList = res;
      });
    },
  },
  created() {
    getOrderTotal().then((res) => {
      console.log(res);
      this.total = res.count;
    });
    getOrderList(0).then((res) => {
      console.log(res);
      this.orderList = res;
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
  .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 45%;
    padding-left: 50px;
  }
</style>
  
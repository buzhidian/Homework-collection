<template>
  <div class="shopList">
    <el-table :data="shopList" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="店铺名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="店铺介绍">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="联系电话">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="评分">
              <span>{{ props.row.rating }}</span>
            </el-form-item>
            <el-form-item label="销售量">
              <span>{{ props.row.recent_order_num }}</span>
            </el-form-item>
            <el-form-item label="分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="店铺名称" prop="name"> </el-table-column>
      <el-table-column label="商品地址" prop="address"> </el-table-column>
      <el-table-column label="店铺详情" prop="description"> </el-table-column>
      <el-table-column label="操作"> 
        <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          @click="addFood(scope.$index, scope.row)">添加食品</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
      </el-table-column>
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
import { getAddress, getShopTotal, getShopList } from "../utils/API";
export default {
  data() {
    return {
      shopList: [],
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
      getShopList((this.currentPage1 - 1) * 20).then((res) => {
        console.log(res);
        this.shopList = res;
      });
    },
    handleEdit(index,row){
      console.log(index,row);
    },
    addFood(index,row){
      console.log(index,row);
    },
    handleDelete(index,row){
      console.log(index,row);
    },
  },
  created() {
    /* getAddress().then(res=>{
        console.log(res);
      }) */
    getShopTotal().then((res) => {
      console.log(res);
      this.total = res.count;
    });
    getShopList(0).then((res) => {
      console.log(res);
      this.shopList = res;
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
  // .demo-table-expand {
  //   font-size: 22;
  // }
  // .demo-table-expand label {
  //   width: 90px;
  //   color: #e8c8c5 ;
  //   background: pink;
  // }
  .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 45%;
    padding-left: 50px;
  }
</style>
  
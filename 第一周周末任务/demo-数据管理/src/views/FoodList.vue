<template>
  <div class="footList">
    <!-- 表格 -->
    <el-table
      :data="goodList"
      row-key="item_id"
      :expand-row-keys="expandKeys"
      @expand-change="expandChange()"
      style="width: 100%"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="食品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="餐馆名称">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="食品ID">
              <span>{{ props.row.item_id }}</span>
            </el-form-item>
            <el-form-item label="餐馆 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="食品介绍">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="餐馆地址">
              <span>{{ props.row.pinyin_name }}</span>
            </el-form-item>
            <el-form-item label="评分">
              <span>{{ props.row.rating }}</span>
            </el-form-item>
            <el-form-item label="食品分类">
              <span>{{ props.row.category_id }}</span>
            </el-form-item>
            <el-form-item label="月销量">
              <span>{{ props.row.month_sales }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="食品名称" prop="name"> </el-table-column>
      <el-table-column label="食品介绍" prop="description"> </el-table-column>
      <el-table-column label="评分" prop="rating"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
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
import {
  getGoodTotal,
  getGoodList,
  getGoodMsg,
  getRestaurantMsg,
} from "../utils/API";
export default {
  data() {
    return {
      goodList: [],
      total: 0,
      currentPage1: 1,
      msg1: {},
      msg2: {},
      expandKeys: [],
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
      getGoodList((this.currentPage1 - 1) * 20).then((res) => {
        console.log(res);
        this.goodList = res;
      });
    },
    // 编辑
    handleEdit(index, row) {
      console.log(index, row);
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
    },

    // 展开
    expandChange(row, expandedRows) {
      console.log(111);
      console.log(row, expandedRows);

      // 获取餐厅信息
      getRestaurantMsg().then((res) => {
        console.log(res);
        this.msg1 = res;
      });
      // 获取食品信息
      getGoodMsg().then((res) => {
        console.log(res);
        this.msg2 = res;
      });
    },
  },
  created() {
    getGoodTotal().then((res) => {
      console.log(res);
      this.total = res.count;
    });
    getGoodList(0).then((res) => {
      console.log(res[2]);
      this.goodList = res;
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
  
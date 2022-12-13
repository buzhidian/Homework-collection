<template>
  <div class="orders">
    <el-card class="box-card">
      <el-input
        style="width: 500px"
        placeholder="请输入内容"
        v-model="value"
        class="input-with-select"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-table :data="orderslist" border style="width: 100%">
        <el-table-column label="#" width="60" type="index"> </el-table-column>
        <el-table-column label="订单编号" prop="order_number">
        </el-table-column>
        <el-table-column label="订单价格" prop="order_price"> </el-table-column>
        <el-table-column label="是否付款" prop="pay_status">
          <template slot-scope="scope">
            <el-button
              size="mini"
              :type="scope.row.pay_status == 0 ? 'danger' : 'primary'"
              >{{ scope.row.pay_status == 0 ? "未付款" : "已付款" }}</el-button
            >
          </template>
        </el-table-column>
        <el-table-column label="是否发货" prop="is_send"> </el-table-column>
        <el-table-column label="下单时间" prop="create_time">
          <template slot-scope="scope">
            <span>{{ new Date(scope.row.create_time).toLocaleString() }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
          <el-button
            type="success"
            size="mini"
            icon="el-icon-location-outline"
          ></el-button>
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
    </el-card>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      orderslist: [],
      value: "",
      params: {
        query: "",
        pagenum: 1,
        pagesize: 10,
      },
      // 分页
      total: 10,
    };
  },
  methods: {
    // 请求
    getList(){
      this.$http
      .send(
        `/orders?query=${this.params.query}&pagenum=${this.params.pagenum}&pagesize=${this.params.pagesize}`
      )
      .then((res) => {
        console.log(res);
        this.orderslist = res.data.data.goods;
        this.total = res.data.data.total;
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
    this.getList()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>
  
  <style lang='scss' scoped>
</style>
  
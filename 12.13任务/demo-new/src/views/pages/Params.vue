<template>
  <div class="params">
    <el-card class="card">
      <header>
        <i class="el-icon-info"></i> 注意：只允许为第三级分类设置相关参数！
      </header>
      <div class="cate">
        选择商品分类：<el-cascader
          v-model="value"
          :options="shopaddlist"
          :props="cascaderProps"
        ></el-cascader>
      </div>

      <el-tabs type="border-card">
        <el-tab-pane label="动态参数">
          <!-- 动态参数表格 -->
          <el-table :data="calsslist" border style="width: 100%">
            <el-table-column width="60"> </el-table-column>
            <el-table-column type="index" label="#" width="60">
            </el-table-column>
            <el-table-column label="参数名称"> </el-table-column>
            <el-table-column label="操作"> </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="静态参数">
          <!-- 动态参数表格 -->
          <el-table :data="calsslist" border style="width: 100%">
            <el-table-column width="60"> </el-table-column>
            <el-table-column type="index" label="#" width="60">
            </el-table-column>
            <el-table-column label="属性名称"> </el-table-column>
            <el-table-column label="操作"> </el-table-column> </el-table
        ></el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      calsslist: [],
      shopaddlist: [],
      cascaderProps: {
        //匹配响应数据中的children
        children: "children", 
        //匹配响应数据中的name
        label: "cat_name", 
        //匹配响应数据中的id
        value: "cat_id", 
        expandTrigger: "hover",
      },
      value: "",
    };
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>
  
  <style lang='scss' scoped>
  .card {
  padding: 5px;
  box-sizing: border-box;
  margin-top: 10px;
  header {
    width: 100%;
    height: 40px;
    color: #fff;
    background: #e6a23c;
    line-height: 40px;
    margin-bottom: 10px;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 13px;
  }
}
.cate {
  margin: 15px 0;
}
</style>
  
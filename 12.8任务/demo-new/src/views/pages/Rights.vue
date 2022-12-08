<template>
  <div class="rights">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      type="index"
      label="#"
      width="50">
    </el-table-column>
    <el-table-column
      prop="authName"
      label="权限名称"
      width="">
    </el-table-column>
    <el-table-column
      prop="path"
      label="路径"
      width="180">
    </el-table-column>
    <el-table-column
      label="权限等级">
      <template slot-scope="scope">
        <el-button size="mini" v-if="scope.row.level == 0" type="" class="button1">一级</el-button>
        <el-button size="mini" v-if="scope.row.level == 1" type="" class="button2">二级</el-button>
        <el-button size="mini" v-if="scope.row.level == 2" type="" class="button3">三级</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData:[]
    };
  },
  methods: {
    getList(){
      this.$http.get("rights/list").then(res=>{
        console.log(res.data);
        this.tableData = res.data.data
      })
    }
  },
  created() {
    this.getList()
  },
};
</script>

<style lang='scss' scoped>
.rights{
  margin-top: 10px;
  padding: 20px 20px;
  text-align: left;
  background: #fff;
  border-radius: 5px;
}
.button1{
  color: #3e8fe0;
  background-color: #e4f0fa;
}
.button2{
  color: #92c588;
  background-color: #eef5e3;
}
.button3{
  color: #e2b17d;
  background-color: #f9f6e6;
}
</style>

<template>
  <!-- 考勤报表模块 -->
  <div class="Atrtreport">
    <el-card class="card">
      <h3>202303月人事报表</h3>
      <el-tabs v-model="activeName">
        <el-tab-pane label="考勤统计" name="first"></el-tab-pane>
      </el-tabs>
      <div class="btn">
        <el-button type="primary" size="mini" @click="exportExcel()">导出</el-button>
      </div>
      <!-- 表格 -->
      <el-table :data="tableData" border>
        <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
        <el-table-column prop="workNumber" label="工号" width="100"> </el-table-column>
        <el-table-column prop="mobile" label="手机号" width="130"> </el-table-column>
        <el-table-column prop="department" label="部门" width="120"> </el-table-column>
        <el-table-column prop="dayOffLeaveDays" label="事假" width="100"> </el-table-column>
        <el-table-column prop="absenceDays" label="调休" width="100"> </el-table-column>
        <el-table-column prop="normalDays" label="正常" width="100"> </el-table-column>
        <el-table-column prop="laterTimes" label="迟到次数" width="100"> </el-table-column>
        <el-table-column prop="earlyTimes" label="早退次数" width="100"> </el-table-column>
        <el-table-column prop="archiveDate" label="日均时长" width="100"> </el-table-column>
        <el-table-column prop="leaveDays" label="旷工天数" width="100"> </el-table-column>
        <el-table-column prop="archiveDate" label="是否全勤" width="100"> </el-table-column>
        <el-table-column prop="archiveDate" label="实际出勤天数" width="120"> </el-table-column>
        <el-table-column prop="archiveDate" label="应出勤工作日" width="120"> </el-table-column>
        <el-table-column prop="archiveDate" label="计薪标准" width="100"> </el-table-column>
        <el-table-column prop="archiveDate" label="计薪天数" width="100"> </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination layout="prev, pager, next" :total="10"> </el-pagination>
      <!-- 底部按钮 -->
      <div class="but">
        <el-button size="mini" type="primary">归档202303月份报表</el-button>
        <el-button size="mini" type="primary">新建报表</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { Atrtgetreport } from "@/api/attenDances"
export default {
  data() {
    return {
      activeName: "first",
      tableData: []
    }
  },
  created() {
    /*请求数据*/
    Atrtgetreport().then((res) => {
      console.log(res)
      this.tableData = res.data.data
    })
  },
  methods: {
    /**导出 */
    exportExcel() {
      require.ensure([], () => {
        const { export_json_to_excel } = require("@/excel/Export2Excel")
        const fieldName = ["姓名", "工号", "手机号", "部门"]
        const filterVal = ["name", "workNumber", "mobile", "department"]
        const data = this.tableData.map((v) => filterVal.map((j) => v[j]))
        export_json_to_excel(fieldName, data, "用户列表")
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Atrtreport {
  padding: 10px;

  .card {
    padding: 0 10px;

    h3 {
      text-align: center;
    }

    .btn {
      text-align: right;
      margin-top: 15px;
    }

    .el-table {
      margin-top: 20px;
    }
    .el-pagination {
      text-align: center;
      margin-top: 15px;
    }
    .but {
      text-align: center;
      margin-top: 10px;
    }
  }
}
</style>

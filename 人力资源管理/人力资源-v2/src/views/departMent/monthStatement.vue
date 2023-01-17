<template>
  <div class="month">
    <div class="box">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span class="paddTit">社保报表</span>
          </div>
        </template>
        <div class="card-header">
          <div style="display: flex; align-items: center; justify-content: space-between">
            <div style="display: flex; align-items: center">
              <span style="display: flex; align-items: center; margin-right: 20px">
                <span class="color" style="background-color: #cfeffe"></span>已离职
              </span>
              <span style="display: flex; align-items: center; margin-right: 20px">
                <span class="color" style="background-color: #a8f8bb"></span>再入职
              </span>
              <span style="display: flex; align-items: center; margin-right: 20px">
                <span class="color" style="background-color: #fedbd7"></span>公司合计
              </span>
              <span style="display: flex; align-items: center; margin-right: 20px">
                <span class="color" style="background-color: #ffe8c9"></span>一级部门
              </span>
              <span style="display: flex; align-items: center">
                <span class="color" style="background-color: #fdfcd5"></span>二级部门
              </span>
            </div>
            <div>
              <el-button type="primary">导出</el-button>
            </div>
          </div>
        </div>
        <el-table border :data="tableData" style="width: 100%; margin-top: 20px">
          <el-table-column type="index" label="序号" width="60" />
          <el-table-column prop="username" label="姓名" />
          <el-table-column prop="timeOfEntry" label="入职时间" />
          <el-table-column prop="mobile" label="手机号" />
          <el-table-column prop="idNumber" label="身份证号码" width="150" />
          <el-table-column prop="theHighestDegreeOfEducation" label="学历" />
          <el-table-column prop="address" label="开户行" />
          <el-table-column prop="firstLevelDepartment" label="一级部门" />
          <el-table-column prop="address" label="二级部门" />
          <el-table-column prop="address" label="工作城市" />
          <el-table-column prop="socialSecurityComputerNumber" label="社保电脑号" />
          <el-table-column prop="address" label="公积金账号" />
          <el-table-column prop="address" label="离职时间" />
          <el-table-column prop="address" label="户籍类型" />
          <el-table-column prop="providentFundCity" label="参保城市" />
          <el-table-column prop="socialSecurityMonth" label="社保月份" />
          <el-table-column prop="socialSecurityBase" label="社保基数" />
          <el-table-column prop="socialSecurity" label="社保合计" />
          <el-table-column prop="socialSecurityEnterprise" label="社保企业" />
          <el-table-column prop="socialSecurityIndividual" label="社保个人" />
          <el-table-column prop="providentFundCity" label="公积金城市" />
          <el-table-column prop="socialSecurityMonth" label="公积金月份" />
          <el-table-column prop="providentFundBase" label="公积金基数" />
          <el-table-column prop="providentFundBase" label="公积金企业基数" />
          <el-table-column prop="personalRatioOfProvidentFund" label="公积金企业比例" />
          <el-table-column prop="providentFundBase" label="公积金个人基数" />
          <el-table-column prop="personalRatioOfProvidentFund" label="公积金个人比例" />
          <el-table-column prop="totalProvidentFund" label="公积金合计" />
          <el-table-column prop="providentFundEnterprises" label="公积金企业" />
          <el-table-column prop="providentFundIndividual" label="公积金个人" />
          <el-table-column prop="address" label="养老企业基数" />
          <el-table-column prop="address" label="养老企业比例" />
          <el-table-column prop="address" label="养老企业" />
          <el-table-column prop="address" label="养老个人基数" />
          <el-table-column prop="address" label="养老个人比例" />
          <el-table-column prop="address" label="养老个人" />
          <el-table-column prop="address" label="失业企业基数" />
          <el-table-column prop="address" label="失业企业比例" />
          <el-table-column prop="address" label="失业企业" />
          <el-table-column prop="address" label="失业个人基数" />
          <el-table-column prop="address" label="失业个人比例" />
          <el-table-column prop="address" label="失业个人" />
          <el-table-column prop="address" label="医疗企业基数" />
          <el-table-column prop="address" label="医疗企业比例" />
          <el-table-column prop="address" label="医疗企业" />
          <el-table-column prop="address" label="医疗个人基数" />
          <el-table-column prop="address" label="医疗个人比例" />
          <el-table-column prop="address" label="医疗个人" />
          <el-table-column prop="address" label="工伤企业基数" />
          <el-table-column prop="address" label="工伤企业比例" />
          <el-table-column prop="address" label="工伤企业" />
          <el-table-column prop="address" label="生育企业基数" />
          <el-table-column prop="address" label="生育企业比例" />
          <el-table-column prop="address" label="生育企业" />
          <el-table-column prop="address" label="大病企业基数" />
          <el-table-column prop="address" label="大病企业比例" />
          <el-table-column prop="address" label="大病企业" />
          <el-table-column prop="address" label="大病个人基数" />
          <el-table-column prop="address" label="大病个人比例" />
          <el-table-column prop="address" label="大病个人" />
          <el-table-column prop="providentFundNotes" label="公积金备注" />
          <el-table-column prop="socialSecurityNotes" label="社保备注" />
        </el-table>
        <div class="footer" style="margin-top: 20px; text-align: center">
          <el-button type="primary" @click="dialogVisible1 = true">归档02月份报表</el-button>
          <el-button type="primary" @click="dialogVisible = true">新建报表</el-button>
          <el-button type="info" @click="$router.back()">取消</el-button>
        </div>
      </el-card>
    </div>
    <!-- 新建报表？ -->
    <el-dialog title="新建报表" :visible.sync="dialogVisible" width="30%">
      <h2>你将创建《2020年03月》报表</h2>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 归档报表 -->
    <el-dialog title="归档报表" :visible.sync="dialogVisible1" width="30%">
      <h2>你确定要归档202002报表？报表归档将覆盖上一次归档记录,无法回复。</h2>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { month } from "@/api/departMent"
export default {
  data() {
    return {
      tableData: [],
      params: {
        month: 202002,
        opType: 1
      },
      dialogVisible: false,
      dialogVisible1: false
    }
  },
  methods: {},
  created() {
    month(this.params).then((res) => {
      console.log(res)
      this.tableData = res.data.data
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.month {
  height: 100%;
}
.box {
  height: calc(100% - 102px);
  background-color: #eaecef;
  padding: 20px;
}
.paddTit {
  padding: 0 30px 16px;
  font-size: 26px;
  font-weight: 900;
  color: #409eff;
  border-bottom: 4px solid #409eff;
}
.color {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid transparent;
  margin-right: 5px;
}
.footer {
  .el-button {
    font-size: 24px;
    padding: 20px 40px;
  }
}
</style>

<template>
  <div class="">
    <el-card>
      <div class="header">
        <div>本月：入职 离职 调薪 未定薪</div>
        <p>
          <el-button type="text">设置</el-button>
          <el-button type="text">20020389报表</el-button>
        </p>
      </div>
      <p>
        聘用形式: <span style="margin-right: 10px"><el-checkbox size="large" style="margin-right: 10px" />正式</span
        ><span><el-checkbox size="large" style="margin-right: 10px" />非正式</span>
      </p>
      <p>
        部门:
        <span v-for="(item, index) in list" :key="index" style="margin-right: 10px">
          <el-checkbox size="large" />
          {{ item }}</span
        >
      </p>
    </el-card>
    <el-card>
      <el-table :data="data.list2" style="width: 100%">
        <el-table-column type="index" label="序号" width="60" />
        <el-table-column prop="username" label="姓名" />
        <el-table-column prop="workNumber" label="工号" />
        <el-table-column prop="formOfEmployment" label="聘用形式" />
        <el-table-column prop="departmentName" label="部门" />
        <el-table-column prop="timeOfEntry" label="入职时间" />
        <el-table-column prop="currentBasicSalary" label="工资基数" />
        <el-table-column prop="通用方案" label="津贴方案" />
        <el-table-column prop="departmentName" label="操作">
          <el-button type="primary">调薪</el-button>
          <el-button>查看</el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
const store = useStore()
const router = useRouter()
const route = useRoute()
const data = reactive({
  list2: [
    {
      departmentName: '总裁办',
      timeOfEntry: '2018-11-02T08:00:00.000+0000',
      id: '1063705989926227968',
      mobile: '13800000002',
      workNumber: '9002',
      currentBasicSalary: 123.0,
      currentPostWage: 456.0,
      departmentId: '1175310929766055936',
      username: '66666',
      formOfEmployment: 2,
      inServiceStatus: 1
    },
    {
      timeOfEntry: '2018-11-04T08:00:00.000+0000',
      currentPostWage: 20.0,
      workNumber: '111',
      mobile: '13800000003',
      currentBasicSalary: 20.0,
      id: '1066370498633486336',
      departmentId: '1175311466846683136',
      departmentName: '市场部',
      username: '孙财',
      inServiceStatus: 1,
      formOfEmployment: 1
    },
    {
      timeOfEntry: '2018-12-02T08:00:00.000+0000',
      currentBasicSalary: 3.0,
      workNumber: '1111',
      id: '1071632760222810112',
      mobile: '13800000004',
      departmentName: '人事部',
      currentPostWage: 3.0,
      username: '。。。',
      departmentId: '1175311267684352000',
      inServiceStatus: 1,
      formOfEmployment: 1
    },
    {
      workNumber: '1001',
      username: '文吉星',
      departmentName: '人事部',
      id: '1074238801330704384',
      currentBasicSalary: 5000.0,
      departmentId: '1175311267684352000',
      mobile: '13400000001',
      currentPostWage: 5000.0,
      inServiceStatus: 1,
      timeOfEntry: '2018-01-01T00:00:00.000+0000',
      formOfEmployment: 1
    },
    {
      workNumber: '1002',
      currentBasicSalary: 100.0,
      departmentName: '人事部',
      currentPostWage: 100.0,
      mobile: '13400000002',
      id: '1074238801402007552',
      username: '巴思慧',
      departmentId: '1175311267684352000',
      inServiceStatus: 1,
      timeOfEntry: '2018-01-01T00:00:00.000+0000',
      formOfEmployment: 1
    },
    {
      departmentName: '总裁办',
      currentBasicSalary: 7.0,
      id: '1075383133106425856',
      username: '乔海',
      mobile: '13500000001',
      currentPostWage: 7.0,
      departmentId: '1175310929766055936',
      workNumber: '2001',
      inServiceStatus: 1,
      timeOfEntry: '2018-01-01T00:00:00.000+0000',
      formOfEmployment: 1
    },
    {
      username: '董昊空',
      departmentName: '总裁办',
      workNumber: '2002',
      currentPostWage: 123.0,
      mobile: '13500000002',
      id: '1075383135371350016',
      currentBasicSalary: 123.0,
      departmentId: '1175310929766055936',
      inServiceStatus: 1,
      timeOfEntry: '2018-01-01T00:00:00.000+0000',
      formOfEmployment: 1
    },
    {
      workNumber: '2003',
      departmentName: '财务部',
      departmentId: '1175311325720936448',
      mobile: '13500000003',
      username: '周乐天',
      id: '1075383135459430400',
      currentPostWage: 10.0,
      currentBasicSalary: 10.0,
      inServiceStatus: 1,
      timeOfEntry: '2018-01-01T00:00:00.000+0000',
      formOfEmployment: 1
    },
    {
      timeOfEntry: '1992-08-04T08:00:00.000+0000',
      id: '1235396724497268736',
      departmentName: '总裁办',
      currentBasicSalary: 8888.0,
      mobile: '13600000001',
      workNumber: '0001',
      currentPostWage: 8888.0,
      username: '吕勇锐',
      departmentId: '1175310929766055936',
      inServiceStatus: 1,
      formOfEmployment: 1
    },
    {
      username: '袁永安',
      mobile: '13600000002',
      workNumber: '0002',
      currentPostWage: null,
      departmentName: '总裁办',
      currentBasicSalary: null,
      id: '1235396819959627776',
      departmentId: '1175310929766055936',
      timeOfEntry: '1993-08-04T08:00:00.000+0000',
      inServiceStatus: 1,
      formOfEmployment: 1
    }
  ]
})
const list: Array<string> = reactive([
  '总裁办',
  '行政部',
  '人事部',
  '财务部',
  '技术部',
  '运营部',
  '市场部',
  '财务核算部',
  '税务管理部',
  '薪资管理部',
  'java研发部',
  'Python研发部',
  'Php研发部',
  '北京部事业部',
  '上海事业部',
  '水利部',
  'eee'
])
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  div {
    width: 230px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #9fdaff;
    background: #e6f7ff;
  }
}
</style>

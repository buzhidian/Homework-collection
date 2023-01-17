<template>
  <div class="">
    <!-- 社保页面 -->
    <el-card class="box-card">
      <div class="header">
        <div>本月:社保在缴 公积金在缴 增员 减员 入职 离职</div>
        <p><button>历史归档</button> <button>202001月报表</button></p>
      </div>
      部门:
      <span v-for="item in data.list1" :key="item.id" style="margin-right: 10px">
        <el-checkbox size="large" />
        {{ item.name }}</span
      >
      <p>社保城市：<input type="checkbox" /> 北京</p>
      <p>公积金城市：<input type="checkbox" /> 北京</p>
      <div></div>
    </el-card>
    <el-card>
      <el-table
        :data="data.list"
        :default-sort="{ prop: 'mobile workNumber timeOfEntry', order: 'descending' }"
        style="width: 100%"
      >
        <el-table-column type="index" label="序号" width="70" />
        <el-table-column prop="username" label="姓名" />
        <el-table-column prop="mobile" sortable label="手机号" />
        <el-table-column prop="workNumber" sortable label="工号" />
        <el-table-column prop="departmentName" label="部门" />
        <el-table-column prop="timeOfEntry" sortable label="入职时间" />
        <el-table-column prop="timeOfEntry" label="离职时间" />
        <el-table-column prop="participatingInTheCity" label="社保城市" />
        <el-table-column prop="providentFundCity" label="公积金城市" />
        <el-table-column prop="socialSecurityBase" label="社保基数" />
        <el-table-column prop="providentFundBase" label="公积金基数" />
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { sblist, sblist1 } from '@/api/api'
import { CODE } from '@/api/check.ts'
import { ElMessage } from 'element-plus'
const store = useStore()
const router = useRouter()
const route = useRoute()
const data = reactive({
  list: [],
  list1: []
})
// const list: Array<object> = reactive()
// const list1: Array<object> = reactive()
const pasis = reactive({
  page: 1,
  pageSize: 10
})
sblist(pasis).then((res) => {
  console.log(res)
  if (res.status == CODE.SUCCESS) {
    data.list = res.data.data.rows
  }
})
sblist1().then((res) => {
  console.log(res)
  if (res.status == CODE.SUCCESS) {
    data.list1 = res.data.data.depts
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  div {
    width: 340px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #9fdaff;
    background: #e6f7ff;
  }
  button {
    border: 0;
    background: rgba(255, 255, 255, 0);
  }
}
ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  li {
    flex: 120px;
  }
}
</style>

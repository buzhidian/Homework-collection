<template>
  <div class="">
    <!-- 审批页面 -->
    <el-card class="box-card">
      <div class="header">
        <div>当前审批中 0 本月审批通过 1 本月审批驳回 0</div>
        <button>流程设置</button>
      </div>
    </el-card>

    <el-card>
      <el-table
        :data="list"
        :default-sort="{ prop: 'processName username procCurrNodeUserName', order: 'descending' }"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column type="index" label="序号" width="70" />
        <el-table-column prop="processName" label="审批类型" />
        <el-table-column prop="username" sortable label="申请人" />
        <el-table-column prop="procCurrNodeUserName" sortable label="当前申请人" />
        <el-table-column prop="timeOfEntry" label="审批发起时间" />
        <el-table-column prop="processState" sortable label="审批状态" />
        <el-table-column label="操作">
          <el-button type="text">查看</el-button>
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
const list: Array<object> = reactive([
  {
    departmentId: '1175311466846683136',
    departmentName: '市场部',
    procApplyTime: 1569236187000,
    procCurrNodeUserId: '107163276022281011210742388013307043841074238801402007552',
    procCurrNodeUserName: '文吉星 巴思慧 ',
    procData:
      '{"duration":"1","reason":"个人原因","holidayType":"1","processName":"请假","processKey":"process_leave","startTime":"2019-09-16 00:00:00","applyUnit":"按天","endTime":"2019-09-17 00:00:00","userId":"1066370498633486336"}',
    processId: '1175967133311934464',
    processKey: 'process_leave',
    processName: '请假',
    processState: '2',
    timeOfEntry: 1541318400000,
    userId: '1066370498633486336',
    username: '孙财'
  },
  {
    departmentId: '1175311466846683136',
    departmentName: '市场部',
    procApplyTime: 1569236417000,
    procCurrNodeUserId: '10753831331064258561075383135371350016',
    procCurrNodeUserName: '乔海 董昊空',
    procData:
      '{"duration":"5","reason":"没有原因","holidayType":"1","processName":"请假","processKey":"process_leave","startTime":"2019-09-15 00:00:00","applyUnit":"按天","endTime":"2019-09-19 00:00:00","userId":"1066370498633486336"}',
    processId: '1175968095611101184',
    processKey: 'process_leave',
    processName: '请假',
    processState: '2',
    timeOfEntry: 1541318400000,
    userId: '1066370498633486336',
    username: '孙财'
  },
  {
    departmentId: '1175311466846683136',
    departmentName: '市场部',
    procApplyTime: 1569236544000,
    procCurrNodeUserId: '1063705989926227968',
    procCurrNodeUserName: '董昊空',
    procData:
      '{"duration":"1","reason":"xxxxx","holidayType":"1","processName":"请假","processKey":"process_leave","startTime":"2019-09-09 00:00:00","applyUnit":"按天","endTime":"2019-09-10 00:00:00","userId":"1066370498633486336"}',
    processId: '1175968628937826304',
    processKey: 'process_leave',
    processName: '请假',
    processState: '4',
    timeOfEntry: 1541318400000,
    userId: '1066370498633486336',
    username: '孙财'
  },
  {
    departmentId: '1175311466846683136',
    departmentName: '市场部',
    procApplyTime: 1569238151000,
    procCurrNodeUserId: '107163276022281011210742388013307043841074238801402007552',
    procCurrNodeUserName: '孙财 ',
    procData:
      '{"start_time":"2019-09-01 00:00:00","reason":"随便填","processName":"加班","end_time":"2019-09-02 00:00:00","processKey":"process_overtime","userId":"1066370498633486336"}',
    processId: '1175975371407335424',
    processKey: 'process_overtime',
    processName: '加班',
    processState: '2',
    timeOfEntry: 1541318400000,
    userId: '1066370498633486336',
    username: '孙财'
  },
  {
    departmentId: '1175310929766055936',
    departmentName: '总裁办',
    procApplyTime: 1583409279000,
    procCurrNodeUserId:
      '10637059899262279681075383133106425856107538313537135001612353967244972687361235396819959627776',
    procCurrNodeUserName: '管理员 乔海 董昊空 吕勇锐 袁永安 ',
    procData:
      '{"start_time":"2020-03-17 00:00:00","reason":"java开发","processName":"离职","end_time":"2020-03-29 00:00:00","processKey":"process_dimission","userId":"1063705989926227968"}',
    processId: '1235413390924881920',
    processKey: 'process_dimission',
    processName: '离职',
    processState: '1',
    timeOfEntry: 1541145600000,
    userId: '1063705989926227968',
    username: '管理员'
  },
  {
    departmentId: '1175310929766055936',
    departmentName: '总裁办',
    procApplyTime: 1583409371000,
    procCurrNodeUserId:
      '10637059899262279681075383133106425856107538313537135001612353967244972687361235396819959627776',
    procCurrNodeUserName: '管理员 乔海 董昊空 吕勇锐 袁永安 ',
    procData:
      '{"reason":"个人原因","processName":"离职","exceptTime":"2020-03-25 00:00:00","processKey":"process_dimission","userId":"1063705989926227968"}',
    processId: '1235413774988910592',
    processKey: 'process_dimission',
    processName: '离职',
    processState: '1',
    timeOfEntry: 1541145600000,
    userId: '1063705989926227968',
    username: '管理员'
  },
  {
    departmentId: '1175310929766055936',
    departmentName: '总裁办',
    procApplyTime: 1583409412000,
    procCurrNodeUserId: 'null',
    procCurrNodeUserName: '孙财 ',
    procData:
      '{"start_time":"2020-03-01 00:00:00","reason":"java工作计划","processName":"加班","end_time":"2020-03-25 00:00:00","processKey":"process_overtime","userId":"1063705989926227968"}',
    processId: '1235413946837934080',
    processKey: 'process_overtime',
    processName: '加班',
    processState: '1',
    timeOfEntry: 1541145600000,
    userId: '1063705989926227968',
    username: '管理员'
  }
])
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
    width: 100px;
    height: 30px;
    border: 0;
    background: #409eff;
    color: #fff;
  }
}
</style>

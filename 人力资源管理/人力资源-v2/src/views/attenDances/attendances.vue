<template>
  <div class="Attendance">
    <div class="box">
      <div class="top">
        <el-card>
          <div class="flex">
            <span>
              <el-tag size="large" style="font-size: 20px"><i class="el-icon-info"></i> 有 0 条考勤审批尚未处理</el-tag>
            </span>
            <span class="shou">
              <el-button type="danger" @click="$router.push('/attenimport')">导入</el-button>
              <el-button type="warning">提醒</el-button>
              <el-button type="primary" @click="Attsetupstatus = !Attsetupstatus">设置</el-button>
              <el-button @click="$router.push('/attenhistory')">历史归档</el-button>
              <el-button type="primary" @click="$router.push('/attport')">3月份报表</el-button>
            </span>
          </div>
        </el-card>
        <el-card class="card">
          <div class="list">
            <div class="list-left">
              <b>部门：</b>
            </div>
            <div class="list-right">
              <span class="span" v-for="(item, index) in Attentop" :key="item.id">
                <el-checkbox v-model="item.checked" size="large" @change="fliter(item, index)" />
                {{ item.name }}</span
              >
            </div>
          </div>
          <div class="list">
            <div class="list-left">
              <b>考勤状态: </b>
            </div>
            <span style="margin-right: 10px">
              <span>
                <el-radio-group v-model="radio1" class="ml-4">
                  <el-radio label="1" size="large">正常</el-radio>
                  <el-radio label="2" size="large">旷工</el-radio>
                  <el-radio label="3" size="large">事假</el-radio>
                  <el-radio label="4" size="large">调休</el-radio>
                  <el-radio label="5" size="large">迟到</el-radio>
                  <el-radio label="6" size="large">早退</el-radio>
                </el-radio-group>
              </span>
            </span>
          </div>
        </el-card>
      </div>
      <div class="list">
        <el-card class="box-card" style="height: 100%">
          <el-table border :data="tableData" style="width: 100%">
            <el-table-column label="序号" type="index" width="80px" />
            <el-table-column prop="username" label="姓名" width="100x" />
            <el-table-column prop="workNumber" label="工号" />
            <el-table-column prop="departmentName" label="部门" width="100x" />
            <el-table-column prop="mobile" label="手机" width="160" />
            <el-table-column prop="timeOfEntry" label="3/1"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/2"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/3"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/4"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/5"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/6"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/7"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/8"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/9"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/10"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/11"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/12"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/13"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/14"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/15"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/16"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/17"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/18"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/19"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/20"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/21"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/22"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/23"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/24"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/25"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/26"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/27"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/28"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/29"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/30"> 旷工</el-table-column>
            <el-table-column prop="timeOfEntry" label="3/31"> 旷工</el-table-column>
          </el-table>
          <el-pagination
            :current-page="params.page"
            :page-size="params.pagesize"
            :page-sizes="[10, 20, 30, 50]"
            layout="total, prev, pager, next"
            :total="params.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </el-card>
      </div>
    </div>
    <atten v-if="Attsetupstatus"></atten>
  </div>
</template>
<script>
import { Attendancetop, Attendancetable } from "@/api/attenDances"
import atten from "./atten.vue"
export default {
  components: { atten },
  data() {
    return {
      Attsetupstatus: false,
      params: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      radio1: 0,
      /*表格数据*/
      tableData: [],
      //备份数据
      // eslint-disable-next-line vue/no-reserved-keys
      _tableData: [],
      //头部数据
      Attentop: [],
      checked: false
    }
  },
  methods: {
    // 请求头部数据
    getAttentop() {
      Attendancetop().then((res) => {
        // console.log(res)
        this.Attentop = res.data.data.depts
        this.Attentop.forEach((ele) => {
          ele.checked = false
        })
      })
    },
    // 请求表格数据
    getTable() {
      Attendancetable(this.params).then((res) => {
        console.log(res)
        this.tableData = res.data.data.data.rows
        this._tableData = res.data.data.data.rows
        this.params.total = res.data.data.data.total
      })
    },
    // 分页逻辑
    handleSizeChange(val) {
      this.params.pageSize = val
      this.getTable()
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.getTable()
    },
    // 过滤筛选
    fliter(val, index) {
      this.Attentop[index].checked = !this.Attentop[index].checked
      if (val.checked == true) {
        this.tableData = this._tableData.filter((ele) => ele.departmentName == val.name)
      } else {
        this.tableData = this._tableData
      }
    }
  },
  created() {
    this.getAttentop()
    this.getTable()
  }
}
</script>
<style lang="scss" scoped>
.span {
  margin-right: 15px;
  margin-bottom: 10px;
  display: inline-block;
  font-size: 14px;
}
.el-table {
  font-size: 20px;
}
.card {
  margin-top: 10px;
}
.box {
  padding: 10px;
  background-color: #eceef1;
}
.list {
  margin-top: 10px;
}

.el-alert--info.is-light {
  border: 1px solid #439eff;
  background-color: #e6f7ff;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span:nth-child(2) {
    span {
      margin-right: 20px;
    }
  }
}
.el-pagination {
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
}
.shou:hover {
  cursor: pointer;
}
.box-card {
  font-size: 14px;
  .text {
    margin-left: 5px;
  }
  b {
    display: inline-block;
    width: 70px;
  }
  .el-checkbox {
    margin-left: 6px;
  }
}
.list {
  .list-left {
    width: 100px;
  }
  display: flex;
  align-items: center;
}
</style>

<template>
  <div class="permissions">
    <div class="con">
      <div class="top">
        <el-card class="box-card">
          <div>
            <div>
              <div class="flex">
                <span>
                  <el-alert type="info" show-icon :closable="false" style="color: #439eff">
                    <p class="fill">本月： 社保在缴 公积金在缴 增员 减员 入职 离职</p>
                  </el-alert>
                </span>
                <span class="shou">
                  <span @click="$router.push('/securitys')">历史归档</span>
                  <span @click="$router.push('/monthStatement')">202001月报表</span>
                </span>
              </div>
            </div>
            <div style="margin-top: 40px">
              <b>部门：</b>
              <span v-for="(item, index) in tableDataList" :key="item.id" style="margin-right: 10px">
                <el-checkbox size="large" :checked="item.check" @change="fliterName(item, index)" />
                {{ item.name }}</span
              >
            </div>
            <div style="margin-top: 20px">
              <b>社保城市：</b>
              <span v-for="item in tableDataCity" :key="item.id" style="margin-right: 10px">
                <el-checkbox size="large" @change="fliterCity(item.name)" />
                {{ item.name }}</span
              >
            </div>
            <div style="margin-top: 20px">
              <b>公积金城市：</b>
              <span v-for="item in tableDataCity" :key="item.id" style="margin-right: 10px">
                <el-checkbox size="large" @change="fliterCity(item.name)" />
                {{ item.name }}</span
              >
            </div>
          </div>
        </el-card>
      </div>
      <div class="list">
        <el-card class="box-card">
          <el-table :data="tableData" style="width: 100%; padding: 10px">
            <el-table-column label="序号" type="index" width="100px" />
            <el-table-column prop="username" label="姓名" sortable />
            <el-table-column prop="mobile" label="手机" sortable />
            <el-table-column prop="workNumber" label="工号" sortable />
            <el-table-column prop="departmentName" label="部门" sortable />
            <el-table-column prop="timeOfEntry" label="入职时间" sortable> </el-table-column>
            <el-table-column prop="address" label="离职时间" sortable>
              <div>----</div>
            </el-table-column>
            <el-table-column prop="providentFundCity" label="社保城市" />
            <el-table-column prop="participatingInTheCity" label="公积金城市" />
            <el-table-column prop="socialSecurityBase" label="社保基数" />
            <el-table-column prop="providentFundBase" label="公积金基数" />
            <el-table-column label="操作" width="100">
              <template slot-scope="scope">
                <el-button type="text" @click="$router.push({ name: 'secdetail', params: { id: scope.row.id } })"
                  >查看详情</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="page">
            <div class="right">
              <el-pagination
                :current-page="params.page"
                :page-size="params.pageSize"
                :page-sizes="[10, 20, 30, 50]"
                layout="sizes, prev, pager, next, jumper"
                :total="params.total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getList, section, city } from "@/api/departMent"
export default {
  data() {
    return {
      params: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      tableDataCopy: [],
      tableDataList: [],
      tableDataCity: [],
      check: false
    }
  },
  methods: {
    /**分页 */
    handleSizeChange(val) {
      this.params.pageSize = val
      this.get()
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.get()
    },
    /**请求数据，备份数据 */
    get() {
      getList(this.params).then((res) => {
        this.tableData = res.data.data.rows
        this.tableDataCopy = res.data.data.rows
        this.params.total = res.data.data.total
      })
    },
    /**筛选 过滤数据*/
    fliterName(val, index) {
      this.tableDataList[index].check = !this.tableDataList[index].check
      if (val.check == true) {
        this.tableData = this.tableDataCopy.filter((ele) => ele.departmentName == val.name)
      } else {
        this.tableData = this.tableDataCopy
      }
    },
    fliterCity(val) {
      this.tableData = this.tableDataCopy.filter((ele) => ele.providentFundCity == val)
    }
  },
  created() {
    this.get()
    section().then((res) => {
      console.log(res)
      this.tableDataList = res.data.data.depts
      this.tableDataList.forEach((ele) => {
        ele.check = false
      })
      console.log(this.tableDataList)
    })
    city().then((res) => {
      this.tableDataCity = res.data.data
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
p {
  background-color: #eaecef;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  margin: 0;
}
.con {
  padding: 20px;
  height: calc(100% - 102px);
  background-color: #eaecef;
}
.list {
  margin-top: 20px;
}
.page {
  width: 100%;
  height: 30px;
  .right {
    float: right;
  }
}
.el-table {
  font-size: 18px;
}
.el-alert--info.is-light {
  border: 1px solid #439eff;
  background-color: #e6f7ff;
}
.fill {
  background-color: #e6f7ff;
  color: #000;
  font-size: 18px;
  padding: 6px 0 10px 0;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span:nth-child(2) {
    span {
      margin-right: 20px;
      font-size: 18px;
    }
  }
}
.shou:hover {
  cursor: pointer;
}
</style>

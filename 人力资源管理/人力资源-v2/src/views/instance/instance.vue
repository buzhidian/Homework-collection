<template>
  <div class="instance">
    <div class="con">
      <el-card class="box-card">
        <div>
          <div>
            <div class="flex">
              <span>
                <el-alert type="info" show-icon :closable="false" style="color: #439eff">
                  <p class="fill">
                    当前审批中 {{ off.length }} 本月审批通过 {{ ok.length }} 本月审批驳回 {{ nOk.length }}
                  </p>
                </el-alert>
              </span>
              <span>
                <el-button type="primary" size="large" @click="$router.push('/setting')">流程设置</el-button>
              </span>
            </div>
          </div>
        </div>
      </el-card>
      <div class="list" style="margin-top: 20px">
        <el-card class="box-card">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="40px" />
            <el-table-column label="序号" type="index" width="60px" />
            <el-table-column prop="processName" label="审批类型" sortable />
            <el-table-column prop="username" label="申请人" sortable />
            <el-table-column prop="procCurrNodeUserName" label="当前审批人" sortable />
            <el-table-column prop="procApplyTime" label="审批发起时间" sortable>
              <template #default="scope">
                {{ new Date(scope.row.procApplyTime).toLocaleString() }}
              </template>
            </el-table-column>
            <el-table-column prop="processState" label="审批状态" sortable>
              <template #default="scope">
                <span v-if="scope.row.processState == 2"> <span class="qiu"></span>审批通过 </span>
                <span v-if="scope.row.processState == 4"> <span class="che"></span>撤销 </span>
                <span v-if="scope.row.processState == 1"> <span class="one"></span>审批中 </span>
                <span v-if="scope.row.processState == 3"> <span class="red"></span>审批不通过 </span>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="操作">
              <template slot-scope="scope">
                <div
                  style="color: #66b1ff"
                  @click="$router.push({ name: 'appsee', params: { id: scope.row.processId } })"
                >
                  查看
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div class="page" style="margin-top: 0.2rem">
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
import { instance } from "@/api/instance"
export default {
  data() {
    return {
      tableData: [],
      params: {
        page: 1,
        pageSize: 10,
        total: 0,
        year: 2018
      },
      ok: [],
      off: 0,
      nOk: 0
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(val)
    },
    handleCurrentChange(val) {
      console.log(val)
    }
  },
  created() {
    instance(this.params).then((res) => {
      this.tableData = res.data.data.rows
      this.ok = res.data.data.rows.filter((ele) => {
        return ele.processState == 2
      })
      this.off = res.data.data.rows.filter((ele) => {
        return ele.processState == 1
      })
      this.nOk = res.data.data.rows.filter((ele) => {
        return ele.processState == 3
      })
      this.params.total = res.data.data.total
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.instance {
  height: 100%;
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
  margin: 0;
}
.el-table {
  font-size: 18px;
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
.con {
  padding: 10px;
  background-color: #eaecef;
  height: calc(100% - 102px);
}
p {
  background-color: #eaecef;
  width: 100%;
  margin: 0;
  text-align: center;
  padding-bottom: 10px;
}
.page {
  width: 100%;
  height: 30px;
  .right {
    float: right;
  }
}
.qiu,
.che,
.one,
.red {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: #00a854;
  margin-right: 5px;
}
.che {
  background-color: #bfbfbf;
}
.one {
  background-color: #108ee9;
}
.red {
  background-color: #d00;
}
</style>

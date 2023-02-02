<template>
  <div class="staff">
    <el-card class="box-card">
      <div class="box">
        <div class="left">
          <i class="el-icon-warning-outline"></i>
          当前共有{{ num }}条记录
        </div>
        <div class="right">
          <el-button type="danger" @click="export2Excel()">普通excel导出</el-button>
          <el-button type="warning" @click="export2Excel()">负责excel导出</el-button>
          <el-button type="success" @click="$router.push('/uploading')">excel导入</el-button>
          <el-button type="primary" disabled>新增员工</el-button>
        </div>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="index" label="序号"> </el-table-column>
        <el-table-column prop="username" label="姓名" sortable> </el-table-column>
        <el-table-column prop="staffPhoto" label="头像">
          <template slot-scope="scope">
            <span v-if="scope.row.staffPhoto">
              <img :src="scope.row.staffPhoto" alt="" class="img" />
            </span>
            <span v-else>
              <img class="img" src="http://ihrm.itheima.net/static/img/bigUserHeader.fda3837f.png" alt="" />
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" sortable> </el-table-column>
        <el-table-column prop="workNumber" label="工号" sortable> </el-table-column>
        <el-table-column prop="formOfEmployment" label="聘用形式" sortable>
          <template slot-scope="scope">
            <span v-if="scope.row.formOfEmployment == 2">非正式</span>
            <span v-if="scope.row.formOfEmployment == 1">正式</span>
          </template>
        </el-table-column>
        <el-table-column prop="departmentName" label="部门" sortable> </el-table-column>
        <el-table-column prop="timeOfEntry" label="入职时间" sortable>
          <template slot-scope="scope">
            <span>{{ scope.row.timeOfEntry.slice(0, 10) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="enableState" label="账户状态" sortable>
          <template slot-scope="scope">
            <el-switch v-model="scope.row.enableState" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作" sortable>
          <template slot-scope="scope">
            <div class="btn">
              <span @click="$router.push({ name: 'check', params: { id: scope.row.id } })">查看</span>
              <span>转正</span>
              <span>调岗</span>
              <span>离职</span>
              <span>角色</span>
              <button style="color: gray; border: none; font-size: 14px" disabled>删除</button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="footer" style="text-align: right">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="num"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import { user } from "@/api/staff"
import { read, utils } from "xlsx" // 注意处理方法引入方式

export default {
  data() {
    return {
      params: {
        page: 1,
        size: 10,
        total: 0
      },
      num: 0,
      tableData: []
    }
  },
  methods: {
    ttp() {
      user(this.params).then((res) => {
        this.num = res.data.data.total
        this.tableData = res.data.data.rows
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.params.size = val
      this.ttp()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.params.page = val
      this.ttp()
    },
    /**导出 */
    export2Excel() {
      require.ensure([], () => {
        const { export_json_to_excel } = require("@/excel/Export2Excel")
        const fieldName = ["索引", "用户名", "密码"]
        const filterVal = ["index", "username", "password"]
        const data = this.tableData.map((v) => filterVal.map((j) => v[j]))
        export_json_to_excel(fieldName, data, "用户列表")
      })
    },
    /**导入 */
    onChange(e) {
      const file = e.target.files[0]
      const fileReader = new FileReader()
      fileReader.onload = (ev) => {
        try {
          const data = ev.target.result
          const workbook = read(data, { type: "binary" })
          const params = []
          // 取对应表生成json表格内容
          workbook.SheetNames.forEach((item) => {
            params.push({
              name: item,
              dataList: utils.sheet_to_json(workbook.Sheets[item])
            })
            this.tableData.push(utils.sheet_to_json(workbook.Sheets[item]))
          })
          // 该算法仅针对表头无合并的情况
          if (this.tableData.length > 0) {
            // 获取excel中第一个表格数据tableData[0][0]，并且将表头提取出来
            for (const key in this.tableData[0][0]) {
              this.tableHead.push(key)
            }
          }
          return params
          // 重写数据
        } catch (e) {
          console.log("error:" + e)
          return false
        }
      }
      fileReader.readAsBinaryString(file)
    }
  },
  created() {
    this.ttp()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.staff {
  padding: 20px;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .left {
    border: 1px solid#409eff;
    padding: 10px 20px;
    font-size: 20px;
    background-color: #e6f7ff;
    i {
      background-color: #409eff;
      color: #fff;
      border-radius: 10px;
    }
  }
}
.img {
  width: 100px;
  height: 100px;
  border-radius: 100px;
}
.btn {
  display: flex;
  justify-content: space-between;
  color: #4e7ffc;
}
</style>

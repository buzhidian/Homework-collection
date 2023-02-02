<template>
  <div class="company">
    <el-card class="box-card">
      <el-tabs v-model="activeName">
        <el-tab-pane label="角色管理" name="first">
          <p>
            <el-button type="primary" @click="addOrEdit">新增角色</el-button>
          </p>
          <el-table :data="tableData" style="width: 100%" border>
            <el-table-column type="index" label="序号" width="100px"> </el-table-column>
            <el-table-column prop="name" label="名称"> </el-table-column>
            <el-table-column prop="description" label="描述"> </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="success" @click="assgintree(scope.row)">分配权限</el-button>
                <el-button type="primary" @click="addOrEdit(scope.row)">编辑</el-button>
                <el-button type="danger" @click="Delete(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="page" style="text-align: right">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              layout="prev, pager, next"
              :total="total"
            >
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="公司信息" name="second">
          <p class="p">
            <span>公司名称</span>
            <el-input v-model="infoList.name" placeholder="请输入内容" disabled></el-input>
          </p>
          <p class="p">
            <span>公司地址</span>
            <el-input v-model="infoList.companyAddress" placeholder="请输入内容" disabled></el-input>
          </p>
          <p class="p">
            <span>邮箱</span>
            <el-input v-model="infoList.mailbox" placeholder="请输入内容" disabled></el-input>
          </p>
          <p class="p">
            <span>备注</span>
            <el-input v-model="infoList.remarks" placeholder="请输入内容" disabled></el-input>
          </p>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <addOrEdit v-if="addOrEditStatus" ref="addOrEdit" />
    <tree v-if="treeStatus" ref="assgintree" @of="of" />
  </div>
</template>

<script>
import { role, del, roleInfo } from "@/api/company"
import addOrEdit from "./addOrEdit.vue"
import tree from "./tree.vue"
export default {
  data() {
    return {
      infoList: [],
      activeName: "first",
      tableData: [],
      params: {
        page: 1,
        pagesize: 10,
        total: 0
      },
      total: 0,
      addOrEditStatus: false,
      num: null,
      treeStatus: false
    }
  },
  methods: {
    /**分页 */
    handleSizeChange(val) {
      this.params.pagesize = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.getList()
    },
    /**获取数据 */
    getList() {
      role(this.params).then((res) => {
        console.log(res)
        this.tableData = res.data.data.rows
        this.total = res.data.data.total
      })
    },
    /**删除 */
    Delete(val) {
      console.log(val)
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          del(val).then((res) => {
            this.$message.error(res.data.message)
            this.getList()
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    /** 添加或者编辑*/
    addOrEdit(info) {
      this.addOrEditStatus = true
      if (info.constructor == Object) {
        this.$nextTick(() => {
          this.$refs.addOrEdit.init(info)
        })
      } else {
        this.$nextTick(() => {
          this.$refs.addOrEdit.init()
        })
      }
    },
    assgintree(info) {
      this.treeStatus = true
      this.$nextTick(() => {
        this.$refs.assgintree.init(info)
      })
    },
    of(val) {
      this.treeStatus = false
      this.$message({
        message: val,
        type: "success"
      })
    }
  },
  created() {
    this.getList()
    roleInfo().then((res) => {
      console.log(res)
      this.infoList = res.data.data
    })
  },
  mounted() {},
  components: { addOrEdit, tree },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.company {
  padding: 20px;
}
.p {
  display: flex;
  padding-left: 100px;
  span:nth-child(1) {
    width: 100px;
    font-weight: 900;
  }
  .el-input {
    width: 500px;
  }
}
</style>

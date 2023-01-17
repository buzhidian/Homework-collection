<template>
  <div class="tree">
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <el-tree :data="dataList" :props="props" lazy show-checkbox @check-change="handleCheckChange"> </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { treeList, assignPrem } from "@/api/company"
export default {
  data() {
    return {
      dialogVisible: true,
      dataList: [],
      props: {
        label: "name",
        children: "pid"
      },
      count: 1,
      addRole: [],
      id: ""
    }
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
      if (checked == true) {
        this.addRole.push(data.id)
      }
    },
    handleNodeClick(data) {
      console.log(data)
    },
    init(obj) {
      this.id = obj.id
    },
    add() {
      assignPrem({ id: this.id, permIds: [...this.addRole] }).then((res) => {
        console.log(res)
        this.$emit("of", res.data.message)
      })
    }
  },
  created() {
    treeList(this.addRole).then((res) => {
      this.dataList = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped></style>

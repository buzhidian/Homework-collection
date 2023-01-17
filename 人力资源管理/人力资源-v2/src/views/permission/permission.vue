<template>
  <div class="permission">
    <el-card class="box-card">
      <div style="text-align: right">
        <el-button type="primary">添加权限</el-button>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <el-table
        :data="tableData"
        style="width: 100%"
        row-key="id"
        border
        :props="defaultProps"
        :load="load"
        :tree-props="{ children: 'value', hasChildren: 'hasValue' }"
      >
        <el-table-column prop="name" label="名称"> </el-table-column>
        <el-table-column prop="code" label="标识"> </el-table-column>
        <el-table-column prop="description" label="描述"> </el-table-column>
        <el-table-column prop="address" label="操作">
          <span class="blue">添加</span>
          <span class="blue">编辑</span>
          <span class="blue">删除</span>
        </el-table-column>
      </el-table>
      <!-- 表格 -->
    </el-card>
  </div>
</template>

<script>
import { permission } from "@/api/permission"
export default {
  data() {
    return {
      tableData: [],
      defaultProps: {
        children: "value",
        label: "name"
      },
      columns: [
        {
          label: "名称",
          prop: "name",
          // 将当前列定义为模板列
          type: "template",
          // 表示当前这一列使用模板的名称
          template: "isok"
        },
        {
          label: "标识",
          // 将当前列定义为模板列
          // type: "template",
          // 表示当前这一列使用模板的名称
          template: "isok",
          prop: "code"
        },
        {
          label: "描述",
          // type: "template",
          // 表示当前这一列使用模板的名称
          template: "order",
          prop: "description"
        },
        {
          label: "操作",
          type: "template",
          // 表示当前这一列使用模板的名称
          template: "opt"
        }
      ]
    }
  },
  methods: {
    load(tree, treeNode, resolve) {
      console.log(tree)
      console.log(treeNode)
      console.log(resolve)
    }
  },
  created() {
    permission().then((res) => {
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
.permission {
  padding: 20px;
}
.blue {
  margin-right: 10px;
  color: #71b8fd;
}
</style>

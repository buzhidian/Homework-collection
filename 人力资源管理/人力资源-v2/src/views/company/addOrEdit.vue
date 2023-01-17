<template>
  <div>
    <el-dialog :title="tit ? '编辑角色' : '新增角色'" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules">
        <el-form-item label="角色名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" :label-width="formLabelWidth">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addOrEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addOrEdit } from "@/api/company"
export default {
  data() {
    return {
      dialogFormVisible: false,
      tit: false,
      form: {
        name: "",
        description: ""
      },
      formLabelWidth: "120px",
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }]
      }
    }
  },
  methods: {
    init(info) {
      if (info instanceof Object) {
        this.form = info
        this.dialogFormVisible = true
        this.tit = true
      } else {
        this.dialogFormVisible = true
        this.tit = false
      }
    },
    addOrEdit() {
      addOrEdit(this.form).then((res) => {
        console.log(res)
      })
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>

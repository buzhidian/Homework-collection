<template>
  <div>
    <div class="box">
      <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
        <el-button size="small" type="primary" style="margin-top: 68px">点击上传</el-button>
      </el-upload>
      <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 20px;
  display: flex;
  padding: 100px 0 0 480px;
}
</style>

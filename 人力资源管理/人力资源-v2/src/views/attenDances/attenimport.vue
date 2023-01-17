<template>
  <div class="Attimport">
    <!-- 考勤文件导入 -->
    <div class="box">
      <ul>
        <li>
          <div class="list">
            <el-upload
              :file-list="fileList"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
              :limit="3"
            >
              <el-button type="primary">点击上传</el-button>
            </el-upload>
          </div>
        </li>
        <div class="list">
          <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      imageUrl: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.Attimport {
  margin: 15px;
  background-color: #fff;
  padding: 20px;
}

.el-button {
  width: 100%;
  justify-content: flex-start;

  .el-icon {
    margin-right: 6px;
  }
}

.box {
  margin: 100px auto;
  text-align: center;

  ul {
    display: flex;
    justify-content: center;

    li {
      width: 300px;
      font-size: 13px;
      border: 1px Dashed #ccc;
      padding: 20px;

      .list {
        margin-top: 40px;

        .text {
          color: #f00;
          font-weight: 900;
        }
      }
    }
  }
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  text-align: center;
}

.title {
  margin-top: 10px;
}
</style>

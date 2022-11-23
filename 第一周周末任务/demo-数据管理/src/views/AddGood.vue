<template>
  <div class="addGood">
      <p style="text-align:center">添加食品</p>
      <div class="box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="食品名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="食品活动" prop="activity">
              <el-input v-model="ruleForm.activity"></el-input>
          </el-form-item>
          <el-form-item label="食品详情" prop="description">
              <el-input v-model="ruleForm.description"></el-input>
          </el-form-item>
          <el-form-item label="上传食品图片">
              <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <div v-else class="warp">
                    <i class="el-icon-plus avatar-uploader-icon"></i>
                  </div>
              </el-upload>
          </el-form-item>
          <el-form-item label="食品特点">
              <el-select v-model="ruleForm.region" placeholder="请选择">
                  <el-option label="新品" value="new"></el-option>
                  <el-option label="招牌" value="hot"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="食品规格">
              <el-radio-group v-model="ruleForm.resource">
                  <el-radio label="单规格"></el-radio>
                  <el-radio label="多规格"></el-radio>
              </el-radio-group>
          </el-form-item>
          <el-form-item label="包装费">
              <el-input-number v-model="ruleForm.num" @change="handleChange" :min="0" label="描述文字"></el-input-number>
          </el-form-item>

          <el-form-item label="价格">
              <el-input-number v-model="ruleForm.num1" @change="handleChange" :min="0" label="描述文字"></el-input-number>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">确认添加食品</el-button>
          </el-form-item>
      </el-form>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          ruleForm: {
              name: '',
              activity: '',
              description: '',
              num: 0,
              num1:20,
              region: '',
              resource: '单规格',
          },
          rules: {
              name: [{ required: true, message: "请输入食品名称", trigger: "blur" }],
          },
          options: [],
          imageUrl: '',
          tableData: []
      };
  },
  methods: {
      submitForm() {

      },
      handleChange() {

      },
      handleAvatarSuccess() {

      },
      beforeAvatarUpload() {

      }
  },
  created() {
  }
};
</script>

<style lang="scss" scoped>
.box{
  width: 55%;
  margin: auto;
  border: 1px solid #eaeefb;
  padding: 10px;
}
.warp{
  width: 140px;
  height: 140px;
  border: 1px dashed #d9d9d9;
  text-align: center;
  line-height: 140px;
  font-size: 30px;
  font-weight: bold;
  color: #8c939d;
}
</style>
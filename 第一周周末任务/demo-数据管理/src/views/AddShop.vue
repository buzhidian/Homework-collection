<template>
  <div>
    <div class="box">
      <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="店铺名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="详细地址" prop="address">
        <el-input v-model="ruleForm.address" placeholder="请输入地址"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="店铺简介">
        <el-input v-model="ruleForm.briefIntroduction"></el-input>
      </el-form-item>
      <el-form-item label="店铺标语">
        <el-input v-model="ruleForm.slogan"></el-input>
      </el-form-item>
      <el-form-item label="店铺分类">
        <el-input v-model="ruleForm.classification"></el-input>
      </el-form-item>
      <el-form-item label="店铺特点">
        <div class="characteristic">
          <el-switch v-model="characteristic.value1" inactive-text="品牌保证">
          </el-switch>
          <el-switch v-model="characteristic.value2" inactive-text="蜂鸟专送">
          </el-switch>
          <el-switch v-model="characteristic.value3" inactive-text="新开店铺">
          </el-switch>
          <el-switch v-model="characteristic.value4" inactive-text="外卖保">
          </el-switch>
          <el-switch v-model="characteristic.value5" inactive-text="准时达">
          </el-switch>
          <el-switch v-model="characteristic.value6" inactive-text="开发票">
          </el-switch>
        </div>
      </el-form-item>
      <el-form-item label="配送费">
        <el-input-number v-model="ruleForm.fee"></el-input-number>
      </el-form-item>
      <el-form-item label="起送价">
        <el-input-number v-model="ruleForm.price"></el-input-number>
      </el-form-item>
      <el-form-item label="营业时间">
        <el-time-select
          placeholder="起始时间"
          v-model="ruleForm.startTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
          }"
        >
        </el-time-select>
        <el-time-select
          placeholder="结束时间"
          v-model="ruleForm.endTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: ruleForm.startTime,
          }"
        >
        </el-time-select>
      </el-form-item>
      <el-form-item label="上传店铺头像">
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file1" slot-scope="{ file1 }">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file1.url"
              alt=""
            />
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传营业执照">
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file2" slot-scope="{ file2 }">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file2.url"
              alt=""
            />
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传餐饮服务许可证">
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file3" slot-scope="{ file3 }">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file3.url"
              alt=""
            />
          </div>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
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
        name: "", 
        address: "", 
        phone: "", 
        briefIntroduction: "", 
        slogan: "", 
        classification: "", 
        fee: 5, 
        price: 20, 
        startTime: "",
        endTime: "",
      },
      //店铺特点
      characteristic: {
        value1: true,
        value2: true,
        value3: true,
        value4: true,
        value5: true,
        value6: true,
      },
      rules: {
        name: [
          { required: true, message: "请输入店铺名称", trigger: "blur" },
        ]
      },
    };
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
  },
  created() {
    console.log(this.$route.params.id);
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.characteristic {
  width: 320px;
}
.box{
  width: 56%;
  margin: auto;
  box-sizing: border-box;
  // border: 1px solid #eaeefb;
  padding: 10px 60px 10px 10px;
}
</style>

<template>
  <div class="addGoods">
    <!-- <h2>添加页面</h2> -->
    <el-alert
      title="添加商品信息"
      type="info"
      show-icon
      center
      :closable="false"
      class="msg"
    >
    </el-alert>
    <!-- 步骤条 -->
    <el-steps
      :active="active"
      finish-status="success"
      class="steps"
      align-center
    >
      <el-step title="基本信息"></el-step>
      <el-step title="商品参数"></el-step>
      <el-step title="商品属性"></el-step>
      <el-step title="商品图片"></el-step>
      <el-step title="商品内容"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <!-- 标签页： -->
    <el-tabs
      tab-position="left"
      v-model="tabNum"
      :before-leave="beforeLeave"
      @tab-click="changeTabs"
    >
      <el-tab-pane label="基本信息">
        <!-- 带有正则的表单 -->
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="商品名称" prop="goods_name">
            <el-input v-model="ruleForm.goods_name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格" prop="goods_price">
            <el-input v-model="ruleForm.goods_price" type="number"></el-input>
          </el-form-item>
          <el-form-item label="商品重量" prop="goods_weight">
            <el-input v-model="ruleForm.goods_weight" type="number"></el-input>
          </el-form-item>
          <el-form-item label="商品数量" prop="goods_number">
            <el-input v-model="ruleForm.goods_number" type="number"></el-input>
          </el-form-item>
          <!-- 商品分类： -->
          <el-form-item label="商品分类" prop="goods_cat">
            <div class="block" style="text-align: left">
              <el-cascader
                v-model="value"
                :options="cateList"
                :props="props"
                @change="handleChange"
              ></el-cascader>
            </div>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="商品参数">商品参数</el-tab-pane>
      <el-tab-pane label="商品属性">商品属性</el-tab-pane>
      <el-tab-pane label="商品图片">
        <!-- 上传图片 -->
        <el-upload
          class="upload-demo"
          action="http://175.27.228.178:3434/api/private/v1/upload"
          :on-success="postImg"
          :headers="headers"
          list-type="picture"
        >
          <!-- 
              action 图片上传地址
              list-type="picture" 展示为缩略图
              :headers  请求上传接口的时候配置头信息
              :on-success  上传成功后会执行的函数
             -->
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-tab-pane>
      <el-tab-pane label="商品内容">
        <quill-editor
          v-model="richText"
          ref="myQuillEditor"
          :options="editorOption"
        >
        </quill-editor>
      </el-tab-pane>
      <el-tab-pane label="添加商品">
        <el-button
          type="primary"
          @click="addGoods('ruleForm')"
          style="margin-left: 20px; cursor: pointer; margin-bottom: 20px"
          >添加商品</el-button
        >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      value: [],
      active: 0,
      // 标签页中选中标签的下标
      tabNum: "",
      ruleForm: {
        goods_name: "",
        goods_price: 0,
        goods_number: 0,
        goods_weight: 0,
        goods_cat: "",
        pics: "",
      },
      rules: {
        goods_name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
        ],
        goods_price: [
          { required: true, message: "请输入商品价格", trigger: "blur" },
        ],
        goods_weight: [
          { required: true, message: "请输入商品重量", trigger: "blur" },
        ],
        goods_number: [
          { required: true, message: "请输入商品数量", trigger: "blur" },
        ],
      },
      cateList: [],
      props: {
        children: "children",
        label: "cat_name",
        value: "cat_id",
      },
      // 配置头信息：
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      richText: "",
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
            ['blockquote', 'code-block'], // 引用  代码块
            [{ header: 1 }, { header: 2 }], // 1、2 级标题
            [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
            [{ script: 'sub' }, { script: 'super' }], // 上标/下标
            [{ indent: '-1' }, { indent: '+1' }], // 缩进
            [{ direction: 'rtl' }], // 文本方向
            [{ size: ['12', '14', '16', '18', '20', '22', '24', '28', '32', '36'] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6] }], // 标题
            [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
            // [{ font: ['songti'] }], // 字体种类
            [{ align: [] }], // 对齐方式
            ['clean'], // 清除文本格式
            ['image', 'video'] // 链接、图片、视频
          ]
        },
      },
    };
  },
  methods: {
    // 获取分类列表
    getTypes() {
      this.$http.get("categories").then((res) => {
        console.log(res.data);
        this.cateList = res.data.data;
        // console.log(this.options);
      });
    },
    // 切换标签页
    changeTabs() {
      console.log(this.tabNum);
      // this.active = Number(this.tabNum)
      // 有before-leave属性，可写在其方法下面
    },
    // 若未选择分类，禁止离开当前标签
    // beforeLeave(activeName, oldActiveName) {
    beforeLeave(activeName) {
      /* if (oldActiveName === "0" &&this.ruleForm.goods_cat == "") {
          this.$message.error('请选择商品分类！')
          return false
        }else {
          this.active = Number(this.tabNum)
        } */
      if (activeName != "0" && this.ruleForm.goods_cat == "") {
        this.$message.error("请选择商品分类！");
        return false;
      } else {
        this.active = Number(activeName);
        // this.active = Number(this.tabNum)
      }
    },
    // 商品分类
    handleChange(value) {
      console.log(value);
      this.ruleForm.goods_cat = value.join(",");
      console.log(this.value.join(","));
    },
    // 添加商品
    addGoods(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post("/goods", this.ruleForm).then((res) => {
            console.log(res.data);

            if (res.data.meta.status == 400) {
              this.$message.error(res.data.meta.msg);
              this.tabNum = "0";
            } else {
              this.$router.push("goods");
              this.$message({
                message: res.data.meta.msg,
                type: "success",
              });
            }
          });
        } else {
          console.log("error submit!!");
          this.tabNum = "0";
          return false;
        }
      });
    },
    // 上传成功后的回调函数
    postImg(val) {
      console.log(val);
      this.ruleForm.pics = val.data.tmp_path;
      // eslint-disable-next-line no-constant-condition
      if ((val.meta.status = 200)) {
        this.$message({
          message: val.meta.msg,
          type: "success",
        });
      } else {
        this.$message.error(val.meta.msg);
      }
    },
  },
  created() {
    this.getTypes();
  },
};
</script>
  
  <style lang='scss' scoped>
.addGoods {
  text-align: left;
}
.msg {
  margin: 20px 0;
  background-color: #fff;
}
.steps {
  margin: 0 4% 30px;
}
.upload-demo {
  width: 30%;
}
</style>
  
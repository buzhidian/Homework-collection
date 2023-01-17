<template>
  <div class="login">
    <div class="box">
      <p>iHRM后台登录系统</p>
      <el-form class="form" ref="ruleForm" :model="form" :rules="rules">
        <el-form-item prop="mobile">
          <el-input v-model="form.mobile" placeholder="username" prefix-icon="el-icon-user"> </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="form.password" type="password" placeholder="password"
            show-password></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
      <h3 style="text-align: left">账号：13800000002 密码：123456</h3>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login"
import { setToken } from "@/untils/auth"
export default { 
  data() {
    return {
      form: {
        mobile: "13800000002",
        password: "123456"
      },
      rules: {
        mobile: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    }
  },
  methods: {
    submitForm() {
      if (this.form.mobile == "" || this.form.password == "") {
        this.$message.error("账号或密码为空")
      } else {
        console.log(1112);
        
        login(this.form).then((res) => {
          console.log(res)
          if (res.data.code == 10000) {
            // setToken(res.data.data)
            // this.$router.push("/userIndex")
            // this.$message({
            //   message: "登陆成功",
            //   type: "success"
            // })
          } else {
            // this.$message({
            //   message: res.data.message,
            //   type: "success"
            // })
          }
        })
      }
    }
  },
  created() { },
  mounted() { },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.login {
  background-image: url(../assets/back.jpg);
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100% 100%;
}

.box {
  color: #fff;
  width: 630px;
  height: 440px;
  padding: 35px 35px 15px;

  p {
    text-align: center;
    letter-spacing: 2px;
    font-size: 63px;
    margin: 0;
  }
}

.el-form-item__content {
  margin-left: 20px;
}

.form {
  width: 560px;
  background-color: transparent;
  margin-top: 20px;

  .el-form-item {
    width: 100%;
    margin-top: 24px;
  }
}

.btn {
  margin-top: 30px !important;
  margin-left: 33px;

  .el-button {
    width: 100%;
    height: 60px;
    font-size: 30px;
    background-color: #407ffe;
    border: 0;
  }
}

.el-input,
.el-input__inner {
  margin-left: 33px;
  background-color: #cee1fe;
}

.yellow {
  padding: 10px 20px;
  background-color: #e6a23c;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  text-decoration: none;
}
</style>

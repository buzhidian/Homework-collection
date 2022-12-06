<template>
  <div class="login">
    <h2>Login</h2>
    <div class="box">
      <img src="IMG_20220526_104153.png" alt="" class="img">

      <el-input
        placeholder="请输入用户名"
        prefix-icon="el-icon-user"
        v-model="username"
      >
      </el-input>
      <el-input
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
        v-model="password"
        show-password
      >
      </el-input>

      <p>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="info" @click="reset">重置</el-button>
        <!-- <el-button type="info" @click="handler1">请求菜单</el-button>
        <el-button type="info" @click="handler2">请求用户</el-button> -->
      </p>
    </div>
  </div>
</template>

<script>
import { toLogin,getMenus,getUsers } from '../untils/Api.js'
import axios from "axios"
import { setToken } from '@/untils/auth';
export default {
  data() {
    return {
      username: "admin",
      password: "123456",
      params:{
        query:"",
        pagenum:1,
        pagesize:10,
      }
    };
  },
  methods: {
    login(){
        toLogin({username:this.username,password:this.password}).then(res=>{
            console.log(res);
            setToken(res.data.token)
            this.$router.push("/index")
        })
        /* axios.post("http://heima.9yuecloud.com:9988/api/private/v1/login",{username:this.username,password:this.password}).then(res=>{
            console.log(res.data.data);
            setToken(res.data.data.token)
            this.$router.push("/index")
        }) */

    },
    reset(){
      this.username = ""
      this.password = ""
    },
    handler1(){
      getMenus().then(res=>{
        console.log(res);
      })
    },
    handler2(){
      getUsers(this.params).then(res=>{
        console.log(res);
      })
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('../../public/xiao.gif');
  background-size: 100%;
  .box {
    width: 400px;
    height: 200px;
    background: white;
    padding: 20px;
    padding-top: 100px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
      box-shadow: 0 0 5px 2px #ccc;
    
    .img{
      width: 100px;
      // height: ;
      border-radius: 50px;
      position: absolute;
      left: 50%;
      margin-left: -50px;
      top: -50px;
      border: 2px double #fff;
      box-shadow: 0 0 5px 1px #ccc;
    }
    .el-input{
        margin-top: 20px;
    }
    p{
        text-align: right;
        margin-top: 20px;
        .el-button {
            margin-left: 10px;
    }
    }
  }
}
</style>

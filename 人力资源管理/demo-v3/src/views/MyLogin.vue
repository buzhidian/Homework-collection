<template>
  <div class="app">
    <div class="box">
      <h1 style="color: rgba(255, 255, 255, 0.837); font-weight: 300">iHRM后台管理系统</h1>
      <br />
      <el-input v-model="form.mobile" placeholder="请输入账号" style="width: 300px" :prefix-icon="Avatar"></el-input
      ><br /><br />
      <el-input
        v-model="form.password"
        placeholder="请输入密码"
        :type="flag == true ? 'password' : 'text'"
        style="width: 300px"
        :prefix-icon="Unlock"
        show-password
      /><br /><br />
      <el-button type="primary" style="width: 300px; height: 40px; background: #407ffe" @click="gotologin"
        >登录</el-button
      ><br /><br />
      <a href="###" class="zc" @click="flag = false" v-if="flag == true">还没有账号？ 立即注册</a>
      <a href="###" class="zc" @click="flag = true" v-else>使用已有账户登录</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { Avatar, Unlock } from '@element-plus/icons-vue' // 引入 Edit 这个 svg组件
import { LoginForm, CODE } from '@/api/check.js'
import { login } from '@/api/api'
import { ElNotification, ElMessage } from 'element-plus'
import {setToken} from '@/utils/auth'
const store = useStore()
const router = useRouter()
const route = useRoute()
const form = reactive<LoginForm>({
  mobile: '13800000002',
  password: '123456'
})
const flag = ref<boolean>(true)
const gotologin = () => {
  login(form).then((res) => {
    console.log(res)
    if (res.data.success == true) {
     setToken(res.data.data)
      router.push('/home')
    } else {
      ElMessage.error(res.data.message)
    }
  })
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.app {
  width: 100vw;
  height: 100vh;
  background: url('../assets/login.jpg');
}
.box {
  width: 400px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.zc {
  color: rgba(255, 255, 255, 0.837);
  text-decoration: none;
}
.passicon2 {
  position: absolute;
  top: 125px;
  left: 328px;
  width: 1em;
  height: 1em;
  color: #889aa4;
}
.passicon3 {
  position: absolute;
  top: 125px;
  left: 328px;
  width: 1em;
  height: 1em;
  color: #889aa4;
}
</style>

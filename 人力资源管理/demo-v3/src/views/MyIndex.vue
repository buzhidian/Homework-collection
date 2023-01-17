<template>
  <div class="box">
    <el-container class="nev">
      <el-aside width="200px" class="left">
        <el-menu
          active-text-color="#58b1fe"
          background-color="#4e7ffc"
          class="el-menu-vertical-demo"
          default-active="/home"
          text-color="#fff"
          router
        >
          <img class="ig1" src="../assets/2.png" alt="" />
          <el-menu-item index="/home">
            <el-icon><Aim /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/permissionsettings">
            <el-icon><Setting /></el-icon>
            <span>权限设置</span>
          </el-menu-item>
          <el-menu-item index="/socialsecurity">
            <el-icon><Switch /></el-icon>
            <span>社保</span>
          </el-menu-item>
          <el-menu-item index="/examination">
            <el-icon><Setting /></el-icon>
            <span>考勤</span>
          </el-menu-item>
          <el-menu-item index="/wages">
            <el-icon><PieChart /></el-icon>
            <span>工资</span>
          </el-menu-item>
          <el-menu-item index="/approval">
            <el-icon><PictureRounded /></el-icon>
            <span>审批</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="right">
        <header>
          <el-icon><Fold /></el-icon> 江苏传智播客教育科技股份有限公司 <button>体验版</button>
        </header>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import {
  Aim,
  Star,
  Avatar,
  Switch,
  PieChart,
  EditPen,
  Setting,
  PictureRounded,
  Operation
} from '@element-plus/icons-vue'
const list = reactive({})
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.box {
  width: 100vw;
  height: 100vh;
}

.nev {
  width: 100%;
  height: 100%;

  .el-menu-vertical-demo {
    width: 100%;
    height: 100%;
    .ig1 {
      margin: 0 20px;
      width: 80%;
      height: 60px;
    }
    .el-menu-item.is-active {
      background-color: #ffff !important;
    }
    .el-menu-item:hover {
      background: #fff;
      color: #4475f9;
    }
  }

  .right {
    header {
      padding: 2px;
      width: 100%;
      height: 50px;
      background: #4475f9;
      line-height: 50px;
      color: #fff;
      button {
        width: 60px;
        height: 30px;
        border-radius: 10px;
        border: 0;
        background: #84a9fe;
        color: #fff;
      }
    }
  }
}
</style>

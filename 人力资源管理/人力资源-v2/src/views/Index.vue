/**首页 */
<template>
  <div class="about">
    <el-container>
      <el-aside :width="widthStatus ? '80px' : '270px'">
        <el-menu
          active-text-color="#43a7fe"
          background-color="#4474fa"
          class="el-menu-vertical-demo"
          default-active="1"
          text-color="#fff"
          router
        >
          <div class="img">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA3CAYAAADezaKIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDMkFGRDdBQkYwNTdFODExODMxQ0RDRjMxQThGRUQ3NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNjNBNzBFOEJDQjkxMUU4OEQ0OERFQjFFQTNERTZCMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNjNBNzBFN0JDQjkxMUU4OEQ0OERFQjFFQTNERTZCMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjgyNDhlMWQtY2IzNC04ODQxLTliNjQtYjBlOTUzZWNhYTE2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMyQUZEN0FCRjA1N0U4MTE4MzFDRENGMzFBOEZFRDc3Ii8+IDwvcmRmOkRlc2Ny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"
              alt=""
              :width="widthStatus ? '80px' : '180px'"
            />
          </div>
          <el-menu-item index="userIndex" @click="add('userIndex', '首页')">
            <i class="el-icon-tickets"></i>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="organizational" @click="add('organizational', '组织架构')">
            <i class="el-icon-grape"></i>
            <span>组织架构</span>
          </el-menu-item>
          <el-menu-item index="StaffIn" @click="add('StaffIn', '员工')">
            <i class="el-icon-user"></i>
            <span>员工</span>
          </el-menu-item>
          <el-menu-item index="companyIn" @click="add('companyIn', '公司设置')">
            <i class="el-icon-setting"></i>
            <span>公司设置</span>
          </el-menu-item>
          <el-menu-item index="permission" @click="add('permission', '权限管理')">
            <i class="el-icon-lock"></i>
            <span>权限管理</span>
          </el-menu-item>
          <el-menu-item index="departMent" @click="add('departMent', '社保')">
            <i class="el-icon-present"></i>
            <span>社保</span>
          </el-menu-item>
          <el-menu-item index="attendances" @click="add('attendances', '考勤')">
            <i class="el-icon-money"></i>
            <span>考勤</span>
          </el-menu-item>
          <el-menu-item index="salarys" @click="add('salarys', '工资')">
            <i class="el-icon-lollipop"></i>
            <span>工资</span>
          </el-menu-item>
          <el-menu-item index="instance" @click="add('instance', '审批')">
            <i class="el-icon-files"></i>
            <span>审批</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="title">
            <div class="left" style="display: flex">
              <i class="el-icon-s-fold" @click="widthStatus = !widthStatus"></i>
              <div class="tit">江苏传智博客教育科技股份有限公司 <span>体验版</span></div>
            </div>
            <div class="right">
              <div class="admin">
                <img src="../assets/IMG_20220526_104153.png" alt="" /> 
                <span>小宇</span>
                <i class="el-icon-caret-bottom" @click="i = !i">
                  <div class="i-box" v-if="i">
                    <button>首页</button>
                    <button>项目地址</button>
                    <button @click="loginOut">退出登陆</button>
                  </div>
                </i>
              </div>
            </div>
          </div>
        </el-header>
        <el-main>
          <ul class="list">
            <li v-for="(item, index) in list" :key="index" @click="$router.push(item.val)">
              <span></span>
              <span>{{ item.title }}</span>
              <span @click="del(index)">x</span>
            </li>
          </ul>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { removeToken } from "@/untils/auth"
export default {
  data() {
    return {
      i: false,
      widthStatus: false,
      list: []
    }
  },
  methods: {
    loginOut() {
      removeToken()
      this.$router.replace("/") // 跳转页面
    },
    add(val, title) {
      console.log(val)
      console.log(title)
      let obj = {
        val,
        title
      }
      let status = false
      this.list.forEach((ele) => {
        if (ele.title == obj.title) {
          status = true
        }
      })
      if (status == false) {
        this.list.push(obj)
      }
    },
    del(i) {
      this.list.splice(i, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin: 0;
  background-color: #ffffff;
  height: 40px;
  display: flex;
  padding: 10px;
  li {
    list-style: none;
    background-color: #409eff;
    width: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    color: #fff;
    margin-right: 10px;
    span:nth-child(1) {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 10px;
    }
  }
}
.about,
.el-container {
  height: 100%;
}
.el-header {
  padding: 0;
}
.el-menu {
  height: 100%;
}
.el-menu-item {
  height: 70px;
  font-size: 20px;
  padding: 0 30px !important;
  .el-icon {
    height: 46em;
    width: 55em;
  }
  span {
    margin-left: 20px;
  }
}

.el-menu-item .is-active {
  background-color: #fff !important;
}

.img {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  img {
    padding: 10px 0;
  }
}
.el-aside {
  overflow: hidden;
}
.el-main {
  padding: 0;
  margin-top: 10px;
  background-color: #eceef1;
}
.el-menu-item.is-active {
  background-color: #fff;
}
.el-menu-item:hover {
  background-color: #fff !important;
  color: #4474fa !important;
  .el-icon-tickets,
  .el-icon-grape,
  .el-icon-user,
  .el-icon-setting,
  .el-icon-lock,
  .el-icon-present,
  .el-icon-money,
  .el-icon-lollipop,
  .el-icon-files {
    color: #4474fa !important;
  }
}
.el-icon-tickets,
.el-icon-grape,
.el-icon-user,
.el-icon-setting,
.el-icon-lock,
.el-icon-present,
.el-icon-money,
.el-icon-lollipop,
.el-icon-files {
  color: #fff !important;
}
.title {
  height: 70px;
  background-color: #4373fa;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}
.el-icon-s-fold {
  color: #fff;
  font-size: 30px;
  margin-top: 26px;
}
.tit {
  margin-left: 20px;
  font-size: 24px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin-left: 20px;
    width: 100px;
    height: 40px;
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    border-radius: 10px;
    background-color: #84a9fe;
  }
}
.left {
  width: 50%;
}
.right {
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  svg {
    margin: 0;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: 000;
    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      border-radius: 30px;
    }
  }
}
.admin {
  background-color: transparent;
  span {
    margin-right: 10px;
  }
}
.el-icon-caret-bottom {
  position: relative;
}
.i-box {
  width: 100px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: rgb(246, 246, 246);
  color: #000;
  margin: 0;
  padding: 0;
  right: 10px;
  top: 20px;
  button {
    border: none;
    margin: 10px 0;
    padding: 10px 20px;
  }
}
</style>

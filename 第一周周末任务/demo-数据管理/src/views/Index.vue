<template>
  <div class="index">
    <el-row>
      <el-col :span="4" class="el-left">

        <!-- 左侧导航栏 -->
        <el-menu
          :default-active="selectIndex"
          class="el-menu-vertical-demo"
          background-color="#324157"
          text-color="#fff"
          active-text-color="#20a0ff"
          router
          @select="selectHandler"
        >
          <el-menu-item index="/manage" @click="handleBread('', '')">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item
              index="/userList"
              @click="handleBread('数据管理', '用户列表')"
            >
              <span slot="title">用户列表</span>
            </el-menu-item>
            <el-menu-item
              index="/shopList"
              @click="handleBread('数据管理', '商家列表')"
            >
              <span slot="title">商家列表</span>
            </el-menu-item>
            <el-menu-item
              index="/foodList"
              @click="handleBread('数据管理', '食品管理')"
            >
              <span slot="title">食品列表</span>
            </el-menu-item>
            <el-menu-item
              index="/orderList"
              @click="handleBread('数据管理', '订单管理')"
            >
              <span slot="title">订单管理</span>
            </el-menu-item>
            <el-menu-item
              index="/adminList"
              @click="handleBread('数据管理', '管理员管理')"
            >
              <span slot="title">管理员列表</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-circle-plus"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item
              index="/addShop"
              @click="handleBread('添加数据', '添加商铺')"
            >
              <span slot="title">添加商铺</span>
            </el-menu-item>
            <el-menu-item
              index="/addGood"
              @click="handleBread('添加数据', '添加商品')"
            >
              <span slot="title">添加商品</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>图表</span>
            </template>
            <el-menu-item
              index="/visitor"
              @click="handleBread('图表', '用户分布')"
            >
              <span slot="title">用户分布</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑</span>
            </template>
            <el-menu-item
              index="/vueEdit"
              @click="handleBread('编辑', '文本编辑')"
            >
              <span slot="title">文本编辑</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item
              index="/adminSet"
              @click="handleBread('设置', '管理员设置')"
            >
              <span slot="title">管理员设置</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span>说明</span>
            </template>
            <el-menu-item
              index="/explain"
              @click="handleBread('说明 ', '说明')"
            >
              <span slot="title">说明</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" class="el-right">

        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/manage' }">
            <span @click="toIndex">首页</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item v-for="item in breadList" :key="item">{{
            item
          }}</el-breadcrumb-item>

          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <img src="https://elm.cangdu.org/img/default.jpg" alt="" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="toIndex">首页</el-dropdown-item>
              <el-dropdown-item command="back">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-breadcrumb>

        <div class="box">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectIndex: JSON.parse(localStorage.getItem("selectIndex")) || "/manage",
      breadList: JSON.parse(localStorage.getItem("bread")) || [],
      value: "",
    };
  },
  methods: {
    // 储存默认
    selectHandler(val) {
      this.selectIndex = val;
      localStorage.setItem("selectIndex", JSON.stringify(val));
    },
    // 面包屑
    handleBread(val1, val2) {
      if (val1 == "" || val2 == "") {
        this.breadList = [];
        localStorage.setItem("bread", JSON.stringify(this.breadList));
      } else {
        this.breadList = [val1, val2];
        localStorage.setItem("bread", JSON.stringify(this.breadList));
      }
    },
    // 返回首页
    toIndex() {
      // console.log(111);
      this.breadList = [];
      localStorage.setItem("bread", JSON.stringify(this.breadList));
      this.selectIndex = "/manage";
      localStorage.setItem("selectIndex", JSON.stringify(this.selectIndex));
    },
    // 点击下拉列表选项
    handleCommand(command) {
      if (command == 'toIndex') {
        this.$router.push("/manage");
        this.breadList = [];
        localStorage.setItem("bread", JSON.stringify(this.breadList));
        this.selectIndex = "/manage";
        localStorage.setItem("selectIndex", JSON.stringify(this.selectIndex));
      }
      if (command == 'back') {
        this.$message("click on item " + command);
      }
      
    },
  },
  created() {},
};
</script>

<style lang='scss' scoped>
.el-menu {
  border: 0;

  // .el-submenu {
  //   background: #1f2d3d !important;
  // }
  .el-menu-item {
    min-width: 0 !important;
  }
}
// .el-submenu .el-menu-item{
//   min-width: 0 !important;
// }
// .el-menu--collapse .el-menu .el-submenu, .el-menu--popup, .el-menu-item{
//   min-width: 0px !important;
// }

.el-left {
  background: #324057;
  height: 100vh;
}
.el-right{
  height: 100vh;
  overflow: auto;
}

.el-breadcrumb {
  height: 60px;
  line-height: 60px;
  background: #eff2f7;
  padding-left: 30px;
}
.box {
  margin-left: 20px;
  margin-top: 20px;
}
.el-dropdown {
  float: right;
  margin-right: 40px;
  .el-dropdown-link {
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
}
</style>

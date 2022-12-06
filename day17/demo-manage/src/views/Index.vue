<template>
  <div class="index">
    <h2>
      <img src="111.jpg" alt="111" /> 电商后台管理系统
      <button class="back" @click="back">退出</button>
    </h2>

    <el-row>
      <el-col :span="isCollapse == false ? 5 : 1.5" style="background: #364b66">
        <p class="top" @click="isCollapse = !isCollapse">|||</p>
        <!-- $route.path 是当前的路由的路径  -->
        <!-- :default-active="$route.path"   默认当前页面导航是激活的  -->
        <el-menu
          
          :collapse="isCollapse"
          class="el-menu-vertical-demo"
          background-color="#364b66"
          text-color="#fff"
          active-text-color="#409eff"
          style="border-right: 0"
          router
          unique-opened
        >
          <el-submenu
            :index="index + ''"
            v-for="(item, index) in menuList"
            :key="item.id"
            style="text-align: left"
          >
            <template slot="title">
              <i :class="icons[index]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item-group>
              <!-- el-icon-menu -->
              <el-menu-item
                :index="subItem.path"
                v-for="subItem in item.children"
                :key="subItem.id"
                @click="handleBread(item.authName, subItem.authName)"
              >
                <i class="el-icon-menu"></i>
                <span>{{ subItem.authName }}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="isCollapse == false ? 19 : 22.5">
        <div class="grid-content bg-purple-light right">
          <!-- 面包屑 -->
          <el-breadcrumb
            separator-class="el-icon-arrow-right"
            v-show="$route.path != '/welcome'"
          >
            <el-breadcrumb-item :to="{ path: '/welcome' }">
              首页
            </el-breadcrumb-item>
            <el-breadcrumb-item v-for="item in breadList" :key="item">{{
              item
            }}</el-breadcrumb-item>
          </el-breadcrumb>

          <!-- 二级页面的坑 -->
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getMenus } from "../untils/Api.js";
import { getToken, removeToken } from "@/untils/auth";
export default {
  data() {
    return {
      // 菜单列表
      menuList: [],
      // 是否折叠
      isCollapse: false,
      icons: [
        "el-icon-s-custom",
        "el-icon-s-help",
        "el-icon-s-goods",
        "el-icon-s-order",
        "el-icon-s-marketing",
      ],
      // 面包屑
      breadList: JSON.parse(localStorage.getItem("bread")) || [],
    };
  },
  methods: {
    // 退出登录
    back() {
      removeToken();
      localStorage.removeItem("bread");
      this.$router.push("/login");
    },

    // 面包屑
    handleBread(val1, val2) {
      // console.log(val1,val2);
      this.breadList = [val1, val2];
      localStorage.setItem("bread", JSON.stringify(this.breadList));
      // console.log(this.breadList);
    },
  },
  created() {
    // 获取菜单列表
    getMenus().then((res) => {
      console.log(res);
      if (res.meta.status == 200) {
        this.menuList = res.data;
        // console.log(this.breadList);
      }
    });
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.el-submenu .el-menu-item {
  min-width: 0;
}
.right {
  padding: 20px 20px;
}
.el-col {
  height: 90vh;
  overflow: auto;
}
h2 {
  background: #364b66;
  height: 60px;
  color: #fff;
  font-weight: 500;
  text-align: left;
  img {
    height: 80%;
    border-radius: 50%;
    margin: 0 20px;
    vertical-align: middle;
    margin-top: 6px;
  }
  .back {
    float: right;
    margin: 15px;
    width: 60px;
    height: 30px;
    background-color: #909398;
    border: 0;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
}
.top {
  background-color: #253d5e;
  color: #fff;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  text-align: center;
}
</style>

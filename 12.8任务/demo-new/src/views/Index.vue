<template>
  <div class="index">
    <el-row>
      <el-col :span="isCollapse == false ? 3 : 2" style="background: #364b66">
        <h2 class="img">
          <img src="111.jpg" alt="111" />
        </h2>

        <el-menu
          :collapse="isCollapse"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#364b66"
          text-color="#fff"
          active-text-color="#409eff"
          style="border-right: 0"
          router
          unique-opened
          
        >
        <!-- @select="selectHandler" -->
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
            <el-menu-item
              :index="'/'+subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="handleBread(item.authName, subItem.authName)"
            >
              <i class="el-icon-menu"></i>
              <span>{{ subItem.authName }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="isCollapse == false ? 21 : 22">
        <h2 class="h2">
          <p>
            <span class="top">
              <i
                class="el-icon-s-fold"
                @click="isCollapse = !isCollapse"
                v-if="!isCollapse"
              ></i>
              <i
                class="el-icon-s-unfold"
                @click="isCollapse = !isCollapse"
                v-else
              ></i>
            </span>
            <span>电商后台管理系统</span>
          </p>
          <button class="back" @click="back">退出</button>
        </h2>
        <div class="grid-content bg-purple-light right">
          <!-- 面包屑 -->
          <el-breadcrumb
            separator-class="el-icon-arrow-right"
            v-show="$route.path != '/welcome'"
          >
            <el-breadcrumb-item :to="{ path: '/welcome' }">
              <span @click="toWelcome">首页</span>
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
      selectIndex:
        JSON.parse(localStorage.getItem("selectIndex")) || "/welcome",
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
    // 默认激活
    selectHandler(val) {
      this.selectIndex = val;
      localStorage.setItem("selectIndex", JSON.stringify(val));
    },
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
    // 返回首页
    toWelcome() {
      this.selectIndex = "/welcome";
      localStorage.setItem("selectIndex", JSON.stringify("/welcome"));
    },
  },
  created() {
    // 获取菜单列表
    /* getMenus().then((res) => {
      console.log(res);
      if (res.meta.status == 200) {
        this.menuList = res.data;
        // console.log(this.breadList);
      }
    }); */
    this.$http.send("/menus").then((res) => {
      this.menuList = res.data.data;
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
  height : calc( 100vh - 100px );
  overflow: auto;
}
.el-col {
  height: 100vh;
  // min-width: 64px;
  // overflow: auto;
}
.img {
  text-align: center;
  
}
.h2 {
  background: #364b66;
  height: 60px;
  color: #fff;
  font-weight: 500;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    span {
      margin-left: 20px;
    }
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
h2 {
  background: #364b66;
  height: 60px;
  color: #fff;
  font-weight: 500;
  text-align: left;
  img {
    height: 80%;
    border-radius: 50%;
    vertical-align: middle;
    margin-top: 6px;
  }
}
.top {
  // background-color: #253d5e;
  color: #fff;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  text-align: center;
}
</style>

<template>
  <div class="user">
    <div class="content">
      <el-card class="box-card">
        <div class="card-top">
          <div class="img">
            <img src="http://ihrm-java.itheima.net/static/img/head.b6c3427.jpg" alt="" />
          </div>
          <div>
            <div style="font-size: 32px">早安,星爷,祝你开心每一天!</div>
            <div style="font-size: 26px; color: #ccc">星爷 | 传智博客-总裁办啊啊</div>
          </div>
        </div>
      </el-card>
      <div class="type" style="display: flex">
        <div class="type-left">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>工作日历</span>
              </div>
            </template>
            <div>
              <el-calendar ref="calendar"> </el-calendar>
            </div>
          </el-card>
          <el-card class="box-card" style="margin-top: 20px">
            <template #header>
              <div class="card-header">
                <span>公告</span>
              </div>
            </template>
            <div style="display: flex; align-items: center">
              <img src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg" alt="" style="width: 100px" />
              <div>
                <span>朱继柳</span> 发布了 第1期"传智大讲堂"互动讨论获奖名单公布
                <div style="margin-top: 10px">2018-07-21 15：21：38</div>
              </div>
            </div>
            <div style="padding: 0 60px 0 20px">
              <hr />
            </div>
            <div style="display: flex; align-items: center">
              <img src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg" alt="" style="width: 100px" />
              <div>
                <span>朱继柳</span> 发布了 第1期"传智大讲堂"互动讨论获奖名单公布
                <div style="margin-top: 10px">2018-07-21 15：21：38</div>
              </div>
            </div>
            <div style="padding: 0 60px 0 20px">
              <hr />
            </div>
            <div style="display: flex; align-items: center">
              <img src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg" alt="" style="width: 100px" />
              <div>
                <span>朱继柳</span> 发布了 第1期"传智大讲堂"互动讨论获奖名单公布
                <div style="margin-top: 10px">2018-07-21 15：21：38</div>
              </div>
            </div>
            <div style="padding: 0 60px 0 20px">
              <hr />
            </div>
          </el-card>
        </div>
        <div class="type-right" style="width: 45%; margin-left: 10px">
          <el-card class="box-card">
            <div class="card-header">
              <span class="right-top">流程申请</span>
            </div>
            <div class="top-btn">
              <button @click="applyStatus = !applyStatus">加班离职</button>
              <button @click="leaveStatus = !leaveStatus">请假调休</button>
              <button>审批列表</button>
              <button @click="$router.push('/my')">我的信息</button>
            </div>
          </el-card>
          <el-card class="box-card" style="margin-top: 20px">
            <div class="card-header">
              <span class="right-top">快速开始/便捷导航</span>
            </div>
            <div class="top-btn">
              <button>人事月报</button>
              <button>考勤查询</button>
              <button>考勤统计</button>
              <button>员工审核</button>
              <button>组织架构</button>
            </div>
          </el-card>
          <el-card class="box-card" style="margin-top: 20px">
            <div class="card-header">
              <span class="right-top">帮助链接</span>
            </div>
            <div class="right-img">
              <img src="" alt="">
              <div>
                <span>入门指南</span>
                <span>在线帮助手册</span>
                <span>联系技术支持</span>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <p>copyright@ 2018 iHRM 系统 版权所有</p>
    <apply v-if="applyStatus" />
    <leave v-if="leaveStatus" />
  </div>
</template>

<script>
import apply from "./apply.vue"
import leave from "./leave.vue"

export default {
  data() {
    return {
      applyStatus: false,
      leaveStatus: false
    }
  },
  methods: {},
  created() {},
  mounted() {},
  components: { apply, leave },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.user {
  height: 100%;
}
p {
  background-color: #eaecef;
  width: 100%;
  margin: 0;
  text-align: center;
  padding-bottom: 10px;
}
.content {
  padding: 10px;
  background-color: #eaecef;
}
.img {
  width: 140px;
  height: 140px;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
  }
}
.card-top {
  display: flex;
  div:nth-child(2) {
    padding-top: 20px;
  }
}
.type {
  margin-top: 26px;
}
.type-left {
  width: 55%;
}
.right-top {
  font-size: 30px;
  padding-bottom: 10px;
  border-bottom: 6px solid #8a97f8;
}
.top-btn {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  button {
    padding: 20px 60px;
    margin-top: 10px;
    margin-right: 20px;
    border: 1px solid #ccc;
    font-size: 22px;
    color: rgba(67, 66, 66, 0.802);
    background-color: #ffffff;
    border-radius: 10px;
  }
}
.top-btn button:hover {
  cursor: pointer;
}
.right-img {
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
  }
  div {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
  }
}
</style>

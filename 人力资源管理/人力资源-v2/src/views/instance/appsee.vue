<template>
  <div class="Appsee">
    <div class="left">
      <h3>申请{{ info.processName }}</h3>
      <div class="top">
        <div class="top-left">
          <img src="http://ihrm.itheima.net/static/img/img.0615818f.jpeg" alt="" />
        </div>
        <div class="top-right">
          <h5>{{ info.username }}</h5>
          <div class="text">部门：{{ info.departmentName }}</div>
          <span>入职时间：{{ new Date(info.timeOfEntry).toLocaleString() }}</span>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li>
            <span>申请类型：</span>|
            <span class="span">{{ info.processName }}</span>
          </li>
          <li>
            <span>请假类型：</span>|
            <span class="span">事假</span>
          </li>
          <li>
            <span>申请单位：</span>|
            <span class="span">天</span>
          </li>
          <li>
            <span>开始时间：</span>|
            <span class="span">{{ new Date(info.procApplyTime).toLocaleString() }}</span>
          </li>
          <li>
            <span>结束时间：</span>|
            <span class="span">{{ new Date(info.procApplyTime).toLocaleString() }}</span>
          </li>
          <li>
            <span>请假时长：</span>|
            <span class="span">{{ info.processState }}</span>
          </li>
          <li>
            <span>申请事由：</span>|
            <span class="span">个人原因</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <h3>审批记录</h3>
      <div class="box">
        <div class="box-left">
          <div class="span" v-for="(item, index) in task" :key="index">
            {{ new Date(item.handleTime).toLocaleString() }}
          </div>
        </div>
        <div>
          <el-timeline>
            <el-timeline-item v-for="(task, index) in task" :key="index" :timestamp="task.timestamp">
              {{ task.handleUserName }}{{ task.handleOpinion }}
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAppinfo, getApptask } from "@/api/instance"
export default {
  data() {
    return {
      info: [],
      task: []
    }
  },
  created() {
    // 获取请假信息
    getAppinfo(this.$route.params.id).then((res) => {
      console.log(res)
      this.info = res.data.data
      console.log(this.info)
    }),
      // 获取审批流程
      getApptask(this.$route.params.id).then((res) => {
        console.log(res)
        this.task = res.data.data
      })
  }
}
</script>

<style lang="scss" scoped>
.Appsee {
  margin: 15px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    width: 72%;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    h3 {
      margin: 10px 0;
    }
    .top {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      .top-left {
        img {
          width: 80px;
          height: 80px;
          margin-top: 20px;
        }
      }
      .top-right {
        font-size: 14px;
        h5 {
          margin: 0;
          font-size: 14px;
        }
        .text {
          margin: 4px 0;
        }
      }
    }
    .bottom {
      margin-top: 30px;
      margin-left: 120px;
      font-size: 14px;
      color: rgb(109, 109, 109);
      ul {
        li {
          margin-bottom: 20px;
          .span {
            margin-left: 10px;
            color: #000;
          }
        }
      }
    }
  }
  .right {
    width: 27%;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    h3 {
      margin: 10px 0;
      padding-bottom: 15px;
      border-bottom: 1px solid #ccc;
    }
    .box {
      display: flex;
      .box-left {
        .span {
          margin-bottom: 30px;
        }
      }
      .el-timeline {
        margin-left: 15px;
        font-weight: 700;
      }
    }
  }
}
</style>

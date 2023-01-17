<!-- 工资详情模块 -->
<template>
  <div class="Seesalary">
    <div class="box">
      <!-- 左侧部分 -->
      <div class="salary-left">
        <el-card class="card">
          <!-- 头部 -->
          <div class="top">
            <div class="left">
              <div class="img">
                <img src="http://ihrm.itheima.net/static/img/img.0615818f.jpeg" alt="" />
              </div>
            </div>
            <div class="right">
              <div class="top">
                <span class="span1"></span>
                <!-- <span class="span2">在职</span> -->
                <span class="span3">离职</span>
              </div>
              <div class="con">
                <span class="span">入职时间：<span>1993-08-04</span></span>
                <span class="span">最新工资：<span>0</span></span>
              </div>
              <div class="foot">
                <span>当月基本工资/</span>
                <span>当月岗位工资：</span>
                <span>{{ Seesalary.currentBasicSalary }} / {{ Seesalary.currentPostWage }}</span>
              </div>
            </div>
          </div>
          <!-- 中间部分 -->
          <div class="con">
            <div class="con-allowance">
              <h4>津贴</h4>
              <ul>
                <li style="font-size: 16px; font-weight: 900">
                  <span>津贴类型</span>
                  <span>补贴金额</span>
                  <span>津贴类型</span>
                  <span>补贴金额</span>
                </li>
                <li>
                  <span>交通补助</span>
                  <span>100</span>
                  <span>通讯补助</span>
                  <span>100</span>
                </li>
                <li>
                  <span>午餐补助</span>
                  <span>200</span>
                  <span>住房补助</span>
                  <span>200</span>
                </li>
              </ul>
            </div>
            <div class="con-allowance">
              <div class="div">
                <h4>社保公积金</h4>
                <span>企业0</span>
                <span>个人0</span>
              </div>
              <ul>
                <li style="font-size: 16px; font-weight: 900">
                  <span>缴费项目</span>
                  <span>基数</span>
                  <span>企业缴纳</span>
                  <span>个人缴纳</span>
                </li>
                <li>
                  <span>社保</span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
                <li>
                  <span>公积金</span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
                <li>
                  <span>缴费合计</span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </div>
          </div>
          <!-- 底部 -->
          <div class="bottom">
            <div>
              <span>实际出勤天数(正式)：</span>
              <el-input disabled placeholder="0"></el-input>
            </div>
            <div>
              <span>计薪天数(正式)：</span>
              <el-input disabled placeholder="0"></el-input>
            </div>
          </div>
        </el-card>
      </div>
      <!-- 右侧部分 -->
      <div class="salary-right">
        <el-card class="card2">
          <h4>招聘日程</h4>
          <div class="block">
            <ul>
              <li>
                <div>HR专员</div>
                <div>2018-12-3 3:30</div>
              </li>
              <li>
                <div>HR专员</div>
                <div>2018-12-3 3:30</div>
              </li>
            </ul>
            <el-timeline>
              <el-timeline-item v-for="(activity, index) in activities" :key="index" :color="activity.color">
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getchangeSalary } from "@/api/salarys"
export default {
  data() {
    return {
      Seesalary: {},
      activities: [
        {
          content: "放弃",
          color: "#0bbd87"
        },
        {
          content: "放弃",
          color: "#0bbd87"
        }
      ]
    }
  },
  created() {
    // 请求数据
    getchangeSalary(this.$route.params.id).then((res) => {
      console.log(res)
      this.Seesalary = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
.Seesalary {
  padding: 10px;

  .box {
    display: flex;
    justify-content: space-between;

    .salary-left {
      width: 74.5%;

      .card {
        padding: 0 20px;

        // 头部样式
        .top {
          display: flex;

          .left {
            .img {
              width: 90px;
              height: 90px;
              border-radius: 100px;
              box-shadow: 0 2px 3px 0 #ccc;
              overflow: hidden;
              position: relative;

              img {
                width: 80px;
                height: 80px;
                text-align: center;
                position: absolute;
                left: 6px;
                top: 12px;
              }
            }
          }

          .right {
            margin-left: 30px;

            .top {
              display: flex;
              align-items: center;
              font-size: 14px;
              font-weight: 900;

              .span2 {
                margin-left: 6px;
                font-size: 12px;
                font-weight: normal;
                padding: 2px 4px;
                color: #fff;
                background-color: #67c23a;
                border-radius: 4px;
              }

              .span3 {
                margin-left: 6px;
                font-size: 12px;
                font-weight: normal;
                padding: 2px 4px;
                color: #fff;
                background-color: #f56c6c;
                border-radius: 4px;
              }
            }

            .con {
              display: flex;
              align-items: center;
              font-size: 14px;
              margin: 10px 0 20px;

              .span {
                margin-right: 10px;
              }
            }

            .foot {
              font-size: 14px;
              display: flex;
              align-items: center;

              span {
                margin-right: 10px;
              }
            }
          }
        }

        .con {
          margin-top: 60px;
          margin-left: 50px;

          .con-allowance {
            ul {
              width: 500px;
              background-color: #f9f9f9;
              padding: 20px 30px;

              li {
                display: flex;
                text-align: center;
                justify-content: space-between;
                margin-bottom: 10px;
                font-size: 14px;

                span {
                  width: 25%;
                }
              }
            }

            .div {
              display: flex;
              align-items: center;

              span {
                margin-left: 100px;
              }
            }
          }
        }

        .bottom {
          margin-left: 50px;
          margin-top: 20px;

          div {
            margin-bottom: 10px;

            span {
              display: inline-block;
              width: 170px;
            }

            .el-input {
              width: 250px;
            }
          }
        }
      }
    }

    .salary-right {
      width: 25%;

      .card2 {
        height: 100%;
        h4 {
          padding-bottom: 10px;
          border-bottom: 1px solid #ccc;
        }
        .block {
          display: flex;
          justify-content: space-around;
          font-size: 14px;
          text-align: center;
          ul {
            li {
              margin-bottom: 15px;
            }
          }
        }
      }
    }
  }
}
</style>

<!-- 考勤设置模块弹出框 -->
<template>
  <div class="Attsetup">
    <el-dialog title="设置" :visible.sync="dialogVisible" width="50%">
      <el-tabs v-model="activeName">
        <!-- 出勤设置 -->
        <el-tab-pane label="出勤设置" name="first">
          <el-form ref="form" :model="setupList" label-width="100px">
            <el-form-item label="部门：">
              <el-select v-model="setupList.departmentId" placeholder="请选择">
                <el-option v-for="item in form" :key="item.id" :label="item.name" :value="item.name"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="出勤时间：">
              <div class="flex">
                <el-input v-model="setupList.morningStartTime" prefix-icon="el-icon-alarm-clock"></el-input>
                <el-input v-model="setupList.morningEndTime" prefix-icon="el-icon-alarm-clock"></el-input>
              </div>
              <div class="flex">
                <el-input v-model="setupList.afternoonStartTime" prefix-icon="el-icon-alarm-clock"></el-input>
                <el-input v-model="setupList.afternoonEndTime" prefix-icon="el-icon-alarm-clock"></el-input>
              </div>
            </el-form-item>
          </el-form>
          <div class="btn">
            <el-button size="mini" type="primary" @click="dialogVisible = false">保存更新</el-button>
            <el-button size="mini" @click="dialogVisible = false">取消</el-button>
          </div>
        </el-tab-pane>
        <!-- 请假设置 -->
        <el-tab-pane label="请假设置" name="second">
          <el-form ref="form" label-width="80px">
            <el-form-item label="部门：">
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in form" :key="item.id" :label="item.name" :value="item.name"> </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <h4>假期类型</h4>
          <div class="list">
            <span>类型</span>
            <span>是否可用</span>
          </div>
          <ul class="ul">
            <li>
              <span>年假</span>
              <el-switch v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </li>
            <li>
              <span>事假</span>
              <el-switch v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </li>
            <li>
              <span>病假</span>
              <el-switch v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </li>
            <li>
              <span>婚假</span>
              <el-switch v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </li>
            <li>
              <span>丧假</span>
              <el-switch v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </li>
            <li>
              <span>产假</span>
              <el-switch v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </li>
            <li>
              <span>奖励产假</span>
              <el-switch v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </li>
            <li>
              <span>陪产假</span>
              <el-switch v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </li>
            <li>
              <span>探亲假</span>
              <el-switch v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </li>
            <li>
              <span>工伤假</span>
              <el-switch v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </li>
            <li>
              <span>调休假</span>
              <el-switch v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </li>
            <li>
              <span>产检假</span>
              <el-switch v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </li>
            <li>
              <span>流产假</span>
              <el-switch v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </li>
            <li>
              <span>长期病假</span>
              <el-switch v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </li>
            <li>
              <span>测试架</span>
              <el-switch v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </li>
          </ul>
          <div class="btn">
            <el-button size="mini" type="primary" @click="dialogVisible = false">保存更新</el-button>
            <el-button size="mini" @click="dialogVisible = false">取消</el-button>
          </div>
          <div class="foot">
            <div class="left">
              <i class="el-icon-warning"></i>
            </div>
            <div class="right">
              <div>事假 请假单位为0.5天 只能提交工作日内的请假单</div>
              <div>当请假开关关闭后，员工则不可在员工端提交请假申请</div>
            </div>
          </div>
        </el-tab-pane>
        <!-- 扣款设置 -->
        <el-tab-pane label="扣款设置" name="third">
          <el-form ref="form" label-width="80px">
            <el-form-item label="部门：">
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in form" :key="item.id" :label="item.name" :value="item.name"> </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <!-- 迟到扣款 -->
          <el-card shadow="hover">
            <div>
              <span>迟到扣款</span>
              <el-switch class="switch" v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </div>
            <div class="box">
              <div class="div">
                <span>迟到≤</span>
                <span class="span">30</span>
                <span>分钟</span>
              </div>
              <div class="div">
                <span>迟到≤</span>
                <span class="span">2</span>
                <span>次，</span>
                <span>每次扣款</span>
                <span class="span">0</span>
                <span>元</span>
              </div>
              <div class="div">
                <span>迟到≥</span>
                <span class="span span1">2</span>
                <span>次，</span>
                <span>每次扣款</span>
                <span class="span">30</span>
                <span>元</span>
              </div>
              <div class="div">
                <span>迟到≥</span>
                <span class="span span1">30</span>
                <span>分钟</span>
              </div>
              <div class="div">
                <span>迟到≥</span>
                <span class="span span1">0</span>
                <span>次，</span>
                <span>每次旷工</span>
                <span class="span">0.5</span>
                <span>元</span>
              </div>
            </div>
          </el-card>
          <!-- 早退扣款 -->
          <el-card shadow="hover">
            <div>
              <span>早退扣款</span>
              <el-switch class="switch" v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </div>
            <div class="box">
              <div class="div">
                <span>早退≤</span>
                <span class="span">30</span>
                <span>分钟</span>
              </div>
              <div class="div">
                <span>早退≤</span>
                <span class="span">2</span>
                <span>次，</span>
                <span>每次扣款</span>
                <span class="span">0</span>
                <span>元</span>
              </div>
              <div class="div">
                <span>早退≥</span>
                <span class="span span1">2</span>
                <span>次，</span>
                <span>每次扣款</span>
                <span class="span">30</span>
                <span>元</span>
              </div>
              <div class="div">
                <span>早退≥</span>
                <span class="span span1">30</span>
                <span>分钟</span>
              </div>
              <div class="div">
                <span>早退≥</span>
                <span class="span span1">0</span>
                <span>次，</span>
                <span>每次旷工</span>
                <span class="span">0.5</span>
                <span>元</span>
              </div>
            </div>
          </el-card>
          <!-- 旷工扣款 -->
          <el-card shadow="hover">
            <div>
              <span>旷工扣款</span>
              <el-switch class="switch" v-model="switchs" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            </div>
            <div class="box">
              <div class="div">
                <span>旷工按</span>
                <span class="span">2</span>
                <span>倍工资处罚</span>
              </div>
            </div>
          </el-card>
          <div class="btn">
            <el-button size="mini" type="primary" @click="dialogVisible = false">保存更新</el-button>
            <el-button size="mini" @click="dialogVisible = false">取消</el-button>
          </div>
        </el-tab-pane>
        <!-- 加班设置 -->
        <el-tab-pane label="加班设置" name="fourth">
          <el-form ref="form" label-width="100px">
            <el-form-item label="部门：">
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in form" :key="item.id" :label="item.name" :value="item.name"> </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div class="overtime">
            <el-form ref="form" label-width="100px">
              <el-form-item label="加班规则：">
                <div class="work">
                  <div>
                    <el-switch v-model="switchs"> </el-switch>
                    <span>工作日可申请加班</span>
                  </div>
                  <div class="element">
                    <el-checkbox v-model="radio">调休假</el-checkbox>
                    <el-input style="width: 100px" disabled prefix-icon="el-icon-alarm-clock"></el-input>
                    <el-input style="width: 100px" disabled prefix-icon="el-icon-alarm-clock"></el-input>
                  </div>
                </div>
                <div class="work">
                  <div>
                    <el-switch v-model="switchs"> </el-switch>
                    <span>工作日可申请加班</span>
                  </div>
                  <div class="element">
                    <el-checkbox v-model="radio">调休假</el-checkbox>
                    <el-input style="width: 100px" disabled prefix-icon="el-icon-alarm-clock"></el-input>
                    <el-input style="width: 100px" disabled prefix-icon="el-icon-alarm-clock"></el-input>
                  </div>
                </div>
                <div class="work">
                  <div>
                    <el-switch v-model="switchs"> </el-switch>
                    <span>法定节假日可申请加班</span>
                  </div>
                  <div class="element">
                    <el-checkbox v-model="radio">调休假</el-checkbox>
                    <el-input style="width: 100px" disabled prefix-icon="el-icon-alarm-clock"></el-input>
                    <el-input style="width: 100px" disabled prefix-icon="el-icon-alarm-clock"></el-input>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="打卡验证：">
                <el-switch v-model="switchs"> </el-switch>
                <span style="margin-left: 6px">加班需要有打卡记录</span>
              </el-form-item>
              <el-form-item label="开启补偿：">
                <el-switch v-model="switchs"> </el-switch>
              </el-form-item>
              <el-form-item label="调休假设置：">
                <div>
                  <span>最晚有效期：</span>
                  <span
                    >次年<el-date-picker type="date" placeholder="选择日期" style="width: 30%"></el-date-picker
                  ></span>
                </div>
                <div class="shul" style="margin-top: 6px">
                  <span>请假最小单位</span>
                  <span class="span"></span>天
                </div>
              </el-form-item>
            </el-form>
            <div class="btn">
              <el-button size="mini" type="primary" @click="dialogVisible = false">保存更新</el-button>
              <el-button size="mini" @click="dialogVisible = false">取消</el-button>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
import { Attgetsetup, Attendancetop } from "@/api/attenDances"
export default {
  data() {
    return {
      activeName: "first",
      dialogVisible: true,
      setupList: {},
      form: {},
      value: "传智教育",
      switchs: false,
      radio: false
    }
  },
  created() {
    /*请求数据*/
    Attgetsetup().then((res) => {
      console.log(res)
      this.setupList = res.data.data
    })
    this.select()
  },
  methods: {
    select() {
      Attendancetop().then((res) => {
        console.log(res)
        this.form = res.data.data.depts
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  text-align: center;
  margin-top: 20px;
}

.flex {
  display: flex;
}

.foot {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fdf6ec;
  color: #e6a23c;
  padding: 20px;
  margin-top: 15px;
  font-size: 14px;
  .left {
    margin-right: 10px;
    .el-icon-warning {
      font-size: 24px;
    }
  }
  .right {
    div {
      margin: 10px 0;
    }
  }
}
.work {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;

  .element {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 6px;
  }
}

h4 {
  margin-left: 40px;
  font-weight: normal;
}

.switch {
  margin-left: 6px;
}

.el-card {
  margin-bottom: 10px;
}

.box {
  margin: 40px;
  margin-left: 100px;
  color: rgb(131, 131, 131);

  .div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .span {
      display: inline-block;
      width: 35px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #ddd;
    }

    .span1 {
      background-color: #f5f7fa;
      color: #ccc;
    }
  }
}

.list {
  width: 350px;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  font-weight: 900;
  margin-left: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.ul {
  li {
    width: 350px;
    display: flex;
    justify-content: space-around;
    margin-left: 40px;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }
}

.shul {
  display: flex;
  align-items: center;

  .span {
    display: inline-block;
    width: 35px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #ddd;
  }
}
</style>

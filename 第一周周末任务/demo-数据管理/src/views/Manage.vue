<template>
  <div class="manage">
    <p class="title">数据统计</p>
    <div class="box">
      <ul>
        <li class="everyDayData">当日数据：</li>
        <li>
          {{num1}}
          <span>新增用户</span>
        </li>
        <li>
          {{num2}}
          <span>新增订单</span>
        </li>
        <li>
          {{num3}}
          <span>新增管理员</span>
        </li>
      </ul>
      <ul>
        <li class="totalData">总数据：</li>
        <li>
          {{num4}}
          <span>注册用户</span>
        </li>
        <li>
          {{num5}}
          <span>订单</span>
        </li>
        <li>
          {{num6}}
          <span>管理员</span>
        </li>
      </ul>
    </div>
  </div>
</template>
  
  <script>
import { getNum1,getNum2,getNum3,getNum4,getNum5,getNum6 } from "../utils/API.js";
export default {
  data() {
    return {
      num1: "",
      num2: "",
      num3: "",
      num4: "",
      num5: "",
      num6: "",
    };
  },
  methods: {},
  created() {
    let time = new Date();
    getNum1({
      year: time.getFullYear,
      month: time.getMonth + 1,
      date: time.getDate(),
    }).then((res) => {
      console.log(res);
      this.num1 = res.count
    });
    getNum2({
      year: time.getFullYear,
      month: time.getMonth + 1,
      date: time.getDate(),
    }).then((res) => {
      console.log(res);
      this.num2 = res.count
    });
    getNum3({
      year: time.getFullYear,
      month: time.getMonth + 1,
      date: time.getDate(),
    }).then((res) => {
      console.log(res);
      this.num3 = res.count
    });
    getNum4({
      year: time.getFullYear,
      month: time.getMonth + 1,
      date: time.getDate(),
    }).then((res) => {
      console.log(res);
      this.num4 = res.count
    });
    getNum5({
      year: time.getFullYear,
      month: time.getMonth + 1,
      date: time.getDate(),
    }).then((res) => {
      console.log(res);
      this.num5 = res.count
    });
    getNum6({
      year: time.getFullYear,
      month: time.getMonth + 1,
      date: time.getDate(),
    }).then((res) => {
      console.log(res);
      this.num6 = res.count
    });
  },
};
</script>
  
  <style lang='scss' scoped>
.title {
  height: 35px;
  line-height: 45px;
  font-size: 30px;
  text-align: center;
  // background: pink;
}
.box {
  ul {
    display: flex;
    li {
      width: 170px;
      height: 35px;
      text-align: center;
      line-height: 35px;
      background: #e5e9f2;
      margin: 15px 20px 0 0;
      border-radius: 5px;
      font-size: 25px;
      span {
        font-size: 14px;
        color: #666666;
      }
    }
    .everyDayData {
      color: #fff;
      background: #ff9800;
    }
    .totalData {
      color: #fff;
      background: #20a0ff;
    }
  }
}
</style>
  
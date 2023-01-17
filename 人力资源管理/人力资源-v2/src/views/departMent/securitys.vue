<template>
  <div class="month">
    <div class="box">
      <el-card class="box-card">
        <template #header>
          <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
            <span class="paddTit">全公司</span>
            <span>
              <div class="block">
                <span class="demonstration"></span>
                <el-date-picker v-model="value" type="date" placeholder="Pick a day" :size="size" />
              </div>
            </span>
          </div>
        </template>
        <div style="display: flex; align-items: center">
          <span style="padding: 10px 30px"> > </span>
          <span>
            <span style="padding: 10px 30px"
              >202001社保报表<span style="font-size: 10px; margin-left: 10px">未归档</span></span
            >
            <div style="padding: 10px 30px">社保报表</div>
          </span>
          <span style="width: 1px; height: 60px; background-color: #ccc; margin: 2px 10px"></span>
          <span style="padding: 10px 30px">
            <span style="color: #ccc">企业缴纳</span>
            <div style="margin-top: 10px; font-size: 20px">
              {{ top.enterprisePayment }}
            </div>
          </span>
          <span style="width: 1px; height: 60px; background-color: #ccc; margin: 2px 10px"></span>
          <span style="padding: 10px 30px">
            <span style="color: #ccc">个人缴纳</span>
            <div style="margin-top: 10px; font-size: 20px">
              {{ top.personalPayment }}
            </div>
          </span>
          <span style="width: 1px; height: 60px; background-color: #ccc; margin: 2px 10px"></span>
          <span style="padding: 10px 30px">
            <span style="color: #ccc">合计</span>
            <div style="margin-top: 10px; font-size: 20px">
              {{ top.total }}
            </div>
          </span>
        </div>
      </el-card>
      <p>copyright@ 2018 iHRM 系统 版权所有</p>
    </div>
  </div>
</template>

<script>
import { securitys } from "@/api/departMent"
export default {
  data() {
    return {
      top: {},
      size: "default",
      value: ""
    }
  },
  methods: {},
  created() {
    securitys().then((res) => {
      console.log(res)
      this.top = { ...res.data.data[0] }
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.month {
  height: 100%;
}
.box {
  height: calc(100% - 102px);
  background-color: #eaecef;
  padding: 20px;
}
.paddTit {
  padding: 0 30px 16px;
  font-size: 26px;
  font-weight: 900;
  color: #409eff;
  border-bottom: 4px solid #409eff;
}
p {
  background-color: #eaecef;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  margin: 10px 0;
}
</style>

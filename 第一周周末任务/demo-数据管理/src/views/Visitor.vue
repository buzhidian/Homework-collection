<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
import { getCity } from "../utils/API.js";

import * as echarts from "echarts";
export default {
  data() {
    return {
    };
  },
  methods: {
    getData() {
      getCity().then((res) => {
        console.log(res.user_city);
        this.setEcharts([
          { value: res.user_city.beijing, name: "北京" },
          { value: res.user_city.shanghai, name: "上海" },
          { value: res.user_city.shenzhen, name: "深圳" },
          { value: res.user_city.hangzhou, name: "杭州" },
          { value: res.user_city.qita, name: "其他" },
        ]);
      });
    },
    setEcharts(params) {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "用户分布",
          subtext: "",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: params,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang='scss' scoped>
#main {
  width: 800px;
  height: 500px;
}
</style>

<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      echartsData: {},
    }; 
  },
  methods: {
    getData() {
      this.$http.get("reports/type/1").then((res) => {
        console.log(res.data);
        this.echartsData = res.data.data;
        this.setEcharts();
      });
    },
    setEcharts() {
      var chartDom = document.getElementById("main");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "用户来源",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: this.echartsData.legend,
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: this.echartsData.xAxis,
        yAxis: this.echartsData.yAxis,
        series: this.echartsData.series,
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

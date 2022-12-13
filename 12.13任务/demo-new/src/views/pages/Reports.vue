<template>
  <div>
    <br />
    <div id="main" class="main"></div>
    <br />
    <div id="main2" class="main"></div>
    <br />
    <div id="main3" class="main"></div>
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
        this.setEcharts2();
        this.setEcharts3();
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
          show: true,
        },
        xAxis: this.echartsData.xAxis,
        yAxis: this.echartsData.yAxis,
        series: this.echartsData.series,
      };

      option && myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },

    setEcharts2() {
      var chartDom = document.getElementById("main2");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "用户来源",
          subtext: "2018-1-1",
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
            data: [
              {
                value: this.echartsData.series[0].data[5],
                name: this.echartsData.series[0].name,
              },
              {
                value: this.echartsData.series[1].data[5],
                name: this.echartsData.series[1].name,
              },
              {
                value: this.echartsData.series[2].data[5],
                name: this.echartsData.series[2].name,
              },
              {
                value: this.echartsData.series[3].data[5],
                name: this.echartsData.series[3].name,
              },
              {
                value: this.echartsData.series[4].data[5],
                name: this.echartsData.series[4].name,
              },
            ],
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
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },

    setEcharts3() {
      var chartDom = document.getElementById("main3");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "用户来源",
          subtext: "2018-1-1",
          left: "center",
        },
        xAxis: {
          type: "category",
          data: this.echartsData.legend.data,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [
              this.echartsData.series[0].data[5],
              this.echartsData.series[1].data[5],
              this.echartsData.series[2].data[5],
              this.echartsData.series[3].data[5],
              this.echartsData.series[4].data[5],
            ],
            type: "bar",
          },
        ],
      };

      option && myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang='scss' scoped>
.main {
  width: 800px;
  height: 500px;
}
</style>

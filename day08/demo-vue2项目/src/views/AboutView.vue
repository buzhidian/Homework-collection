<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span :title="msg">{{"今天星期六"}}</span>

    <div class="box">
      <p v-if="flag">噫吁嚱，危乎高哉！</p>
      <p v-else>蜀道之难，难于上青天！</p>
      <button @click="flag = !flag">切换</button>
    </div>

    <div class="box">
      <p v-show="status">蚕丛及鱼凫，开国何茫然！</p>
      <span>中中中</span>
      <p v-show="!status">尔来四万八千岁，不与秦塞通人烟。</p>
      <br><br>
      <span v-show="status">蚕丛及鱼凫，开国何茫然！</span>
      <span>中中中</span>
      <span v-show="!status">尔来四万八千岁，不与秦塞通人烟。</span>
      <button @click="status = !status">切换</button>
    </div>

    <div class="box">
      <ul>
        <li v-for="(item,index) in week" :key="index">{{item}}</li>
      </ul>
      <button @click="handler">修改第一行</button>
    </div>


 </div>
</template>

<script>
export default {
  data () {
    return {
      msg:"显示日期："+ new Date().toLocaleString(),
      flag:true,
      status:true,
      week:["星期一","星期二","星期三","星期四","星期五",]
    }
  },
  methods: {
    handler(){
      console.log(111);
      this.week[0] = "修改后的内容"   //如果用key值用index则不执行这一行
      // this.week.push("周末")
    }
  },
  created () {

  },
}
</script>

<style lang='scss' scoped>
.box{
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  width: 300px;
  // height: 100px;
}
</style>

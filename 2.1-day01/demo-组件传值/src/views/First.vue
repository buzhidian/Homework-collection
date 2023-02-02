<template>
  <div class="first">
    <h2>父传子、子传父</h2>
    <!-- 父传子 -->
    <First-child :msg="father" @send="send"></First-child>
    <p>从子组件传来的信息：<b>{{msg}}</b></p>
  </div>
</template>

<script>
import FirstChild from "../components/FirstChild.vue"
export default {
    components:{
        FirstChild
    },
  data() {
    return {
        father:"这是父组件的信息",
        msg:""
    };
  },
  methods: {
    send(val){
        console.log("在父组件打印："+val);
        this.msg = val
    }
  },
  created() {},
};
</script>

<style lang='scss' scoped>
</style>

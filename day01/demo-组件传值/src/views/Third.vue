<template>
    <div class="third">
      <h2>third</h2>
      <button @click="getmsg">获取子信息</button>
      <p>获取子组件的信息：<b>{{msg}}</b></p>
      <Third-child></Third-child>
    </div>
  </template>
  
  <script>
  import ThirdChild from "../components/ThirdChild.vue"
  export default {
      components:{
          ThirdChild
      },
    data() {
      return {
        fatherMsg:"父级的信息",
        msg:""
      };
    },
    methods: {
        getmsg(){
            console.log(this.$children[0].sonMsg);
            this.msg = this.$children[0].sonMsg
        }
    },
    created() {
        console.log();
    },
  };
  </script>
  
  <style lang='scss' scoped>
  </style>
  
<template>
    <div class="third">
      <h2>thirdChild</h2>
      <button @click="send">获取父信息</button>
      <p>这里是父级的信息：<b>{{msg}}</b></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        
        sonMsg:"子级的信息",
        msg:"",
      };
    },
    methods: {
        send(){
            this.msg = this.$parent.fatherMsg
        }
    },
    created() {},
  };
  </script>
  
  <style lang='scss' scoped>
    .third{
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
  }
  </style>
  
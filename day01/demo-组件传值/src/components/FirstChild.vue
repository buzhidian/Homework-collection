<template>
    <div class="box">
      <h2>child</h2>

      <div class="">
        <p>{{msg}}</p>
        <button @click="send">获取子信息</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props:["msg"],
    data() {
      return {
        child:"这是子组件的消息",
      };
    },
    methods: {
        send(){
            this.$emit("send",this.child)
        }
    },
    created() {},
  };
  </script>
  
  <style lang='scss' scoped>
  .box{
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
  }
  </style>
  
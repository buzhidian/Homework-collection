<template>
    <div class="childbro2">
      <h2>childbro2</h2>
      <p>
        接收到的值:<b>{{msg}}</b>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        msg:"",

      };
    },
    methods: {},
    created() {
        this.$bus.$on("send",(val)=>{
            this.msg = val
        })
    },
  };
  </script>
  
  <style lang='scss' scoped>
  .childbro2{
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
  }
  </style>
  
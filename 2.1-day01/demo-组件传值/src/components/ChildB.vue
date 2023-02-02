<template>
    <div class="childB">
      <h2>childB</h2>
      <p>
        拿到祖父的数据:<b>{{$attrs.msg}}</b>
      </p>
      <button @click="getHandler">调用祖父组件的方法</button>
    </div>
  </template>
    
    <script>
  export default {
    data() {
      return {
        GrandsonMsg:"孙子组件的信息"
      };
    },
    methods: {
      getHandler(){
        this.$emit("handler",this.GrandsonMsg)
      }
    },
    created() {},
  };
  </script>
    
    <style lang='scss' scoped>
  .childB {
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
  }
  </style>
    
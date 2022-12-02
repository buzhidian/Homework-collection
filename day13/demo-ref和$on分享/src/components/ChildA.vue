<template>
    <div class="childA">
      <h2>ChildA</h2>
      <button @click="handlerSend">Send</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        msgA:"这是子组件A的信息"
      };
    },
    methods: {
        handlerSend(){
            this.$bus.$emit("send",this.msgA)
        }
    },
    created() {},
    mounted() {},
    components: {},
    computed: {},
    watch: {},
  };
  </script>
  
  <style lang='scss' scoped>
  .childA{
      border: 1px solid red;
      padding: 20px;
      width: 200px;
  }
  </style>
  
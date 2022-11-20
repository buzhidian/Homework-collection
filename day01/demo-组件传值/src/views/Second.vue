<template>
    <div class="second">
      <h2>v-model传值(封装input)</h2>
        <My-input v-model="value" :value="value" placeholder="请输入"></My-input>
        <p>在父组件的展示：<b>{{value}}</b></p>
    </div>
  </template>
  
  <script>
  import MyInput from "../components/MyInput.vue"
  export default {
      components:{
          MyInput
      },
    data() {
      return {
        value:""
      };
    },
    methods: {},
    created() {},
  };
  </script>
  
  <style lang='scss' scoped>
  </style>
  
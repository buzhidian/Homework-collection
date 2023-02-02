<template>
    <div class="fourth">
      <h2>Vuex和本地传值</h2>
        <button @click="send">传到vuex</button>

      <Fourth-child></Fourth-child>
      <p>
        <button @click="get">获取本地</button>
        <span>获取本地子组件的信息：<b>{{getmsg}}</b></span>
      </p>
    </div>
  </template>
  
  <script>
  import FourthChild from "../components/FourthChild.vue"
  export default {
      components:{
          FourthChild
      },
    data() {
      return {
        msg:"父级的信息",
        getmsg:""
      };
    },
    methods: {
        send(){
            this.$store.commit("set",this.msg)
        },
        get(){
            this.getmsg = localStorage.getItem("son")
        }
    },
    created() {},
  };
  </script>
  
  <style lang='scss' scoped>
  </style>
  
<template>
    <div class="childB">
      <h2>childB</h2>
      <p>{{msg}}</p>
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
            console.log(val);
            this.msg = val
        })
    },
    mounted() {},
    components: {},
    computed: {},
    watch: {},
  };
  </script>
  
  <style lang='scss' scoped>
  .childB{
    border: 1px solid red;
    padding: 20px;
    width: 200px;
}
  </style>
  
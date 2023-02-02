<template>
    <div class="input">
      <h2>input</h2>
      <input type="text" @input="handler" :value="value" :placeholder="placeholder">
    </div>
  </template>
  
  <script>
  export default {
    props:["value","placeholder"],
    data() {
      return {

      };
    },
    methods: {
        handler(e){
            this.$emit("input",e.target.value)
        }
    },
    created() {},
  };
  </script>
  
  <style lang='scss' scoped>
  .input{
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
  }
  </style>
  
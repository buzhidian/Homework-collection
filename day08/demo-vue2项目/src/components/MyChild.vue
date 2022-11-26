<template>
    <div>
      <h2>Child</h2>
      <input type="text" :placeholder="placeholder" :value="value" @input="handlerInput">
    </div>
  </template>
  
  <script>
  export default {
    props:{
        placeholder:String,
        value:String,

    },
    data() {
      return {};
    },
    methods: {
        handlerInput(e){
            console.log(e);
            this.$emit("input",e.target.value)
        }
    },
  };
  </script>
  
  <style lang='scss' scoped>
  </style>
  
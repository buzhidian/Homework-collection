<template>
    <div class="myTest">
      <h2>myTest</h2>
      <input type="text" :value="value" :placeholder="placeholder" @input="handlerInput">
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
            console.log(e.target.value);
            this.$emit("input",e.target.value)
        }
    },
  };
  </script>
  
  <style lang='scss' scoped>
  </style>
  
<template>
    <div class="sixthChild">
      <h2>sixthChild</h2>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sonMsg:"子级的信息",
      };
    },
    methods: {
        
    },
    created() {},
  };
  </script>
  
  <style lang='scss' scoped>
    .sixthChild{
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
  }
  </style>
  
<template>
    <div class="myList">
      <h2>myList</h2>
      <h2></h2>
      <ul>
        <li></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    // name:"MyList",
    props:["list"],
    data() {
      return {};
    },
    methods: {},
    created() {},
    mounted() {},
    components: {},
    computed: {},
    watch: {},
  };
  </script>
  
  <style lang='scss' scoped>
  .myList{
    width: 200px;
    height: 350px;
    background: #84cbe7;
    h2{
        background: #faa008;
    }
  }
  </style>
  
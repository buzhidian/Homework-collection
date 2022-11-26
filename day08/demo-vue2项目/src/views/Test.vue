<template>
  <div>
    <h2>test</h2>
    <my-test v-model="value"></my-test>
    <p>{{value}}</p>
  </div>
</template>

<script>
import MyTest from "../components/MyTest.vue"
export default {
    components:{
        MyTest
    },  
  data() {
    return {
        value:""
    };
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
</style>

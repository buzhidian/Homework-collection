<template>
  <div>
    <h2>Index</h2>
    <My-child v-model="value" placeholder="请输入..."></My-child>
    <p>{{value}}</p>
  </div>
</template>

<script>
import MyChild from '../components/MyChild.vue'
export default {
  components: { MyChild },
    comments:{
        MyChild
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

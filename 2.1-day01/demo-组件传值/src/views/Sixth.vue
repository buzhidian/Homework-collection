<template>
  <div class="six">
    <h2>兄弟组件传值 | ref传值</h2>
    <Child-bro-1></Child-bro-1>
    <Child-bro-2></Child-bro-2>

    <Sixth-child ref="sixthchild"></Sixth-child>
  </div>
</template>

<script>
import SixthChild from "../components/SixthChild.vue"
import ChildBro1 from "../components/ChildBro1.vue"
import ChildBro2 from "../components/ChildBro2.vue"
export default {
    components:{
        ChildBro1,
        ChildBro2,
        SixthChild 
    },
  data() {
    return {};
  },
  methods: {
  },
  created() {},
  mounted(){
    console.log(this.$refs.sixthchild.sonMsg);
  }
};
</script>

<style lang='scss' scoped>
</style>

<template>
  <div class="fifth">
    <h2>attr和listener || provide和inject</h2>
    <Child-a :msg="fatherMsg" @handler="handler"></Child-a>
    <p>
      通过listener 获取孙子组件的数据:<b>{{ msg }}</b>
    </p>
    <br /><br />

    <Child-c></Child-c>
  </div>
</template>
  
  <script>
import ChildA from "../components/ChildA.vue";
import ChildC from "../components/ChildC.vue";
export default {
  components: {
    ChildA,
    ChildC,
  },
  provide() {
    return {
      newMsg: "这是provide中的信息",
    };
  },
  data() {
    return {
      fatherMsg: "这是父级的msg",
      msg: "",
    };
  },
  methods: {
    handler(val) {
      console.log(val);
      this.msg = val;
    },
  },
  created() {},
};
</script>
  
  <style lang='scss' scoped>
</style>
  
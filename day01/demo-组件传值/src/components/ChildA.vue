<template>
  <div class="childA">
    <h2>childA</h2>
    <Child-b v-bind="$attrs" v-on="$listeners"></Child-b>
  </div>
</template>
  
  <script>
import ChildB from "../components/ChildB.vue";
export default {
  components: {
    ChildB,
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
  
  <style lang='scss' scoped>
.childA {
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
}
</style>
  
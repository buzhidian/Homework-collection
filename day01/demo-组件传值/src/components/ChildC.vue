<template>
  <div class="childC">
    <h2>childC</h2>
    <p>
      获取到父组件provide中的信息:
      <b>{{newMsg}}</b>
    </p>
  </div>
</template>
    
    <script>
export default {
  inject: ["newMsg"],
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
    
    <style lang='scss' scoped>
.childC {
  border: 1px solid #ccc;
  padding: 20px;
}
</style>
    
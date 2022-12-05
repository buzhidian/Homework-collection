<template>
  <div class="myChild">
    <h2>myChild</h2>
  </div>
</template>

<script>
export default {
    props:["student"],
  data() {
    return {
        msg:"我是子组件信息。"
    };
  },
  methods: {},
  created() {},
};
</script>

<style lang='scss' scoped>
</style>

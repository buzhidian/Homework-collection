<template>
  <div class="childA">
    <h2>ChildA</h2>
    <button @click="handlerSend">send</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        msg:"我是来自A的信息"
    };
  },
  methods: {
    handlerSend(){
        this.$bus.$emit("send",this.msg)
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.childA{
    border: 1px solid red;
    padding: 20px;
    width: 200px;
}
</style>

<template>
  <div class="childbro1">
    <h2>childbro1</h2>
    <button @click="send">发送</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        msgbro:"传向bro2的值",
    };
  },
  methods: {
    send(){
        this.$bus.$emit("send",this.msgbro)
    }
  },
  created() {},
};
</script>

<style lang='scss' scoped>
.childbro1{
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
  }
</style>

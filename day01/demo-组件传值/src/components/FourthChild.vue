<template>
  <div class="fourthchild">
    <h2>fourthchild</h2>
    <p>从vuex获取的父级信息：<b>{{fatherMsg}}</b></p>
    <p>---------分割线---------</p>
    <button @click="set">储存本地</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        sonMsg:"子级的信息"
    };
  },
  methods: {
    set(){
        localStorage.setItem("son",this.sonMsg)
    }
  },
  created() {},
  mounted() {

  },
  components: {},
  computed: {
    fatherMsg(){
        return this.$store.state.center
    }
  },
  watch: {},
};
</script>

<style lang='scss' scoped>
.fourthchild{
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
  }
</style>

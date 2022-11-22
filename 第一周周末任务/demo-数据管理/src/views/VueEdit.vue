<template>
  <div>
    <wangEditor v-model="wangEditorDetail" :isClear="isClear" @change="wangEditorChange"></wangEditor>
  </div>
</template>
<script>
import wangEditor from "../components/Editor.vue";
export default {
  data() {
    return {
      isClear: false,//设置为true的时候，这个可以用this.wangEditorDetail=''来替代
      wangEditorDetail: ""
    };
  },
  mounted() {
    this.wangEditorDetail = "wangEditorDetail默认值"; //设置富文本框默认显示内容
  },
  components: { wangEditor },
  methods: {
    wangEditorChange(val) {
      console.log(val);
    }
  }
};
</script>
  
  <style lang='scss' scoped>
  </style>
  
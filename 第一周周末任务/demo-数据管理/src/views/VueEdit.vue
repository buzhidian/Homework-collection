<template>
  <div>
    
    <vue-editor v-model="content"></vue-editor>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
 
export default {
  // 2、添加组件
  components: {
    VueEditor
  },
 
  data() {
    return {
      content: "<b>文本编辑</b>"
    };
  }
};

</script>
  
  <style lang='scss' scoped>
  </style>
  
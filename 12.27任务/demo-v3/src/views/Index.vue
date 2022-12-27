<template>
  <div class="">
    <p>
        姓名：{{ username }} <br>
        <button @click="getAge">获取</button>
    </p>

  </div>
</template>

<script lang='ts'>
import { ref, reactive, toRefs, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  setup(props, ctx) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const data = reactive({});

    let username = "李四"

    const getAge = ()=>{
        console.log("获取用户年龄");
        
    }

    return { ...toRefs(data),username,getAge };
  },
});
</script>

<style lang='scss' scoped>
</style>

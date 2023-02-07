<template>
  <div class="">
    <h2>First</h2>
    <button @click="getData">获取模块请求一</button>
    <button @click="getData2">获取模块请求二</button>
  </div>
</template>

<script lang='ts'>
import { ref, reactive, toRefs, defineComponent } from "vue";
import { mapActions, useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  setup(props, ctx) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const data = reactive({
      form: {
        mobile: "13800000002",
        password: "123456",
      },
    });

    const getData = function (form: object) {
        store.dispatch('login/login')
    };

    const actionObj = {...mapActions({'login':'login/login'})}
    console.log(actionObj);
    
    const getData2 = function (form: object) {
        console.log(11);
        
        actionObj.login()
    };

    return { ...toRefs(data),getData,getData2 };
  },
});
</script>

<style lang='scss' scoped>
</style>

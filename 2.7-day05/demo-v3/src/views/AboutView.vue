<template>
  <div class="">
    <h2>About</h2>
  </div>
</template>

<script lang='ts'>
import { ref, reactive, toRefs, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import http from "../utils/http";
export default defineComponent({
  setup(props, ctx) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const data = reactive({});

    // 直接请求
    http
      .post("/sys/login", {
        mobile: "13800000002",
        password: "123456",
      })
      .then((res) => {
        console.log(res.data);
      });
    return { ...toRefs(data) };
  },
});
</script>

<style lang='scss' scoped>
</style>

<template>
  <div class="test">
    <h2>hook</h2>
    <h3>{{ point }}</h3>
  </div>
</template>

<script>
import usePoint from "../hooks/usePoint.js";
export default {
  setup(props, ctx) {
    const point = usePoint();
    return { point };
  },
};
</script>

<style lang='scss' scoped>
</style>

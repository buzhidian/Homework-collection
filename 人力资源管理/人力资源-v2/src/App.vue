<template>
  <div id="app">
    <router-view class="page" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
html,
body,
.page {
  height: 100%;
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.el-dialog__header {
  background-color: #66b1ff !important;
  color: #fff !important;
}
.el-pagination button,
.el-pagination span:not([class*="suffix"]) {
  font-size: 20px !important;
}
.el-pager li {
  font-size: 18px !important;
}
</style>

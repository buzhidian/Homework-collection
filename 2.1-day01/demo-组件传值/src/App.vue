<template>
  <div id="app">
    <nav>
      <router-link to="/first">first</router-link> |
      <router-link to="/second">second</router-link> |
      <router-link to="/third">third</router-link> |
      <router-link to="/forth">fourth</router-link> |
      <router-link to="/fifth">fifth</router-link> |
      <router-link to="/sixth">sixth</router-link> 
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

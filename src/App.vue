<template>
  <div id="app">
    <user-index text="shshsh"></user-index>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import UserIndex from "./components/User/UserIndex.jsx";

export default {
  name: "App",
  components: {
    UserIndex,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

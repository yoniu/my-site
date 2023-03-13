<template>
  <div id="app">
    <background-image />
    <navigation />
  </div>
</template>

<script>
import BackgroundImage from "./components/BackgroundImage";
import Navigation from "./components/Navigation";


export default {
  name: "App",
  components: {
    BackgroundImage,
    Navigation
  },
  computed: {
  },
  mounted() {
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="less">
#app {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  padding: 1rem;
}
</style>

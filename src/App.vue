<template>
  <transition name="showChildAnimated">
    <router-view />
  </transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.showChildAnimated-enter-active,
.showChildAnimated-leave-active {
  transition: opacity 0.5s;
}
</style>

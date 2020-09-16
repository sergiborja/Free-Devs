<template>
  <div class="backgroundImage" id="app">
    <div class="leftNavbarWrapper">
      <h3 class="leftNavbarWrapper__title">
        FreeDevsLogo
      </h3>
      <ul class="navbarListWrapper">
        <li
          @click="
            () => {
              pageState = 1;
            }
          "
          type="button"
          class="listElements"
        >
          WHY US
        </li>
        <li type="button" class="listElements">THE TEAM</li>
        <li type="button" class="listElements">REVIEWS</li>
        <li type="button" class="listElements">CONTACT US</li>
      </ul>
    </div>
    <div class="componentsWindow">
      <home v-if="this.pageState === 1"></home>
    </div>
    <h1 class="entryText">
      We are the key for your <br />
      SUCCESS
    </h1>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import home from "./components/Home";

export default {
  name: "App",
  components: { home },
  data() {
    return {
      pageState: 0,
    };
  },
  methods: {
    moveTo: function moveTo(newRoute) {
      this.$router.push({ path: `/${newRoute}` });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.leftNavbarWrapper {
  height: 100vh;
  width: 25vw;
  background-color: rgba(0, 0, 0, 0.6);
}

.leftNavbarWrapper__title {
  font-size: 3vh;
  color: white;
  position: absolute;
  top: 5vh;
  left: 4vh;
  animation-name: titleAnimation;
  animation-duration: 2s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

@keyframes titleAnimation {
  100% {
    top: 25vh;
    left: 3.5vh;
    font-size: 5vh;
  }
}
.entryText {
  color: white;
  font-size: 11vh;
  position: absolute;
  top: 25vh;
  left: 10vh;
  font-weight: 600;
  -webkit-text-stroke: 0.25px black;
  animation-name: entryTextAnimation;
  animation-duration: 0.85s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

@keyframes entryTextAnimation {
  100% {
    top: 35vh;
    left: 4vh;
    font-size: 2.5vh;
    -webkit-text-stroke: 0px black;
  }
}

.navbarListWrapper {
  color: white;
  list-style-type: none;
  position: absolute;
  bottom: 10vh;
}
.listElements {
  margin: 3vh;
}
.listElements:hover {
  color: gray;
}
.backgroundImage {
  background-image: url("./assets/main-background.jpg");
  background-size: 100% 100%;
  /* filter: blur(8px); */
  /* background: rgba(0, 0, 0, 0.3); */
}

.componentsWindow {
  position: absolute;
  top: 10vh;
  left: 30vw;
  right: 5vw;
}
</style>

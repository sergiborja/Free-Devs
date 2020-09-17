<template>
  <div class="backgroundImage" id="app">
    <div class="leftNavbarWrapper">
      <img class="leftNavbarWrapper__logo" src="./assets/logo.png" alt />
      <ul class="navbarListWrapper">
        <li @click="() => moveTo('home')" type="button" class="listElements">WHY US</li>
        <li type="button" class="listElements">THE TEAM</li>
        <li type="button" class="listElements">REVIEWS</li>
        <li type="button" class="listElements">CONTACT US</li>
      </ul>
    </div>
    <transition v-if="pageState===0" name="initialTextAnimation">
      <h1 class="entryText">
        We are the key for your
        <br />SUCCESS
      </h1>
    </transition>
    <div class="componentsWindow">
      <transition name="showChildAnimated">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  // components: { home },
  data() {
    return {
      pageState: 0,
    };
  },
  methods: {
    moveTo: function moveTo(newRoute) {
      this.pageState = 1;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.leftNavbarWrapper__logo {
  height: 20vh;
  width: 20vh;
  margin-top: 5vh;
  color: white;
  /* animation-name: titleAnimation;
  animation-duration: 2s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out; */
}

/* @keyframes titleAnimation {
  100% {
    margin-top: 20vh;
    height: 30vh;
    width: 30vh;
  }
} */
.entryText {
  color: white;
  font-size: 11vh;
  font-weight: 600;
  width: 90vw;
  top: 30vh;
  left: 10vh;
  position: absolute;
  -webkit-text-stroke: 0.25px black;
  /* animation-name: entryTextAnimation;
  animation-duration: 0.85s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out; */
}

/* @keyframes entryTextAnimation {
  80% {
    font-size: 0vh;
    width: 18vw;
    -webkit-text-stroke: 0px black;
  }
  100% {
    font-size: 0vh;
    width: 18vw;
    left: -200px;
    -webkit-text-stroke: 0px black;
  }
} */

.navbarListWrapper {
  color: white;
  list-style-type: none;
  margin-bottom: 15vh;
  padding: 0;
  margin-left: -3vw;
}
.listElements {
  margin: 3vh 0;
  font-size: 2vh;
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

.showChildAnimated-enter-active,
.showChildAnimated-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.showChildAnimated-enter-active {
  transition-delay: 0.5s;
}

.showChildAnimated-enter,
.showChildAnimated-leave-to {
  opacity: 0;
  transform: translateY(100vh);
}
.showChildAnimated-enter-to,
.showChildAnimated-leave {
  opacity: 1;
  transform: translateY(0);
}

.initialTextAnimation-enter-active,
.initialTextAnimation-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}
.initialTextAnimation-enter,
.initialTextAnimation-leave-to {
  opacity: 0;
}
.initialTextAnimation-enter-to,
.initialTextAnimation-leave {
  opacity: 1;
}
</style>

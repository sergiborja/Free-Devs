<template>
  <div class="backgroundImage" id="app">
    <div class="leftNavbarWrapper">
      <img
        id="logo"
        class="leftNavbarWrapper__logo"
        :class="this.logoAnimation ? 'logoAnimation' : ''"
        src="./assets/mylogo-white.png"
        type="button"
        @click="() => (this.pageState = 0)"
      />
      <ul class="navbarListWrapper">
        <li
          @click="
            () => {
              this.logoAnimation = true;
              this.pageState = 1;
            }
          "
          type="button"
          :class="pageState === 1 ? 'selectedListElement' : 'listElements'"
        >WHY US</li>
        <li type="button" class="listElements">PROJECTS</li>
        <li type="button" class="listElements">REVIEWS</li>
        <li type="button" class="listElements">CONTACT US</li>
      </ul>
    </div>
    <div class="sideBarButton">
      <img v-b-toggle.sidebar-variant class="menuIcon" src="./assets/menu-icon.png" alt />
      <b-sidebar id="sidebar-variant" bg-variant="dark" text-variant="light" shadow>
        <div class="px-3 py-2 sideBarElementContainer">
          <img
            id="logo"
            class="leftNavbarWrapper__logo"
            src="./assets/mylogo-white.png"
            @click="() => this.$router.push({ path: '/' })"
          />
          <ul class="navbarListWrapper">
            <li v-b-toggle.sidebar-variant @click="() => goToSelected(1)">WHY US</li>
            <li class="listElements">PROJECTS</li>
            <li class="listElements">REVIEWS</li>
            <li class="listElements">CONTACT US</li>
          </ul>
        </div>
      </b-sidebar>
    </div>
    <div style="margin: 0">
      <transition name="scrollDown">
        <router-view />
      </transition>
    </div>
    <div class="goDownContainer">
      <p class="scrollText">{{ this.posibleComp[this.pageState + 1] }}</p>
      <img @click="scroll()" class="scrollDownIcon" src="./assets/down-icon.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pageState: null,
      posibleComp: ["welcome", "why us?"],
      logoAnimation: false,
      actualUrl: this.$route.path,
    };
  },
  methods: {
    goToSelected: function goToSelected(screenToGo) {
      this.pageState = screenToGo;
    },
    scroll: function scroll() {
      this.currentSlide = "scrollDown";
      this.pageState++;
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&family=Montserrat:wght@900&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.backgroundImage {
  background-image: url("./assets/blue-back.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
}

.sideBarButton {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
}
.sideBarElementContainer {
  margin-top: 7vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.showChildAnimated-enter-active,
.showChildAnimated-leave-active {
  transition: opacity 0.5s;
}
.leftNavbarWrapper {
  height: 100vh;
  width: 25vw;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: none;
}
.leftNavbarWrapper__logo {
  height: 30vh;
  color: white;
}
.navbarListWrapper {
  margin-top: 6vh;
  list-style-type: none;
  padding: 0;
}
.listElements {
  margin: 3vh 0;
  font-size: 3vh;
  color: white;
}
.listElements:hover {
  color: gray;
}
.menuIcon {
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  margin: 2vh;
  border-radius: none;
  outline: none;
}

.goDownContainer {
  margin-bottom: 1vh;
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 1vh;
}
.scrollText {
  margin: 0;
}
.selectedListElement {
  margin: 3vh 0;
}
.scrollDownIcon {
  height: 30px;
  width: 45px;
}
.scrollDown-enter-active,
.scrollDown-leave-active {
  transition: opacity 1.8s, transform 2s;
}
.scrollDown-enter {
  transform: translateY(100vh);
  opacity: 1;
  transition-delay: 2s;
}
.scrollDown-leave-to {
  transform: translateY(-100vh);
  opacity: 0;
}

.logoAnimation {
  animation-name: logoAnimation;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}
@keyframes logoAnimation {
  100% {
    height: 35vh;
    margin-top: 20vh;
  }
}
</style>

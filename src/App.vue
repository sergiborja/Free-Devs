<template>
  <div class="backgroundImage" id="app">
    <div class="leftNavbarWrapper">
      <div
        class="logoContainer"
        :class="this.logoAnimation ? 'logoAnimation' : ''"
      >
        <img
          id="logo"
          class="leftNavbarWrapper__logo"
          src="./assets/mylogo-white.png"
          type="button"
          @click="() => (this.pageState = 0)"
        />
        <p v-if="this.$route.path !== '/welcome'" class="slogan">
          YOUR SOFTWARE DEVELOPMENT TO THE NEXT LEVEL
        </p>
      </div>
      <ul class="navbarListWrapper">
        <li
          @click="() => navBarNavigation('home')"
          type="button"
          :class="pageState === 1 ? 'selectedListElement' : 'listElements'"
        >
          WHY US
        </li>
        <li type="button" class="listElements">PROJECTS</li>
        <li type="button" class="listElements">REVIEWS</li>
        <li type="button" class="listElements">CONTACT US</li>
      </ul>
    </div>
    <div class="sideBarButton">
      <img
        v-b-toggle.sidebar-variant
        class="menuIcon"
        src="./assets/menu-icon.png"
        alt
      />
      <b-sidebar
        id="sidebar-variant"
        bg-variant="dark"
        text-variant="light"
        shadow
      >
        <div class="px-3 py-2 sideBarElementContainer">
          <img
            id="logo"
            class="leftNavbarWrapper__logo"
            src="./assets/mylogo-white.png"
            @click="() => this.$router.push({ path: '/' })"
          />
          <ul class="navbarListWrapper">
            <li v-b-toggle.sidebar-variant @click="() => goToSelected(1)">
              WHY US
            </li>
            <li class="listElements">PROJECTS</li>
            <li class="listElements">REVIEWS</li>
            <li class="listElements">CONTACT US</li>
          </ul>
        </div>
      </b-sidebar>
    </div>
    <div class="childContainer">
      <transition name="scrollDown">
        <router-view />
      </transition>
    </div>
    <div class="goDownContainer">
      <p class="scrollText">{{ this.posibleComp[this.pageState + 1] }}</p>
      <img
        @click="scroll()"
        class="scrollDownIcon"
        src="./assets/down-icon.png"
      />
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
    navBarNavigation: function navBarNavigation(path) {
      this.logoAnimation = true;
      this.pageState = 1;
      this.$router.push({ path: `/${path}` });
    },
  },
  created() {
    if (this.$route.path !== "/welcome") this.logoAnimation = true;
    else this.logoAnimation = false;
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
  background-size: 100% 100%;
  height: 100%;
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
.childContainer {
  margin: 0vh 2vh;
}
.showChildAnimated-enter-active,
.showChildAnimated-leave-active {
  transition: opacity 0.5s;
}
.leftNavbarWrapper {
  height: 100vh;
  width: 25vw;
  max-width: 23%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: none;
}
.logoContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

@media only screen and (min-width: 770px) {
  .childContainer {
    margin-left: 26vw;
  }
  .sideBarButton {
    display: none;
  }
  .slogan {
    font-family: "Montserrat", sans-serif;
    position: absolute;
    top: 38vh;
    opacity: 0;
    text-align: center;
    color: white;
    font-size: 2vh;
    margin: 0 1vh;
    letter-spacing: 1px;
    animation-name: sloganAnimation;
    animation-duration: 2s;
    animation-delay: 0s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }
  @keyframes sloganAnimation {
    100% {
      opacity: 1;
    }
  }

  .leftNavbarWrapper {
    position: fixed;
    height: 100vh;
    width: 25vw;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .leftNavbarWrapper__logo {
    height: 27vh;
    margin-top: 5vh;
    color: white;
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
      margin-top: 8vh;
    }
  }
  .initalTextContainer {
    position: absolute;
    top: 30vh;
    left: 0vh;
    z-index: 1;
  }
  .entryText {
    color: black;
    font-size: 3vh;
    position: absolute;
    text-align: center;
    top: 29vh;
    left: 25vw;
    margin: 0 5vw;
    font-weight: 600;
  }
  .entryTitle {
    color: white;
    font-size: 10vh;
    opacity: 0%;
    margin-left: 9vw;
    font-family: "Montserrat", sans-serif;
    -webkit-text-stroke: 1px black;
    animation-name: entryTextAnimation;
    animation-duration: 0.85s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }

  @keyframes entryTextAnimation {
    100% {
      opacity: 100%;
    }
  }

  .navbarListWrapper {
    list-style-type: none;
    margin-bottom: 15vh;
    padding: 0;
    margin-left: -3vw;
  }
  .listElements {
    margin: 3vh 0;
    font-size: 2vh;
    color: white;
  }
  .selectedListElement {
    margin: 3vh 0;
    font-size: 2vh;
  }
  .listElements:hover {
    color: gray;
  }
  /* .backgroundImage {
    background-image: url("./assets/main-background.png");
    background-size: 100% 100%;
    background: rgba(0, 0, 0, 0.3);
  } */

  .componentsWindow {
    height: 100vh;
    position: absolute;
    color: black;
    top: 0vh;
    left: 25vw;
    right: 0vw;
    padding: 2vh;
    background: rgba(245, 245, 245, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .showChildAnimated-enter-active,
  .showChildAnimated-leave-active {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease;
    transition-duration: 1s;
    transform: translateY(-100vh);
  }

  .showChildAnimated-enter-active {
    transition-delay: 0.5s;
  }

  .showChildAnimated-enter,
  .showChildAnimated-leave-to {
    opacity: 0;
    transform: translateY(0);
  }
  .showChildAnimated-enter-to,
  .showChildAnimated-leave {
    opacity: 1;
    transform: translateY(100vh);
  }

  .initialTextAnimation-enter-active,
  .initialTextAnimation-leave-active {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease;
    transition-duration: 1s;
    transform: translateY(-100vh);
  }
  .initialTextAnimation-enter,
  .initialTextAnimation-leave-to {
    opacity: 0;
  }
  .initialTextAnimation-enter-to,
  .initialTextAnimation-leave {
    opacity: 1;
  }
}
</style>

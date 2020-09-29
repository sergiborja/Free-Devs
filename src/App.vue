<template>
  <div
    class="appWrapper"
    :class="
      pageState === 'home' || pageState === 'about'
        ? 'showOverflow'
        : 'hideOverflow'
    "
    id="app"
  >
    <div class="leftNavbarWrapper">
      <div
        class="logoContainer"
        :class="
          this.pageState !== 'welcome' ? 'logoAnimation' : 'cancelLogoAnimation'
        "
      >
        <img
          class="leftNavbarWrapper__logo"
          src="./assets/mylogo-white.png"
          type="button"
          @click="() => navBarNavigation('welcome')"
        />
        <p v-if="pageState !== 'welcome'" class="slogan">
          YOUR SOFTWARE DEVELOPMENT TO THE NEXT LEVEL
        </p>
      </div>
      <ul class="navbarListWrapper">
        <li
          type="button"
          @click="() => navBarNavigation('welcome')"
          :class="
            pageState === 'welcome' ? 'selectedListElement' : 'listElements'
          "
        >
          WELCOME
        </li>
        <li
          type="button"
          :class="
            pageState === 'about' ? 'selectedListElement' : 'listElements'
          "
          @click="() => navBarNavigation('about')"
        >
          ABOUT US
        </li>
        <li
          @click="() => navBarNavigation('home')"
          type="button"
          :class="pageState === 'home' ? 'selectedListElement' : 'listElements'"
        >
          WHY US
        </li>
        <li
          type="button"
          :class="
            pageState === 'contact' ? 'selectedListElement' : 'listElements'
          "
          @click="() => navBarNavigation('contact')"
        >
          CONTACT US
        </li>
      </ul>
    </div>
    <div class="sideBarButton">
      <img
        v-b-toggle.sidebar-variant
        class="menuIcon"
        src="./assets/menu-icon.png"
      />
      <b-sidebar
        id="sidebar-variant"
        bg-variant="secondary"
        text-variant="light"
        shadow
      >
        <div class="px-3 py-2 sideBarElementContainer">
          <img
            class="leftNavbarWrapper__logo"
            src="./assets/mylogo-white.png"
            @click="() => navBarNavigation('welcome')"
          />
          <p
            v-if="pageState !== 'welcome'"
            style="text-align: center"
            class="slogan"
          >
            YOUR SOFTWARE DEVELOPMENT TO THE NEXT LEVEL
          </p>
          <ul class="navbarListWrapper">
            <li
              :class="
                pageState === 'welcome' ? 'selectedListElement' : 'listElements'
              "
              @click="() => navBarNavigation('welcome')"
            >
              WELCOME
            </li>
            <li
              :class="
                pageState === 'about' ? 'selectedListElement' : 'listElements'
              "
              @click="() => navBarNavigation('about')"
            >
              ABOUT US
            </li>
            <li
              :class="
                pageState === 'home' ? 'selectedListElement' : 'listElements'
              "
              @click="() => navBarNavigation('home')"
            >
              WHY US
            </li>
            <li
              :class="
                pageState === 'contact' ? 'selectedListElement' : 'listElements'
              "
              @click="() => navBarNavigation('contact')"
            >
              CONTACT US
            </li>
          </ul>
        </div>
      </b-sidebar>
    </div>
    <div class="childContainer">
      <transition mode="out-in" name="routingTransition">
        <router-view @message="setMessage" />
      </transition>
    </div>

    <div
      v-if="this.posibleComp[this.posibleComp.indexOf(this.pageState) + 1]"
      class="goDownContainer"
    >
      <p class="scrollText">
        {{ this.posibleComp[this.posibleComp.indexOf(this.pageState) + 1] }}
      </p>
      <img
        @click="
          () =>
            navBarNavigation(
              this.posibleComp[this.posibleComp.indexOf(this.pageState) + 1]
            )
        "
        class="scrollDownIcon"
        src="./assets/down-icon.png"
      />
    </div>
    <div
      v-if="this.posibleComp[this.posibleComp.indexOf(this.pageState) - 1]"
      class="goUpContainer"
    >
      <img
        @click="
          () =>
            navBarNavigation(
              this.posibleComp[this.posibleComp.indexOf(this.pageState) - 1]
            )
        "
        class="scrollDownIcon"
        src="./assets/up-icon.png"
      />
      <p class="scrollText">
        {{ this.posibleComp[this.posibleComp.indexOf(this.pageState) - 1] }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pageState: null,
      posibleComp: ["welcome", "about", "home", "contact"],
    };
  },
  methods: {
    setMessage: function setMessage(message) {
      this.navBarNavigation(message);
    },
    scroll: function scroll() {
      this.currentSlide = "scrollDown";
      this.$router.push({ path: "/home" });
    },
    navBarNavigation: function navBarNavigation(path) {
      this.pageState = path;
      this.$router.push({ path: `/${path}` });
    },
  },
  created() {
    [, this.pageState] = this.$route.path.split("/");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;900&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.appWrapper {
  background-image: url("./assets/blue-back.jpg");
  background-size: cover;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  flex-direction: column;
}
.showOverflow {
  overflow-y: scroll;
}
.hideOverflow {
  overflow: hidden;
}

.sideBarButton {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
}
.sideBarElementContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.childContainer {
  height: 100vh;
  margin: 0vh 2vh;
}

.logoContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.leftNavbarWrapper {
  display: none;
}
.navbarListWrapper {
  margin-top: 6vh;
  list-style-type: none;
  padding: 0;
}
.selectedListElement {
  margin: 3vh 0;
  font-size: 3vh;
  color: rgb(34, 34, 34);
}
.listElements {
  margin: 3vh 0;
  font-size: 3vh;
  color: white;
}
.listElements:hover {
  color: rgb(34, 34, 34);
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
  position: fixed;
  bottom: 1vh;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
}
.goUpContainer {
  top: 1vh;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.scrollText {
  margin: 0;
}

.scrollDownIcon {
  height: 30px;
  width: 45px;
}
.routingTransition-enter-active,
.routingTransition-leave-active {
  transition: opacity 1s;
}
.routingTransition-enter {
  opacity: 0;
}
.routingTransition-enter-to {
  opacity: 1;
  transition-delay: 0.5s;
}
.routingTransition-leave-to {
  opacity: 0;
}
.getToKnowButton {
  display: none;
}

@media only screen and (min-width: 770px) {
  .childContainer {
    margin-left: 23vw;
    margin: none;
  }
  .sideBarButton {
    display: none;
  }

  .goDownContainer,
  .goUpContainer {
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
  .listElements {
    margin: 3vh 0;
    font-size: 2.3vh;
    color: white;
  }
  .selectedListElement {
    margin: 3vh 0;
    font-size: 2.3vh;
    color: rgb(34, 34, 34);
  }
  .leftNavbarWrapper {
    position: fixed;
    height: 100vh;
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 23%;
    display: flex;
    background-color: #758aa7;
  }

  .leftNavbarWrapper__logo {
    height: 27vh;
    margin-top: 5vh;
    color: white;
  }

  .logoAnimation {
    animation-name: logoAnimation;
    animation-duration: 2s;
    animation-delay: 0s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }
  @keyframes logoAnimation {
    0% {
      margin-top: 0vh;
    }
    100% {
      margin-top: 8vh;
    }
  }
  .cancelLogoAnimation {
    animation-name: cancelLogoAnimation;
    animation-duration: 2s;
    animation-delay: 0s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }
  @keyframes cancelLogoAnimation {
    0% {
      margin-top: 8vh;
    }
    100% {
      margin-top: 0vh;
    }
  }
  .navbarListWrapper {
    list-style-type: none;
    margin-bottom: 15vh;
    padding: 0;
    margin-left: -3vw;
  }
}
</style>

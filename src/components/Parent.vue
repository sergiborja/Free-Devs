<template>
  <div>
    <!-- <div class="leftNavbarWrapper">
      <img
        id="logo"
        class="leftNavbarWrapper__logo"
        :class="this.logoAnimation ? 'logoAnimation' : ''"
        src="../assets/mylogo-white.png"
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
    </div>-->

    <!-- <div class="componentsWindow"> -->
    <!-- <transition name="scrollDown"> -->
    <!-- <home v-if="this.pageState === 1"></home> -->
    <!-- <router-view /> -->
    <!-- </transition> -->

    <!-- <div v-if="this.posibleComp[this.pageState + 1]" class="goDownContainer">
        <p class="scrollText">{{ this.posibleComp[this.pageState + 1] }}</p>
        <img @click="scroll('down')" class="scrollDownIcon" src="../assets/down-icon.png" alt />
    </div>-->
    <!-- </div> -->
    <!-- <transition name="initialTextAnimation">
      <div v-if="this.pageState === 0" class="initalTextContainer">
        <h1 class="entryTitle">TAKE THE EASIEST AND OPTIMAL WAY</h1>
        <p id="demo" class="entryText"></p>
      </div>
    </transition>-->
  </div>
</template>

<script>
// import HomeVue from "./Home.vue";
export default {
  name: "Parent",
  components: {
    // home: HomeVue,
  },
  data() {
    return {
      pageState: null,
      logoAnimation: false,
      posibleComp: ["welcome", "why us?"],
      currentSlide: null,
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
  created() {
    this.pageState = 0;
  },

  watch: {
    // pageState() {
    //   if (this.pageState === 0) {
    //     var txt =
    //       "We offer you a cohesive team of professional developers, with experience working together in the most optimal and efficient mode.";
    //     var i = 0;
    //     setTimeout(() => {
    //       const writeNow = () => {
    //         if (i < txt.length) {
    //           if (this.pageState === 0 && this.$route.path === "/parent") {
    //             document.getElementById("demo").innerHTML += txt.charAt(i);
    //             i++;
    //           } else clearInterval(interval);
    //         }
    //       };
    //       var interval = setInterval(writeNow, 30);
    //     }, 1500);
    //   }
    // },
  },
};
</script>

<style>
@media only screen and (min-width: 770px) {
  .sideBarButton {
    display: none;
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
      margin-top: 20vh;
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
  .backgroundImage {
    background-image: url("../assets/main-background.png");
    background-size: 100% 100%;
    filter: blur(8px);
    background: rgba(0, 0, 0, 0.3);
  }

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

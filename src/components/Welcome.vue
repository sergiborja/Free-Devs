<template>
  <div class="welcomeWrapper">
    <div class="initalTextContainer">
      <h1 class="entryTitle">
        TAKE YOUR SOFTWARE DEVELOPMENT TO THE NEXT LEVEL
      </h1>
      <p id="demo" class="entryText"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  methods: {},

  created() {
    var txt =
      "We offer you a cohesive team of professional developers, with experience working together in the most optimal and efficient mode.";
    var i = 0;
    setTimeout(() => {
      const writeNow = () => {
        if (i < txt.length) {
          if (this.$route.path === "/welcome") {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
          } else clearInterval(interval);
        }
      };
      var interval = setInterval(writeNow, 30);
    }, 1500);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcomeWrapper {
  margin-top: 11vh;
}
.initalTextContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.entryText {
  color: black;
  font-size: 5.4vw;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin-top: 10vh;
  text-align: start;
}
.entryTitle {
  position: relative;
  font-weight: 900;
  color: white;
  font-size: 11vw;
  letter-spacing: 1.5px;
  transform: scale(1, 1.1);
  font-family: "Montserrat", sans-serif;
  /* -webkit-text-stroke: 0.9px black; */
  animation-name: entryTextAnimation;
  animation-duration: 0.85s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

/* .initializeAnimation {
  animation-name: entryWelcomeAnimation;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

@keyframes entryWelcomeAnimation {
  100% {
    opacity: 100%;
  }
} */

@media only screen and (min-width: 770px) {
  .initalTextContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 0vh;
    bottom: 10vh;
    margin: auto;
    left: 25vw;
  }
  .entryTitle {
    position: relative;
    margin-left: -20vw;
    font-weight: 900;
    letter-spacing: 0.5px;
    color: white;
    font-size: 8vh;
    opacity: 100%;
    transform: none;
    font-family: "Montserrat", sans-serif;
    -webkit-text-stroke: 0.9px black;
    /* animation-name: entryTextAnimation;
    animation-duration: 0.85s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out; */
  }
  .entryText {
    position: absolute;
    color: black;
    font-size: 3vh;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-align: start;
    margin-top: 0vh;
    top: 70vh;
    left: 0;
  }
}
</style>

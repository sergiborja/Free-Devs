<template>
  <div class="welcomeWrapper">
    <div class="initalTextContainer">
      <h1 class="entryTitle">
        TAKE YOUR SOFTWARE DEVELOPMENT TO THE NEXT LEVEL
      </h1>
      <p id="demo" class="entryText"></p>
    </div>
    <div
      type="button"
      @click="() => this.$emit('message', 'about')"
      class="getToKnowButton"
    >
      <ul>
        <li>
          GET TO KNOW US
          <span></span><span></span><span></span><span></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  methods: {},

  created() {
    var txt =
      "We offer you a cohesive team of professional developers, with experience working together in the most optimal and efficient way.";
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
    right: 5vw;
  }
  .entryTitle {
    position: relative;
    margin-left: -20vw;
    font-weight: 900;
    letter-spacing: 0.5px;
    color: white;
    font-size: 8.5vh;
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

  .getToKnowButton {
    display: flex;
    position: absolute;
    left: 50vw;
    bottom: 5vh;
    opacity: 0;
    animation-name: buttonAnimation;
    animation-duration: 2s;
    animation-delay: 3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }
  @keyframes buttonAnimation {
    100% {
      opacity: 1;
    }
  }
  .getToKnowButton ul {
    list-style-type: none;
    margin: 0;
    padding: 1vh;
  }

  .getToKnowButton ul li {
    --c: #758aa7;
    color: var(--c);
    font-size: 16px;
    border: 0.2em solid var(--c);
    border-radius: 0.5em;
    width: 12em;
    height: 3.2em;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 3em;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    margin: 1em;
  }

  .getToKnowButton ul li span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: var(--c);
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
  }

  .getToKnowButton ul li:hover {
    color: black;
  }

  .getToKnowButton ul li:hover span {
    transform: translateY(0) scale(2);
  }

  .getToKnowButton ul li span:nth-child(1) {
    --n: 1;
  }

  .getToKnowButton ul li span:nth-child(2) {
    --n: 2;
  }

  .getToKnowButton ul li span:nth-child(3) {
    --n: 3;
  }

  .getToKnowButton ul li span:nth-child(4) {
    --n: 4;
  }
}
</style>

<template>
  <div>
    <transition name="initialTextAnimation">
      <div class="initalTextContainer">
        <h1 class="entryTitle">TAKE THE EASIEST AND OPTIMAL WAY</h1>
        <p id="demo" class="entryText"></p>
      </div>
    </transition>
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
.initalTextContainer {
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10vh 2vh;
}
.entryText {
  color: black;
  font-size: 5.4vw;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
}
.entryTitle {
  position: relative;
  font-weight: 900;
  letter-spacing: 0.5px;
  color: white;
  font-size: 14vw;
  opacity: 0%;
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
.initialTextAnimation-leave-active {
  transition: transform 2s;
}
.initialTextAnimation-leave {
  transform: translateY(0vh);
}
.initialTextAnimation-leave-to {
  transform: translateY(-100vh);
}
</style>

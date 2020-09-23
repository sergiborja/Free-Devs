<template>
  <div class="homeWrapper">
    <div>
      <div class="containerGroup">
        <div class="domineProg"></div>
        <div class="textContainer">
          <h4 class="title">WE CAN DO ANYTHING</h4>
          <p class="description">
            We dominate all programming languages, frameworks and technologies
            you could need, both in Front and Backend.
          </p>
        </div>
      </div>
      <div class="containerGroup reverse">
        <div class="textContainer">
          <h4 class="title">WHAT MAKES THE DIFFERENCE?</h4>
          <p class="description">
            With us, your web/app (project) code will be as beautiful as your
            frontend or UI. WE LOVE CLEAN CODE.
          </p>
        </div>
        <div class="photo"></div>
      </div>
      <div class="containerGroup">
        <div class="cleaning"></div>
        <div class="textContainer">
          <h4 class="title">ADAPTABILITY AND EXPERIENCE</h4>
          <p class="description">
            Thanks to our experience, we are very capable to work with your
            older webAPP code and upgrade or modify it just the way you want it.
          </p>
        </div>
      </div>
      <div class="containerGroup reverse">
        <div class="textContainer">
          <h4 class="title">HIGH PERFORMANCE SOLVING SKILLS</h4>
          <p class="description">
            As we said before, we stand out for our efficiency, any problem that
            may arise, we will be there at the moment to solve it!
          </p>
        </div>
        <div class="photo"></div>
      </div>
      <div class="containerGroup">
        <div class="comunication"></div>
        <div class="textContainer">
          <h4 class="title">COMUNICATION AND CLEAN CODE: OUR PILLARS</h4>
          <p class="description">
            We have always given great importance to how we work as a team and
            to the cohesion and communication that must exist.
          </p>
        </div>
      </div>
      <div class="divingLine"></div>
      <div class="finalTextContainer">
        <h4 class="finalTitle">LET US SHOW YOU THAT WE ARE YOUR BEST OPTION</h4>
        <b-button class="consultButton" variant="outline-success"
          >Get free consultation now</b-button
        >
        <p class="buttonAux">We will reply immediately!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homeWrapper {
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  margin: 10vh 0;
}
.buttonAux {
  font-size: 1.5vh;
  font-weight: 600;
}

.consultButton {
  font-weight: 600;
  margin-bottom: 1vh;
}

.photo {
  height: 20vh;
  width: 100%;
  background-image: url("../assets/demo-draw.png");
  background-size: cover;
}
.comunication {
  height: 20vh;
  width: 100%;
  background-image: url("../assets/communicacio.png");
  background-size: cover;
}
.domineProg {
  height: 20vh;
  width: 70vw;
  background-image: url("../assets/domine-all-prog.png");
  background-size: cover;
}
.cleaning {
  height: 22vh;
  width: 70vw;
  background-image: url("../assets/cleaning-code.png");
  background-size: cover;
}
.containerGroup {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3vh 0;
}
.containerGroup:first-child,
.containerGroup:last-child {
  margin: 0vh 0;
}
.finalTextContainer {
  margin: 5vh 0;
  text-align: center;
}
.finalTitle {
  margin: 3vh 0;
}

.title {
  font-weight: 500;
}
.description {
  font-weight: 400;
}
.textContainer {
  justify-content: center;
  margin: 1.5vh 0vh;
}
.reverse {
  flex-direction: column-reverse;
}
.initializeAnimation {
  opacity: 0%;
  animation-name: entryHomeAnimation;
  animation-duration: 0.85s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

@keyframes entryHomeAnimation {
  100% {
    opacity: 100%;
  }
}
.divingLine {
  background-color: blue;
  width: 100%;
  height: 2px;
}
@media only screen and (min-width: 770px) {
  .textContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 35vw;
    margin: 4vh;
  }
  .containerGroup {
    display: flex;
    flex-direction: row;
    margin: 4vh 1vh;
  }
  .photo {
    height: 15vh;
    width: 25vw;
    background-image: url("../assets/demo-draw.png");
    background-size: cover;
  }
  .comunication {
    height: 20vh;
    width: 25vw;
    background-image: url("../assets/communicacio.png");
    background-size: cover;
  }
  .domineProg {
    height: 20vh;
    width: 20vw;
    background-image: url("../assets/domine-all-prog.png");
    background-size: cover;
  }
  .cleaning {
    height: 20vh;
    width: 20vw;
    background-image: url("../assets/cleaning-code.png");
    background-size: cover;
  }
}
</style>

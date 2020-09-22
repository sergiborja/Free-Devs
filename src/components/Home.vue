<template>
  <div class="homeWrapper">
    <div>
      <div class="containerGroup">
        <div class="photo">KNOWLEDGE DRAW</div>
        <div class="textContainer">
          <h4 class="title">WE CAN DO ANYTHING</h4>
          <p class="description">
            We dominate all programming languages, frameworks and technologies
            you could need, both in Front and Backend.
          </p>
        </div>
      </div>
      <div class="containerGroup">
        <div class="textContainer">
          <h4 class="title">WHAT MAKES THE DIFFERENCE?</h4>
          <p class="description">
            With us, your web/app (project) code will be as beautiful as your
            frontend or UI. WE LOVE CLEAN CODE.
          </p>
        </div>
        <div class="photo">WE LOVE CLEAN CODE DRAW</div>
      </div>
      <div class="containerGroup">
        <div class="photo">UNDERSTANDING OTHERS CODE DRAW</div>
        <div class="textContainer">
          <h4 class="title">ADAPTABILITY, FLEXIBILITY AND EXPERIENCE</h4>
          <p class="description">
            Thanks to our experience, we are very capable to work with your
            older webAPP code and upgrade or modify it just the way you want it.
          </p>
        </div>
      </div>
      <div class="containerGroup">
        <div class="textContainer">
          <h4 class="title">HIGH PERFORMANCE SOLVING SKILLS</h4>
          <p class="description">
            As we said before, we stand out for our efficiency, any problem that
            may arise, we will be there at the moment to solve it!
          </p>
        </div>
        <div class="photo">FAST DRAW</div>
      </div>
      <div class="containerGroup">
        <div class="photo">TEAM WORK DRAW</div>
        <div class="textContainer">
          <h4 class="title">COMUNICATION AND CLEAN CODE: OUR PILLARS</h4>
          <p class="description">
            We have always given great importance to how we work as a team and
            to the cohesion and communication that must exist.
          </p>
        </div>
      </div>
      <div class="containerGroup">
        <div class="textContainer">
          <h4 class="title">THE BEST IS YET TO COME</h4>
          <p class="description">
            Get a free consultation and get in touch, will show you the best
            personally.
          </p>
        </div>
        <div class="photo">CONTACT US BUTTON</div>
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
.navbarWrapper {
  width: 100vw;
  height: 10vh;
  background: darkblue;
}
.homeWrapper {
  font-family: "Montserrat", sans-serif;
  display: flex;
}
.photo {
  height: 20vh;
  width: 30vw;
  border: 1px solid black;
  background-color: orange;
}
.containerGroup {
  display: flex;
  flex-direction: column;
  margin: 4vh 0vh;
}
.textContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 35vw;
  margin: 3vh;
}
.title {
  font-weight: 600;
}
.description {
}
@media only screen and (min-width: 770px) {
  .containerGroup {
    display: flex;
    flex-direction: row;
  }
}
</style>

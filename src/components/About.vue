<template>
  <div class="aboutWrapper">
    <div class="reasonContainer">
      <h2 class="title">Our reason for being</h2>
      <p class="aboutText">
        We have found that when companies hire programmers individually, it
        costs them extra time and labor that can be saved.
      </p>
      <p class="aboutText">
        Many times, programmers are not compatible with the rest of their team
        both personally and professionally, which makes the company's technology
        projects less effective and lose quality.
      </p>
      <p class="aboutText">
        We want you to save yourself all these complications and take the most
        optimal and simple path; a cohesive team, 100% compatible and
        complemented when programming. A very easy to manage team that instead
        of giving you work, will take it away from you!
      </p>
      <p class="aboutText">
        With the guarantee of professional code, superior effectiveness and,
        consequently, your projects more optimized and in less time than you are
        used to.
      </p>
      <p class="aboutText">
        We are not normal workers, we love what we do like the most and we
        guarantee that we are your best option.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aboutWrapper {
  margin-left: 10vh;
  margin-right: 10vh;
}

.reasonContainer {
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
}
.title {
  text-align: center;
  font-weight: 900;
  font-size: 4.5vh;
}
.aboutText {
  font-weight: 500;
  margin-top: 2vh;
  letter-spacing: 0.5px;
  font-size: 2.5vh;
}

.inputs {
  width: 80vw;
  margin-bottom: 1vh;
}

@media only screen and (min-width: 770px) {
  .inputs {
    width: 500px;
  }
  .titleContainer {
    margin-top: 20vh;
  }
  .title {
    font-weight: 900;
    font-size: 5vh;
  }
  .formContainer {
    display: flex;
    flex-direction: column;
    margin-top: 6vh;
  }
}
</style>

<template>
  <div class="wrapper">
    <!-- <h1 class="welcome">Welcome to</h1> -->
    <img class="logo" src="../assets/mylogo-white.png" alt />
    <p class="welcome">WELCOME, WHY ARE YOU HERE?</p>
    <div class="squaresContainer">
      <div @click="clicked()" class="chooseSquare companyImage welcome">
        <p class="textOnHover">I'm a consolidated company</p>
      </div>
      <div class="chooseSquare entrepreneurImage welcome">
        <p class="textOnHover">I'm an entrepeneur or young start-up</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  props: {
    msg: String,
  },
  methods: {
    clicked: function () {
      this.$router.push({ path: "/parent" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  background-color: rgb(31, 30, 30);
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.welcome {
  color: white;
  animation-name: welcomeAnimation;
  animation-duration: 0.5s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  opacity: 0%;
}

@keyframes welcomeAnimation {
  100% {
    opacity: 100%;
  }
}
.logo {
  margin-top: 25%;
  animation-name: logoAnimation;
  animation-duration: 0.5s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}

@keyframes logoAnimation {
  0% {
  }
  100% {
    margin-top: -40px;
  }
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.textOnHover {
  display: none;
  background-color: white;
}
.chooseSquare {
  background: skyblue;
  width: 40vh;
  height: 40vw;
  border: 2px solid black;
  margin-top: 5vh;
  transition: transform 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chooseSquare:hover {
  transform: scale(1.1);
}
.chooseSquare:hover .textOnHover {
  display: inline;
}
.squaresContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.entrepreneurImage {
  background-image: url("../assets/entrepreneur.jpg");
  background-size: cover;
  animation-name: entrepAnimation;
  animation-duration: 0.5s;
  animation-delay: 2.6s;
  animation-fill-mode: forwards;
  opacity: 0%;
}

@keyframes entrepAnimation {
  100% {
    opacity: 100%;
  }
}

.companyImage {
  background-image: url("../assets/company.jpg");
  background-size: cover;
  animation-name: companyAnimation;
  animation-duration: 0.5s;
  animation-delay: 2.3s;
  animation-fill-mode: forwards;
  opacity: 0%;
}

@keyframes companyAnimation {
  100% {
    opacity: 100%;
  }
}
@media only screen and (min-width: 770px) {
  .chooseSquare {
    height: 30vw;
    width: 40vw;
    border: 2px solid black;
    margin: 5vw;
    margin-top: 5vh;
    transition: transform 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (min-width: 950px) {
  .chooseSquare {
    height: 40vh;
    width: 40vh;
    border: 2px solid black;
    margin: 5vw;
    margin-top: 5vh;
    transition: transform 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .squaresContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>

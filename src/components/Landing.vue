<template>
  <div class="wrapper">
    <h1 style="color: white">Welcome to</h1>
    <!-- <h1 style="color: white">to</h1> -->
    <img class="logo" src="../assets/mylogo-white.png" alt />
    <p style="color: white;">WHY ARE YOU HERE?</p>
    <div class="squaresContainer">
      <div @click="clicked()" type="button" class="chooseSquare companyImage">
        <p class="textOnHover">I'm a consolidated company</p>
      </div>
      <div type="button" class="chooseSquare entrepreneurImage">
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
  background-image: url("../assets/main-background.png");
  background-size: 100% 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.logo {
  margin-top: -40px;
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
}
.chooseSquare {
  background: skyblue;
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
.chooseSquare:hover {
  transform: scale(1.1);
  filter: opacity(30%);
}
.chooseSquare:hover .textOnHover {
  display: inline;
}
.squaresContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.entrepreneurImage {
  background-image: url("../assets/entrepreneur.jpg");
  background-size: cover;
}

.companyImage {
  background-image: url("../assets/company.jpg");
  background-size: cover;
}
</style>

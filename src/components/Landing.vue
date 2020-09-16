<template>
  <div>
    <h1>Welcome to FreeDevs</h1>
    <div class="squaresContainer">
      <div type="button" class="chooseSquare">
        <p>I'm a consolidated company</p>
      </div>
      <div @click="clicked()" type="button" class="chooseSquare">
        <p>I'm an entrepeneur or young start-up</p>
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
    clicked: function() {
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
}
.squaresContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>

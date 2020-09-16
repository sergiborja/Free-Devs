<template>
  <div>
    <span>
      <h1>Welcome to FreeDevs</h1>
    </span>
    <div>
      <h3>Why are we your way to achieve success?</h3>
      <p>-Optimized and clean code guarantee.</p>
      <p>
        -We have extensive knowledge in different technologies, so we can choose
        the optimal one for your project.
      </p>
      <p>
        - We are going to make your dream project come true exactly as you are
        imagining it and also in less time than you are imagining.
      </p>
      <p>
        - We have an extense experience working with project like yours.
      </p>
      <p>
        - We have always given great importance to how we work as a team and to
        the cohesion and communication that must exist. Thanks to this, we have
        great efficiency and the job always comes out well done.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbarWrapper {
  width: 100vw;
  height: 10vh;
  background: darkblue;
}
</style>

<template>
  <div class="contactWrapper">
    <div class="titleContainer">
      <h2 class="title">Get in touch with us</h2>
      <p class="titleComment">
        Contact us via the contact form asking your question. We are here to
        answer your question within hours.
      </p>
    </div>
    <div class="formContainer">
      <b-form-input
        class="inputs"
        v-model="text"
        placeholder="Name"
      ></b-form-input>
      <b-form-input
        class="inputs"
        v-model="text"
        placeholder="Email"
      ></b-form-input>
      <b-form-input
        class="inputs"
        v-model="text"
        placeholder="Company"
      ></b-form-input>
      <b-textarea
        class="inputs"
        v-model="text"
        placeholder="Your message (optional)"
        rows="5"
      ></b-textarea>
      <b-button variant="success">Send message</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contactWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.titleContainer {
  margin-top: 10vh;
  text-align: center;
}
.title {
  font-weight: 900;
  font-size: 4.5vh;
}
.titleComment {
  font-weight: 500;
  margin-top: 2vh;
  letter-spacing: 0.5px;
}
.formContainer {
  display: flex;
  flex-direction: column;
  margin-top: 6vh;
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

<template>
  <div class="contactWrapper">
    <div class="titleContainer">
      <h2 class="title">Get in touch with us</h2>
      <p class="titleComment">
        Feel free to send any consultant, we will be delighted to reply
        immediately!
      </p>
    </div>
    <div class="formContainer">
      <b-form-input
        v-model="name"
        class="inputs"
        placeholder="Name"
      ></b-form-input>
      <b-form-input
        v-model="email"
        class="inputs"
        placeholder="Email"
      ></b-form-input>
      <b-form-input
        v-model="companyName"
        class="inputs"
        placeholder="Company name"
      ></b-form-input>
      <b-textarea
        v-model="message"
        class="inputs"
        placeholder="Your message"
        rows="5"
      ></b-textarea>
      <b-button variant="success" @click="() => sendEmail()"
        >Send message</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      companyName: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      const requestOptions = {
        method: "POST",
        headers: {
          "Access-Control-Allow-Headers":
            "Authorization, Content-Type, On-behalf-Of, x-sg-elas-acl",
          "Content-Type": "application/json",
          "X-RapidAPI-Key":
            "b9c96f59bdmsh32efb3b072dd3cep1e0e4djsn20ce6f740d17",
          "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
          "Access-Control-Allow-Origin": "https://sendgrid.api-docs.io",
          "X-No-CORS-Reason":
            "https://sendgrid.com/docs/Classroom/Basics/API/cors.html",
          "Access-Control-Allow-Methods": "POST",
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email: "sergiborja05@gmail.com",
                },
              ],
              subject: `New posible client! Company: ${this.companyName}, as: ${this.name} `,
            },
          ],
          from: {
            email: `${this.email}`,
          },
          content: [
            {
              type: "text/plain",
              value: `${this.message}`,
            },
          ],
        }),
      };
      try {
        fetch(
          "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
          requestOptions
        )
          .then(() => console.log("response"))
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    },
  },
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

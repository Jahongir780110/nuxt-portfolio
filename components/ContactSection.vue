<template>
  <div id="contact" class="contact">
    <div class="text-end">
      <h1 class="heading text-white text-center">
        CONTACT
      </h1>
      <div class="line"></div>
      <div class="contact-title text-center">
        Have a question or want to work together?
      </div>
      <div
        v-if="errorMessage"
        class="error-message text-center text-danger mt-3"
      >
        {{ errorMessage }}
      </div>
      <div v-if="success" class="success-text text-center text-success mt-3">
        Your message was sent successfully!!!
      </div>
      <form
        data-aos="zoom-out"
        data-aos-duration="500"
        class="form"
        @submit.prevent="submit()"
      >
        <input
          type="text"
          v-model.trim="name"
          class="name"
          placeholder="Name"
        />
        <input
          type="email"
          v-model.trim="email"
          class="email"
          placeholder="Enter email"
          required
        />
        <textarea
          cols="30"
          v-model.trim="message"
          rows="6"
          placeholder="Your Message"
        ></textarea>
        <button class="button" type="submit">SEND</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ContactSection",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      errorMessage: "",
      success: false
    };
  },
  methods: {
    submit() {
      const emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.errorMessage = "";
      if (this.name.length === 0) {
        this.errorMessage = "Please enter your name!";
        return;
      } else if (this.email.length === 0 || !emailValidator.test(this.email)) {
        this.errorMessage = "Please enter your email!";
        return;
      } else if (this.message.length === 0) {
        this.errorMessage = "Please enter message!";
        return;
      }
      axios
        .post(
          "https://portfolio-2d310-default-rtdb.firebaseio.com/messages.json",
          {
            name: this.name,
            email: this.email,
            message: this.message
          }
        )
        .then(res => {
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 30000);
          this.errorMessage = "";
          this.name = "";
          this.email = "";
          this.message = "";
        })
        .catch(err => {
          this.errorMessage = err.message;
          this.success = false;
        });
    }
  }
};
</script>

<style scoped>
.contact {
  clip-path: polygon(50% 10%, 100% 0, 100% 100%, 0 100%, 0 0);
  padding: 100px 0;
  background-color: #252934;
  overflow-x: hidden;
}
.line {
  width: 100px;
  height: 4px;
  background-color: white;
  margin: 0 auto;
}
.contact-title {
  font-weight: 500;
  color: #04c2c9;
  margin-top: 30px;
}
.form {
  width: 400px;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 30px;
}
.form input {
  width: 100%;
  border: none;
  outline: none;
  border-radius: 1px;
  background-color: #1e242c;
  color: white;
  padding: 10px 15px;
  margin-bottom: 3px;
}
.form textarea {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  border-radius: 1px;
  background-color: #1e242c;
  color: white;
  padding: 10px 15px;
}
.form .button {
  background: transparent;
  color: #fff;
  font-size: 18px;
  margin: 5px 0 0 0;
  outline: 0;
  padding: 8px 26px;
  border: 2px solid white;
  transition: 0.3s;
}
.form .button:hover {
  background: #04c2c9;
  border-color: #04c2c9;
}
.success-text {
  font-weight: 500;
}
</style>

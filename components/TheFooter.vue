<template>
  <div class="footer text-white">
    <span class="elevator" @click="scrollTop">
      <i class="fas fa-angle-double-up"></i>
    </span>
    <div class="social-media">
      <a
        data-aos="flip-left"
        href="https://www.linkedin.cn/in/jahongir-ismoilov-9039a5203/"
        target="blank"
        class="social-btn"
      >
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a
        data-aos="flip-left"
        data-aos-delay="100"
        href="https://www.facebook.com/jahongir.ismoilov.988373/"
        target="blank"
        class="social-btn"
      >
        <i class="fab fa-facebook-f"></i>
      </a>
      <a
        data-aos="flip-left"
        data-aos-delay="200"
        href="https://github.com/Jahongir780110"
        target="blank"
        class="social-btn"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        data-aos="flip-left"
        data-aos-delay="300"
        href="https://t.me/liv780110"
        target="blank"
        class="social-btn"
      >
        <i class="fab fa-telegram-plane"></i>
      </a>
    </div>
    <div class="copyright mt-4">
      Jakhongir Ismoilov <span class="highlight">&copy;2021</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  methods: {
    scrollTop() {
      document.getElementById("home").scrollIntoView(true);
    }
  }
};
</script>

<style>
.footer {
  background: #1b242f;
  padding: 70px 0 50px 0;
  position: relative;
  text-align: center;
}
.social-media {
  display: flex;
  justify-content: center;
}
.social-btn {
  background: #262f38;
  cursor: pointer;
  font-size: 24px;
  width: 55px;
  height: 55px;
  margin: 0 15px;
  overflow: hidden;
  position: relative;
  transition: 0.3s;
}
.social-btn:hover {
  background: #04c2c9;
  box-shadow: 0 0 0 3px rgb(4 94 201 / 10%);
  transform: scale(0.9);
}
.social-btn:hover i {
  animation-name: animate;
  animation-duration: 0.3s;
  animation-timing-function: ease;
}
.social-btn i {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.copyright {
  color: #8f9aa7;
  font-size: 16px;
  margin-top: 35px;
  opacity: 0.6;
}
.copyright .highlight {
  color: #e31b6d;
}
.elevator {
  background: #e31b6d;
  cursor: pointer;
  font-size: 32px;
  width: 47px;
  height: 50px;
  position: absolute;
  right: 0;
  top: -25px;
  left: 0;
  line-height: 24px;
  margin: 0 auto;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.elevator:hover {
  background: #fb1f79;
}
@keyframes animate {
  0% {
    top: 50%;
  }
  49% {
    top: 120%;
  }
  50% {
    top: 0%;
  }
  100% {
    top: 50%;
  }
}
</style>

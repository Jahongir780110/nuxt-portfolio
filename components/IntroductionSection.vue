<template>
  <div class="wrapper" id="home">
    <div id="particle-canvas"></div>
    <div class="content">
      <span class="text">
        Hi, I'm <span class="name">Jakhongir Ismoilov</span>. <br />
        I'm a Junior JavaScript Developer
      </span>
      <br />
      <button
        class="button mt-4 d-flex align-items-baseline justify-content-center mx-auto"
        @click="scrollTo('about')"
      >
        About Myself
        <i class="material-icons arrow ms-3">
          arrow_forward
        </i>
      </button>
    </div>
  </div>
</template>

<script>
import particleFunction from "../assets/js/particle";
export default {
  name: "IntroductionSection",
  mounted() {
    particleFunction();
  },
  methods: {
    scrollTo(section) {
      document.getElementById(section).scrollIntoView(true);
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
}
#particle-canvas {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content {
  width: max-content;
  max-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  text-align: center;
  padding: 0 16px;
}
.text {
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 20px;
  pointer-events: none;
  color: white;
}
.name {
  color: #e31b6d;
}
.button {
  padding: 4px 20px;
  border: 2px solid #fff;
  box-sizing: inherit;
  cursor: pointer;
  display: inline-block;
  font-size: 24px;
  transition: all 0.5s;
  background-color: transparent;
  color: white;
}
@media (max-width: 670px) {
  .text {
    font-size: 30px;
    line-height: 36px;
  }
}
.button:hover {
  background-color: #04c2c9;
  border-color: #04c2c9;
}
.button:hover .arrow {
  transform: rotate(90deg);
}
.arrow {
  font-size: 20px;
  transition: all 0.2s ease-in-out;
}
</style>

<template>
  <div class="wrapper">
    <introduction-section></introduction-section>
    <the-nav></the-nav>
    <about-section></about-section>
    <projects-section></projects-section>
    <blog-section></blog-section>
    <contact-section></contact-section>
    <the-footer></the-footer>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "MainPage",
  mounted() {
    AOS.init({
      once: false
    });
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  /* height: 100%; */
}
</style>

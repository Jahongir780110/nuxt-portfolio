<template>
  <nav class="navbar navbar-expand-sm py-2" ref="nav">
    <button
      class="navbar-toggler ms-auto"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbar"
    >
      <span class="nav-line"></span>
      <span class="material-icons text-white menu">
        menu
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav">
        <li class="nav-item mt-sm-0 mt-3">
          <span
            @click="scrollTo('home')"
            class="nav-link"
            :class="{ active: activeLink === 'home' }"
            >HOME</span
          >
        </li>
        <li class="nav-item">
          <span
            @click="scrollTo('about')"
            class="nav-link"
            :class="{ active: activeLink === 'about' }"
            >ABOUT</span
          >
        </li>
        <li class="nav-item">
          <span
            @click="scrollTo('portfolio')"
            class="nav-link"
            :class="{ active: activeLink === 'portfolio' }"
            >PORTFOLIO</span
          >
        </li>
        <li class="nav-item">
          <span
            @click="scrollTo('blog')"
            class="nav-link"
            :class="{ active: activeLink === 'blog' }"
            >BLOG</span
          >
        </li>
        <li class="nav-item">
          <span
            @click="scrollTo('contact')"
            class="nav-link"
            :class="{ active: activeLink === 'contact' }"
            >CONTACT</span
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNav",
  data() {
    return {
      activeLink: ""
    };
  },
  methods: {
    scrollTo(section) {
      document.getElementById(section).scrollIntoView(true);
    }
  },
  mounted() {
    let position = this.$refs.nav.offsetTop;
    let aboutPosition = document.getElementById("about").offsetTop;
    let portfolioPosition = document.getElementById("portfolio").offsetTop;
    let blogPosition = document.getElementById("blog").offsetTop;
    let contactPosition = document.getElementById("contact").offsetTop;
    window.addEventListener("resize", () => {
      position = this.$refs.nav.offsetTop;
      aboutPosition = document.getElementById("about").offsetTop;
      portfolioPosition = document.getElementById("portfolio").offsetTop;
      blogPosition = document.getElementById("blog").offsetTop;
      contactPosition = document.getElementById("contact").offsetTop;
    });
    window.addEventListener("scroll", () => {
      const curPosition = window.scrollY;
      if (curPosition + 20 >= position) {
        this.$refs.nav.classList.add("nav-fixed");
      } else {
        this.$refs.nav.classList.remove("nav-fixed");
      }
      if (curPosition + 200 <= aboutPosition) {
        this.activeLink = "home";
      } else if (curPosition + 200 <= portfolioPosition) {
        this.activeLink = "about";
      } else if (curPosition + 200 <= blogPosition) {
        this.activeLink = "portfolio";
      } else if (curPosition + 200 <= contactPosition) {
        this.activeLink = "blog";
      } else {
        this.activeLink = "contact";
      }
    });
  }
};
</script>

<style>
.navbar {
  width: 100%;
  background-color: #1b242f;
  border-bottom: 3px solid #04c2c9;
  padding: 0 150px;
  position: sticky;
  top: 0;
  z-index: 9999;
}
@media (max-width: 900px) {
  .navbar {
    padding: 0 20px;
  }
}
@media (max-width: 576px) {
  .navbar {
    border-bottom: none;
  }
}
.nav-link {
  color: white;
  transition: 0.2s;
  margin: 0 16px;
  cursor: pointer;
}
.nav-link:hover {
  color: #e31b6d;
}
.nav-link.active {
  color: #e31b6d;
}
.navbar-toggler,
.navbar-toggler:focus {
  box-shadow: none;
}
.menu {
  font-size: 28px;
}
.nav-line {
  position: absolute;
  top: 55px;
  left: 0;
  display: none;
  width: 100%;
  height: 3px;
  background-color: #04c2c9;
}
@media (max-width: 576px) {
  .nav-line {
    display: inline-block;
  }
}
.nav-fixed {
  animation-name: nav;
  animation-duration: 0.3s;
}
@keyframes nav {
  0% {
    top: -50px;
  }
  100% {
    top: 0px;
  }
}
</style>

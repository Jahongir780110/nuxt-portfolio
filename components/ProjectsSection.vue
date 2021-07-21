<template>
  <div id="portfolio" class="projects-wrapper">
    <div class="container">
      <div class="row text-center">
        <div class="heading">
          <span
            data-aos="slide-right"
            data-aos-duration="500"
            class="d-inline-block w-100"
            >PROJECTS</span
          >
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="400"
          data-aos-delay="400"
          class="line"
        ></div>

        <div class="projects-sort">
          <div class="projects">
            <div class="row">
              <the-project
                v-for="project in projects"
                :key="project.title"
                :project="project"
              ></the-project>
            </div>
          </div>
          <div class="btns mt-5">
            <span
              class="button"
              :class="{ active: activeClass === 'all' }"
              @click="filter('.all')"
              >ALL</span
            >
            <span
              class="button"
              :class="{ active: activeClass === 'vue' }"
              @click="filter('.vue')"
              >VUE</span
            >
            <span
              class="button"
              :class="{ active: activeClass === 'node' }"
              @click="filter('.node')"
              >NODE-JS</span
            >
            <span
              class="button"
              :class="{ active: activeClass === 'react' }"
              @click="filter('.react')"
              >REACT</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
export default {
  name: "ProjectsSection",
  data() {
    return {
      activeClass: "all",
      projects: [
        {
          src: require("/static/burger.jpg"),
          title: "Burger Builder App",
          langs: ["React"],
          link: "https://react-my-burger-d1f4a.web.app/",
          classes: "react all",
          delay: 0
        },
        {
          src: require("~/static/coach-app.jpg"),
          title: "Find a Coach App",
          langs: ["Vue", "Node.js"],
          link: "https://vue-coach-app-33b2c.web.app/",
          classes: "vue node all",
          delay: 100
        },
        {
          src: require("~/static/uz-academy.png"),
          title: "Uz Academy Website Design",
          langs: ["HTML", "CSS", "BOOTSTRAP"],
          link: "https://uz-academy.netlify.app/",
          classes: "all",
          delay: 200
        },
        {
          src: require("~/static/real-chat-app.jpg"),
          title: "Real Chat App",
          langs: ["Vue", "Node.js"],
          link: "https://full-stack-chat-18fda.web.app/",
          classes: "vue node all",
          delay: 0
        },
        {
          src: require("~/static/library-website.jpg"),
          title: "Libary Website Design",
          langs: ["HTML", "CSS", "BOOTSTRAP"],
          link: "https://library-website.netlify.app/",
          classes: "all",
          delay: 100
        },
        {
          src: require("~/static/e-shop-template.png"),
          title: "E-SHOP Website Design",
          langs: ["HTML", "CSS", "BOOTSTRAP"],
          link: "https://internet-shop.netlify.app/",
          classes: "all",
          delay: 200
        },
        {
          src: require("~/static/jalyuzi-comfort.jpg"),
          title: "Jalousie Website",
          langs: ["HTML", "CSS", "BOOTSTRAP"],
          link: "https://jalyuzi-comfort.netlify.app/",
          classes: "all",
          delay: 0
        },
        {
          src: require("~/static/chat-app.jpg"),
          title: "Chat App",
          langs: ["React", "Node.js"],
          link: "https://vue-chat-app-7befc.web.app/auth",
          classes: "react node all",
          delay: 100
        },
        {
          src: require("~/static/job-search.png"),
          title: "Job Search Website Design",
          langs: ["HTML", "CSS", "BOOTSTRAP"],
          link: "https://search-work.netlify.app/",
          classes: "all",
          delay: 200
        }
      ]
    };
  },
  methods: {
    filter(value) {
      this.activeClass = value.substr(1);
      if (value === ".all") {
        $(".project").show(300);
      } else {
        $(".project")
          .not(value)
          .hide(300);
        $(".project")
          .filter(value)
          .show(300);
      }
      setTimeout(() => {
        AOS.init({
          once: false
        });
      }, 1000);
    }
  }
};
</script>

<style scoped>
.projects-wrapper {
  padding: 100px 0;
  background-color: #f5f5f5;
  overflow-x: hidden;
}
.heading {
  font-size: 40px;
  font-weight: 500;
  color: #444649;
  position: relative;
}
.line {
  width: 80px;
  height: 4px;
  background-color: #444649;
  margin: 20px auto 0;
}
.projects-sort {
  margin-top: 80px;
}
.button {
  color: #616161;
  margin: 0 12px;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 20px;
  font-size: 20px;
}
@media (max-width: 510px) {
  .button {
    margin: 0 4px;
    padding: 4px 12px;
    font-size: 16px;
  }
}
.button.active {
  color: white;
  background-color: #e31b6d;
}
</style>

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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
          src: require("~/static/real-chat-app.jpg"),
          title: "Real Chat App",
          langs: ["Vue", "Node.js"],
          link: "https://full-stack-chat-18fda.web.app/",
          classes: "vue node all",
          delay: 0
        }
      ]
    };
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
</style>

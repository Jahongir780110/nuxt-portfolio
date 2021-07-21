<template>
  <div id="about" class="about">
    <div class="container">
      <div class="row heading">
        <h1 data-aos="fade-right">ABOUT</h1>
        <div data-aos="fade-right" data-aos-delay="200" class="line"></div>
      </div>
      <div class="row skills">
        <the-skill
          v-for="skill in skills"
          :key="skill.title"
          :skill="skill"
        ></the-skill>
      </div>
      <div class="row me align-items-center">
        <div
          data-aos="slide-right"
          data-aos-duration="500"
          class="col-lg-6 col-11 text-center mx-auto"
        >
          <div class="hex-photo"></div>
          <div class="photo-title">Who's this guy?</div>
          <div class="photo-desc">
            I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have
            serious passion for UI effects, animations and creating intuitive,
            dynamic user experiences. <br />
            <span class="special" @click="scrollTo('contact')"
              >Let's make something special</span
            >
          </div>
        </div>
        <div
          data-aos="slide-left"
          data-aos-duration="500"
          class="col-lg-6 col-11 mt-lg-0 mt-5 mx-auto"
        >
          <skill-bar
            v-for="bar in bars"
            :key="bar.name"
            :name="bar.name"
            :width="bar.width"
          ></skill-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      skills: [
        {
          icon: { name: "speed", isOutlined: false },
          title: "Fast",
          desc: "Fast load times and lag free interaction, my highest priority",
          delay: 0
        },
        {
          icon: { name: "devices", isOutlined: false },
          title: "Responsive",
          desc: "My layouts will work on any device, big or small.",
          delay: 200
        },
        {
          icon: { name: "lightbulb", isOutlined: true },
          title: "Intuitive",
          desc: "Strong preference for easy to use, intuitive UX/UI.",
          mt: true,
          delay: 400
        },
        {
          icon: { name: "published_with_changes", isOutlined: true },
          title: "Dynamic",
          desc:
            "Websites don't have to be static, I love making pages come to life.",
          mt: true,
          delay: 600
        }
      ],
      bars: [
        { name: "CSS", width: "90%" },
        { name: "HTML", width: "90%" },
        { name: "JavaScript", width: "80%" },
        { name: "Vue", width: "90%" },
        { name: "Node.js", width: "70%" },
        { name: "Express.js", width: "80%" },
        { name: "MongoDB", width: "65%" }
      ]
    };
  },
  methods: {
    scrollTo(section) {
      document.getElementById(section).scrollIntoView(true);
    }
  }
};
</script>

<style scoped>
.about {
  padding: 100px 0;
  overflow-x: hidden;
}
.heading {
  color: #444649;
  text-align: center;
  position: relative;
}
.line {
  width: 80px;
  height: 4px;
  background-color: #444649;
  margin: 20px auto 0;
}
.skills {
  margin-top: 80px;
}
.me {
  margin-top: 80px;
}
.hex-photo {
  height: 220px;
  width: 260px;
  position: relative;
  margin: auto;
}
.hex-photo::after {
  content: "";
  width: 100%;
  border-top: 110px solid #04c2c9;
  border-left: 55px solid transparent;
  border-right: 55px solid transparent;
  position: absolute;
  top: 110px;
  left: 0px;
}
.hex-photo::before {
  width: 100%;
  content: "";
  position: absolute;
  left: 0;
  border-bottom: 110px solid #04c2c9;
  border-left: 55px solid transparent;
  border-right: 55px solid transparent;
}
.me .photo-title {
  margin-top: 16px;
  font-size: 24px;
  font-weight: 500;
  color: #616161;
}
.me .photo-desc {
  line-height: 22px;
  font-size: 18px;
  width: 75%;
  margin: 16px auto 0;
  color: #616161;
}
.photo-desc .special {
  color: #009ada;
  cursor: pointer;
}
</style>

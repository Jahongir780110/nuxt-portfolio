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
          class="col-lg-5 col-11 text-center mx-auto"
        >
          <div class="hex-photo">
            <img src="~/static/profile_pic.png" alt="Profile picture" />
          </div>
          <div class="photo-title">Who's this guy?</div>
          <div class="photo-desc">
            Junior Frontend Developer with 1+ year of working experience in
            Frontend Development. Skilled mostly in JavaScript and Vue.
            Energetic and eager to learn new skills. Clean coding is my
            priority.
          </div>
        </div>
        <div
          data-aos="slide-left"
          data-aos-duration="500"
          class="col-lg-7 col-11 mt-lg-0 mt-5 mx-auto"
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
          desc:
            "Fast load times and lag free interaction are my highest priority.",
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
          desc: "Strong preference for easy to use, intuitive UI/UX.",
          mt: true,
          delay: 400
        },
        {
          icon: { name: "code", isOutlined: true },
          title: "Clean Code",
          desc:
            "Clean coding might seem slow at first, but belive me it will save your time a lot in the end.",
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
</style>

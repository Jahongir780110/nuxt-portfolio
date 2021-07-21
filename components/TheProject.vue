<template>
  <div
    data-aos="fade-up"
    :data-aos-delay="project.delay"
    data-aos-duration="500"
    class="col-lg-4 col-sm-6 col-11 mx-auto project px-0"
    :class="project.classes"
  >
    <div class="more-info">
      <span class="details">
        <span class="title"
          ><nobr>{{ project.title }}</nobr></span
        >
        <br />
        <span class="langs">{{ langs(project.langs) }}</span>
      </span>
      <a :href="project.link" target="blank" class="button">VIEW SITE</a>
    </div>
    <img class="project-img" :src="project.src" :alt="project.title" />
  </div>
</template>

<script>
export default {
  name: "TheProject",
  props: ["project"],
  methods: {
    langs(langs) {
      const updatedLangs = langs.join(" / ");
      return updatedLangs;
    }
  }
};
</script>

<style scoped>
.project {
  height: 300px;
  position: relative;
}
.project:hover .more-info {
  opacity: 1;
}
.project:hover .details {
  opacity: 1;
  top: 25%;
}
.project:hover .button {
  opacity: 1;
  bottom: 50px;
}
@media (max-width: 1200px) {
  .project {
    height: 270px;
  }
}
@media (max-width: 768px) {
  .project {
    height: 240px;
  }
}
.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.more-info {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  opacity: 0;
  transition: 0.3s;
  overflow: hidden;
}
.details {
  position: absolute;
  top: -25%;
  opacity: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.3s;
}
.title {
  font-size: 24px;
  font-weight: 500;
  line-height: 18px;
}
.langs {
  font-size: 18px;
  color: #e42c77;
}
.button {
  position: absolute;
  bottom: -50px;
  opacity: 0;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  border: 2px solid #e31b6d;
  padding: 4px 20px;
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}
.button:hover {
  background-color: #e31b6d;
  color: white;
}
</style>

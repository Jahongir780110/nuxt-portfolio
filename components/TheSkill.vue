<template>
  <div
    class="col-lg-3 col-6 text-center"
    :class="skill.mt ? 'mt-sm-0 mt-5' : null"
  >
    <div
      data-aos="flip-right"
      data-aos-duration="500"
      :data-aos-delay="skill.delay"
      class="hexagon"
    >
      <i
        class="icon"
        :class="
          skill.icon.isOutlined ? 'material-icons-outlined' : 'material-icons'
        "
      >
        {{ skill.icon.name }}
      </i>
    </div>
    <br />
    <div data-aos="fade" data-aos-duration="500" :data-aos-delay="skill.delay">
      <span class="title">{{ skill.title }}</span> <br />
      <span class="desc">{{ skill.desc }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSkill",
  props: ["skill"]
};
</script>

<style scoped>
.hexagon {
  height: 120px;
  width: 140px;
  position: relative;
  margin: auto;
}
.hexagon::after {
  content: "";
  width: 100%;
  border-top: 60px solid #04c2c9;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  position: absolute;
  top: 60px;
  left: 0px;
}
.hexagon::before {
  width: 100%;
  content: "";
  position: absolute;
  left: 0;
  border-bottom: 60px solid #04c2c9;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
}
.hexagon .icon {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 64px;
  z-index: 100;
}

.title {
  font-size: 28px;
  font-weight: 500;
}
.desc {
  color: #616161;
}
</style>

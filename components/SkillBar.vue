<template>
  <div class="tech">
    <span class="level-name">{{ name }}</span>
    <span :style="{ width: width }" class="level-bar"></span>
    <span class="level-number">{{ width }}</span>
  </div>
</template>

<script>
export default {
  name: "SkillBar",
  props: ["name", "width"]
};
</script>

<style scoped>
.tech {
  width: 100%;
  height: 35px;
  background-color: #eee;
  margin-top: 12px;
  display: flex;
  align-items: center;
  position: relative;
}
.level-bar {
  height: 100%;
  background-color: #00a1a7;
}
.level-name {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 100%;
  color: white;
  background-color: #04c2c9;
  font-weight: 500;
}
.level-number {
  color: #666;
  font-style: italic;
  position: absolute;
  height: 100%;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 540px) {
  .tech {
    height: 30px;
  }
  .level-number {
    display: none;
  }
}
</style>

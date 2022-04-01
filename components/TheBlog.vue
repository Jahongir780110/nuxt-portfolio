<template>
  <div
    data-aos="fade-right"
    :data-aos-delay="blog.delay"
    class="col-lg-3 col-sm-6 col-11 mx-auto blog mt-2"
  >
    <nuxt-link :to="blog.link">
      <div class="img">
        <img :src="blog.img" :alt="blog.title" />
      </div>
      <div class="title">{{ blog.title }}</div>
      <div class="date">{{ blog.date }}</div>
      <div class="line"></div>
      <div class="desc">
        {{ blog.desc }}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "TheBlog.vue",
  props: ["blog"]
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.blog {
  cursor: pointer;
  transition: 0.3s;
}
.blog:hover .title {
  color: #04c2c9;
}
.blog:hover .desc {
  color: black;
}
.img {
  width: 100%;
  height: 200px;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.title {
  font-size: 22px;
  font-weight: bold;
  color: #616161;
  margin-top: 10px;
  transition: 0.3s;
}
.date {
  font-size: 12px;
  margin-top: 4px;
  color: #616161;
}
.line {
  width: 100px;
  height: 3px;
  background-color: #04c2c9;
  margin-top: 18px;
}
.desc {
  color: #616161;
  margin-top: 18px;
}
</style>

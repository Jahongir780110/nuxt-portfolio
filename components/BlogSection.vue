<template>
  <div id="blog" class="blog-section">
    <div class="heading" data-aos="fade-right">BLOG</div>
    <div class="heading-line" data-aos="fade-right" data-aos-delay="300"></div>
    <div class="container blogs">
      <div class="row">
        <the-blog
          v-for="blog in blogs"
          :key="blog.title"
          :blog="blog"
        ></the-blog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogSection",
  data() {
    return {
      blogs: [
        {
          img: require("~/static/blog-1.jpg"),
          title: "Vue 2 or Vue 3? Which one should I learn?",
          date: "July 19, 2021",
          desc:
            "If you’re starting your journey with Vue.js, you may be wondering what version to learn. On one hand, Vue 2 has been out for years and is already being used by companies...",
          link: "/blog/vue2-or-vue3",
          delay: 0
        },
        {
          img: require("~/static/blog-2.jpg"),
          title: "Vue 3: The Future of Front End",
          date: "July 21, 2021",
          desc:
            "Vue 3 is a milestone in the world of modern web development, bringing JavaScript developers an evolved set of tools to build more powerful and performant apps than ever before...",
          link: "/blog/vue-future",
          delay: 200
        },
        {
          img: require("~/static/blog-3.jpg"),
          title: "Vue 3 - What's New?",
          date: "July 22, 2021",
          desc:
            "Vue.js 3 was released and it’s bringing a bunch of new and exciting features whilst being mostly backward compatible...",
          link: "/blog/vue3-whats-new",
          delay: 400
        }
      ]
    };
  }
};
</script>

<style scoped>
.blog-section {
  padding: 100px 0;
}
@media (max-width: 576px) {
  .blog-section {
    padding: 50px 0;
  }
}
.blogs {
  margin-top: 90px;
  color: #444649;
}
.heading {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}
.heading-line {
  width: 70px;
  height: 4px;
  background-color: #444649;
  margin: 10px auto 0;
}
</style>

<template>
  <div class="blog-wrapper">
    <nav class="navbar py-2" ref="nav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link to="/"><span class="nav-link">HOME</span></nuxt-link>
        </li>
      </ul>
    </nav>
    <Nuxt />
    <the-footer></the-footer>
  </div>
</template>

<style>
.blog-wrapper a {
  text-decoration: none;
}
.blog-wrapper .navbar {
  background-color: #1b242f;
  border-bottom: 3px solid #04c2c9;
  padding: 0 150px;
  position: sticky;
  top: 0;
  z-index: 9999;
}
@media (max-width: 576px) {
  .blog-wrapper .navbar {
    padding: 0 30px;
  }
}
.blog-wrapper .nav-link {
  color: white;
  transition: 0.2s;
  margin: 0 16px;
  cursor: pointer;
}
.blog-wrapper .nav-link:hover,
.blog-wrapper .nav-link.active {
  color: #e31b6d;
}
.blog-wrapper .heading {
  font-weight: bold;
}
.blog-wrapper .date {
  color: #6c757d;
  font-style: italic;
}
.blog-wrapper .content {
  font-size: 18px;
  line-height: 1.7;
}
.blog-wrapper .sub-heading {
  font-size: 2.1rem;
  font-weight: 700;
}
.blog-wrapper .elevator {
  display: none;
}
.blog-wrapper .footer {
  padding: 40px 0px !important;
}
.blog-wrapper .link {
  text-decoration: none;
  color: #39b982;
}
.blog-wrapper .code-example {
  background-color: #171717;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: 500;
  color: #c5c8c6;
}
.code-example .bluish {
  color: #96cbfe;
}
.code-example .yellowish {
  color: #ffffb6;
}
.code-example .greenish {
  color: #a8ff60;
}
</style>

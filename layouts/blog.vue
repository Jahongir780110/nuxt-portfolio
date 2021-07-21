<template>
  <div class="blog-wrapper">
    <nav class="navbar py-2" ref="nav">
      <ul class="navbar-nav">
        <li class="nav-item mt-sm-0 mt-3">
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
</style>

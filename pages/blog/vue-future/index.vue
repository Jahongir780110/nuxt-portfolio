<template>
  <div class="container py-5">
    <h1 class="heading">Vue 3: The Future of Front End</h1>
    <div class="date">Posted on July 21, 2021 by Jakhongir Ismoilov</div>
    <div class="content mt-3">
      Vue 3 is a milestone in the world of modern web development, bringing
      JavaScript developers an evolved set of tools to build more powerful and
      performant apps than ever before. Whether it’s a small side project or a
      large enterprise-level application, Vue 3 is designed to be intuitive and
      enjoyable to use. Let’s take a look at some of the most exciting new
      features you can take advantage of as a Vue 3 developer.
    </div>
    <img
      src="~/static/blog-2.jpg"
      alt="blog 1 image"
      class="d-block mx-auto mt-2 rounded w-100"
    />
    <div class="sub-heading mt-3">
      Performance enhancements
    </div>
    <div class="content mt-2">
      Vue 2 is quite small, at around 20kb gzipped at runtime. And Vue 3 is just
      as compact, while bringing new features and improvements. Vue 3 also
      allows us to only import only the pieces of the library that we need,
      which means whatever we don’t use will be removed for us via treeshaking.
      As a result, Vue 3 can be reduced even further to as small as 12kb
      gzipped.
      <br />
      <br />
      Since the Virtual DOM has been rewritten from the ground up with a new
      diffing algorithm that uses compiler-based optimizations, this results in
      faster rendering times.
    </div>
    <div class="sub-heading mt-3">
      Composition API
    </div>
    <div class="content mt-2">
      One of the biggest features coming in Vue 3 is the
      <a
        href="https://v3.vuejs.org/guide/composition-api-introduction.html"
        target="blank"
        class="link"
        >Composition API</a
      >. With Vue 2, sometimes our large components ended up with features
      dispersed amongst the component’s options, which could make them difficult
      to manage and maintain. The Composition API provides a new alternative
      syntax that gives developers a better way to manage features and
      functionality across components, allowing you to smoothly scale your
      applications.
    </div>
    <div class="sub-heading mt-3">
      TypeScript
    </div>
    <div class="content mt-2">
      Vue 3’s source code is written entirely in TypeScript. As a result, this
      means enhanced support for TypeScript users, but just like in Vue 2, using
      TypeScript is optional and not required.
    </div>
    <div class="sub-heading mt-3">
      Multi-Root Components
    </div>
    <div class="content mt-2">
      Most front end frameworks require you to wrap a component’s template code
      in a single element because sibling elements aren’t allowed. But with Vue
      3, we can now use multi-root components.
    </div>
    <div class="sub-heading mt-3">
      Teleport
    </div>
    <div class="content mt-2">
      Sometimes a piece of a component’s template belongs there logically, but
      it would be preferable to render it somewhere else. Vue 3 gives us the
      <a
        href="https://v3.vuejs.org/guide/teleport.html"
        target="blank"
        class="link"
        >Teleport</a
      >
      component, which allows us to specify template HTML that we can send to
      another part of the DOM. <br />
      <div class="mt-2">
        This is useful for things like modals, which may need to be placed
        outside of the body tag or outside the Vue app.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "blog"
};
</script>

<template>
  <div class="container blog py-5">
    <h1 class="heading">Vue 2 or Vue 3? Which one should I learn?</h1>
    <div class="date">Posted on July 19, 2021 by Jakhongir Ismoilov</div>
    <div class="content mt-3">
      If you’re starting your journey with Vue.js, you may be wondering what
      version to learn. On one hand, Vue 2 has been out for years and is already
      being used by companies all over the world. On the other hand, the
      recently released Vue 3 brings us a faster, more capable library at our
      fingertips. This article aims to help clarify which version of Vue you
      should start learning now. So if you’re wondering whether you should take
      our Vue 2 or Vue 3 courses, keep reading.
    </div>
    <img
      src="~/static/blog-1.jpg"
      alt="blog 1 image"
      class="d-block mx-auto mt-2 rounded w-100"
    />
    <div class="sub-heading mt-2">
      Not a simple answer
    </div>
    <div class="content mt-2">
      The reason we’re taking the time to write this post is because the answer
      is: it depends. It depends on whether you’re on a team that is using Vue 2
      with no near-term plans for migrating to Vue 3. It depends on your
      timeline and whether your app requires dependencies that aren’t yet
      compatible with Vue 3. In situations like these, it might not make sense
      for you to learn the latest Vue 3 syntax and APIs if you won’t be putting
      them into practice in your daily work.
      <br />
      <br />
      But if you’re in nearly any other situation, our recommendation is to
      start learning Vue 3. You’ll be future-proofing your skills to stay
      relevant with this cutting-edge technology. You’ll have access to all of
      the latest and greatest features of an entirely rewritten, more powerful
      and performant JavaScript framework. There’s a lot you can learn and
      create with this new version, and we’ve been having fun recreating our old
      Vue 2 courses and upgrading them to teach the new Vue 3 version.
    </div>
    <div class="sub-heading mt-2">
      But… they’re very similar
    </div>
    <div class="content mt-2">
      Having said all that, it’s important to understand that there aren’t many
      differences between the essential syntax of Vue 2 and Vue 3. Vue 3 is
      rewritten under the hood to operate more smoothly and powerfully, but
      using Vue 2 and Vue 3 is a very similar (and in many cases identical)
      process. So whichever version you start with, you’ll quite easily be able
      to go from one to the other and back again, if necessary.
    </div>
  </div>
</template>

<script>
export default {
  layout: "blog"
};
</script>

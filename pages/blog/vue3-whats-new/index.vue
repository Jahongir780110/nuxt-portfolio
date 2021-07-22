<template>
  <div class="container blog py-5">
    <h1 class="heading">Vue 3 - What's New?</h1>
    <div class="date">Posted on July 22, 2021 by Jakhongir Ismoilov</div>
    <div class="content mt-3">
      Vue.js 3 was released and it’s bringing a bunch of new and exciting
      features whilst being mostly backward compatible.
      <br />
      You can learn about all changes in the official
      <a
        href="https://v3.vuejs.org/guide/migration/introduction.html"
        target="blank"
        class="link"
        >migration guide</a
      >.
      <div class="mt-3">
        There are <strong>a couple of main changes/ features</strong> which you
        should be aware of:
      </div>
      <ul class="mt-2">
        <li>Vue instances/ apps are created differently</li>
        <li><strong>data</strong> must now alwasy be a method</li>
        <li>
          <strong>Vue.component(...)</strong> etc. becomes
          <strong>app.component(...)</strong>
        </li>
        <li><strong>v-enter</strong> becomes <strong>v-enter-from</strong></li>
        <li>The Vue Router setup changed</li>
        <li>Same for Vuex</li>
        <li><strong>New Features:</strong> Fragments & Teleport</li>
        <li>
          <strong>Optional New Feature:</strong> You can use the new
          <strong>Composition API</strong>
        </li>
      </ul>
    </div>
    <img
      src="~/static/blog-3.jpg"
      alt="blog 3 image"
      class="d-block mx-auto mt-2 rounded w-100"
    />
    <div class="sub-heading mt-3">
      Creating Vue Apps
    </div>
    <div class="content mt-2">
      With Vue 2, you created Vue instances like this:
      <div class="code-example my-2">
        <div>
          <span class="bluish">new</span> <span class="yellowish">Vue</span>({
        </div>
        <div class="ps-3">el: <span class="greenish">'#app'</span>,</div>
        <div>});</div>
      </div>
      When using Vue 3, this syntax will no longer work!
      <br />
      Instead, you would write this:
      <div class="code-example my-2">
        Vue.<span class="span yellowish">createApp</span>({}).<span
          class="yellowish"
          >mount</span
        >(<span class="greenish">'#app'</span>)
      </div>
    </div>
    <div class="content mt-2">
      Creating Vue instances via <strong>new Vue()</strong> was replaced by
      calling the new <strong>createApp()</strong> methodd which is exposed on
      the Vue object. <br />
      Connecting the Vue instance to the DOM is no longer done via
      <strong>el</strong> inside your options object, instead you use
      <strong>mount('app')</strong> to tell Vue which part of your HTML code
      should be controlled by this Vue instance/ app.
      <br />
      That is almost all though - except for the <strong>data</strong> change,
      everything works as you know it. You can still add
      <strong>methods</strong>, <strong>computed</strong> etc. to your Vue
      instance config object.
    </div>
    <div class="sub-heading mt-3">
      Data has to be a Method
    </div>
    <div class="content mt-2">
      In Vue 2, you could use the <strong>data</strong> in the instance options
      object to set the data that can be used in the template of your Vue
      instance. <br />
      For example, your code could’ve looked like this:
      <div class="code-example mb-2">
        <div>
          <span class="bluish">new</span> <span class="yellowish">Vue</span>({
        </div>
        <div class="ps-3">el: <span class="greenish">'#app'</span>,</div>
        <div class="ps-3">data: {</div>
        <div class="ps-4">
          message: <span class="greenish">'Hello from Vue 2!'</span>,
        </div>
        <div class="ps-3">},</div>
        <div>});</div>
      </div>
      With <strong>Vue 3</strong>, you <strong>must</strong> write this code
      instead:
      <div class="code-example my-2">
        <div>Vue.<span class="yellowish">createApp</span>({</div>
        <div class="ps-3"><span class="yellowish">data</span>() {</div>

        <div class="ps-4"><span class="bluish">return</span> {</div>
        <div class="ps-5">
          message: <span class="greenish">'Hello from Vue 2!'</span>,
        </div>
        <div class="ps-4">
          };
        </div>
        <div class="ps-3">
          },
        </div>
        <div>
          }).<span class="yellowish">mount</span>(<span class="greenish"
            >'#app'</span
          >);
        </div>
      </div>
      <strong>data</strong> must now always be a function/ method! <br />
      In Vue 2, that was only required when defining <strong>data</strong> in
      components. In root Vue instances, you were allowed to pass a simple
      object as a value to <strong>data</strong>. <br />
      With Vue 3, than changed and you now always need a
      <strong>data</strong> method. <br />
      Besides that, <strong>data</strong> works exactly as you know it though.
      You can output data with interpolation, bind it with
      <strong>v-bind</strong> and manipulate it as needed.
    </div>
    <div class="sub-heading mt-3">
      Registering Components & More
    </div>
    <div class="content mt-2">
      Components, directives and (third-party) plugins are now registered
      differently. <br />
      Instead of
      <div class="code-example my-2">
        Vue.<span class="yellowish">use</span>(<span class="greenish"
          >'my-component'</span
        >, { ... });
      </div>
      it's now
      <div class="code-example my-2">
        app.<span class="yellowish">use</span>(<span class="greenish"
          >'my-component'</span
        >, { ... });
      </div>
      where <strong>app</strong> is our Vue app created with
      <strong>createApp()</strong>.
    </div>
    <div class="sub-heading mt-3">Optional: The Composition API</div>
    <div class="content mt-2">
      The biggest feature (besides a lot of behind-the-scenes changes of
      course!) is the brand-new <strong>Composition API</strong><br />
      The new <strong>Composition API</strong> is 100% optional! You don't have
      to use it, you can stick to the old <strong>Options API</strong> which ou
      already know from Vue 2.
    </div>
    <div class="sub-heading mt-3">
      What Else?
    </div>
    <div class="content mt-2">
      These are the biggest changes you should be aware of. <br />
      The already mentioned
      <a
        href="https://v3.vuejs.org/guide/migration/introduction.html"
        target="blank"
        class="link"
        >official migration guide</a
      >
      lists all changes, so you might want to go through that as well of course.
    </div>
  </div>
</template>

<script>
export default {
  layout: "blog"
};
</script>

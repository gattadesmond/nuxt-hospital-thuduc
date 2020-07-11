<template>
  <div>
    <the-header />
    <Nuxt keep-alive />
    <the-footer />
  </div>
</template>

<style>
</style>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
// import { SVGInjector } from "@tanem/svg-injector";

export default {
  components: {
    TheHeader,
    TheFooter
  },
  mounted() {
    // SVGInjector(document.querySelectorAll("[data-inject-svg]"), {
    //   afterEach(err, svg) {
    //     if (typeof jarallax === "function") {
    //       svg.dispatchEvent(
    //         new CustomEvent("injected.mr.SVGInjector", { bubbles: true })
    //       );
    //     }
    //   }
    // });
  }
};
</script>
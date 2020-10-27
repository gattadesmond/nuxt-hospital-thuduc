<template>
  <section
    class="section section-space pt-4 section-bg section-home"
    style="background-image: url(img/func/h2_slider2.jpg)"
  >
    <div class="container container-index">
      <div class="row">
        <div class="col-12">
          <div
            class="main__banner mb-5"
            style="background-image: url(img/func/banner-hospital.jpg)"
          >
            <h1 class="text-primary">
              Thông tin sức khỏe của bạn
            </h1>

            <p class="lead">
              Mang trải nghiệm dịch vụ y tế hiện đại đến ngay trong nhà bạn
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container container-index">
      <!-- <div class="row">
        <div class="col-12 col-lg-8 mb-4">
          <div class="banner-header text-left">
            <h1 class="text-primary">Các dịch vụ của chúng tôi</h1>
            <p class="lead text-black-50">
              Mang trải nghiệm dịch vụ y tế hiện đại đến ngay trong nhà bạn.
            </p>
          </div>
        </div>
      </div> -->

      <div class="row justify-content-center">
        <div class="col-12 col-lg-9">
          <div class="row justify-content-center">
            <div
              class="col-12 col-md-4 mb-5"
              v-for="item in menus"
              :key="item.id"
            >
              <div class="function__item h-100">
                <nuxt-link
                  v-bind:to="item.url"
                  class="link-absolute"
                ></nuxt-link>
                <div class="function__image">
                  <div
                    class="embed-responsive embed-responsive-21by9 overflow-hidden"
                  >
                    <img
                      v-bind:src="item.avatar"
                      class="embed-responsive-img img-cover"
                      loading="lazy"
                      alt
                    />
                  </div>
                </div>

                <div class="function__body">
                  <div class="function__icon">
                    <img
                      v-bind:src="item.icon"
                      class="svg-icon fill-current"
                      data-inject-svg
                      alt
                    />
                  </div>
                  <div class="function__title">{{item.name}}</div>
                  <div class="function__desc">
                   {{item.sapo}}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="col-12 col-lg-3">
          <Quangcao />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SVGInjector } from "@tanem/svg-injector";
import Quangcao from "@/components/blocks/Quangcao";
export default {
  auth: true,
  components: {
    Quangcao,
  },
  mounted() {
    SVGInjector(document.querySelectorAll("[data-inject-svg]"), {
      afterEach(err, svg) {
        if (typeof jarallax === "function") {
          svg.dispatchEvent(
            new CustomEvent("injected.mr.SVGInjector", { bubbles: true })
          );
        }
      },
    });
  },
  computed: {
    menus() {
      return this.$store.state.menu.list;
    },
  },
  head() {
    return {
      title: "Bệnh Viện Đa Khoa Khu Vực Thủ Đức",
    };
  },
};
</script>

<style lang="scss">
.section-home {
  // min-height: calc(100vh - 100px);
}
</style>

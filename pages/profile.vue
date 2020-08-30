<template>
  <div class="bg-white">
    <section class="section section-space s-heading s-heading-dark">
      <div class="container s-heading-content">
        <div class="row align-items-center s-heading-height">
          <div class="col-12 col-lg-8 mb-4">
            <nav aria-label="breadcrumb ">
              <ol class="breadcrumb soju-breadcrumb soju-breadcrumb-white">
                <li class="breadcrumb-item">
                  <nuxt-link to="/">Trang chủ</nuxt-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Đóng viện phí</li>
              </ol>
            </nav>
            <div class="banner-header text-left">
              <h1 class="text-white">Đóng viện phí</h1>
              <!-- <p class="lead text-white">Xem và tải về toa thuốc</p> -->
            </div>
          </div>
        </div>
      </div>

      <div class="s-heading-bg w-100" style="background-image: url(img/bv/bg-heading.jpg)"></div>
    </section>

    <section class="section section-space bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
          
          </div>

          <div class="col-md-4">
           
           
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import PersonalInfo from "@/components/blocks/PersonalInfo";


export default {
  auth: true,
  components: {},
  methods: {},
  data() {
    return {
     
    };
  },
  head() {
    return {
      title: "Thông tin cá nhân",
    };
  },
};
</script>


<style lang="scss" scoped>
</style>

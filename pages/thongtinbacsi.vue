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
                <li class="breadcrumb-item active" aria-current="page">Bác sĩ</li>
              </ol>
            </nav>
            <div class="banner-header text-left">
              <h1 class="text-white">Danh sách Bác sĩ</h1>
              <p class="lead text-white">Chúng tôi có 234 Bác Sĩ</p>
            </div>
          </div>
        </div>
      </div>

      <div class="s-heading-bg w-100" style="background-image: url(img/bv/bg-heading.jpg)"></div>
    </section>

    <section class="section section-space pt-0 section-bacsi">
      <div class="container">
        <div class="row justify-content-center">

          <template v-if="$fetchState.pending && !doctors.length">
            <content-placeholders v-for="p in 8" :key="p" rounded class="col-3 mb-5">
              <content-placeholders-img />
              <content-placeholders-text :lines="3" />
            </content-placeholders>
          </template>

          <template v-else-if="$fetchState.error">
            <inline-error-block :error="$fetchState.error" />
          </template>

          <template v-else>
            <ArticleDoctor
              v-for="(doctor, i) in doctors"
              :key="`${doctor.id}abc`"
              :doctor="doctor"
              v-observe-visibility="
                  i === doctors.length - 1 ? lazyLoadArticles : false
                "
            />
          </template>

          <template v-if="$fetchState.pending && doctors.length">
            <content-placeholders v-for="p in 8" :key="p" rounded class="col-3 mb-5">
              <content-placeholders-img />
              <content-placeholders-text :lines="3" />
            </content-placeholders>
          </template>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
//API THONG TIN BAC SI
// https://api.jsonbin.io/b/5efe2af50bab551d2b6ace37

import ArticleDoctor from "@/components/blocks/ArticleDoctor";

export default {
  auth: false,
  components: {
    ArticleDoctor
  },
  async fetch() {
    const doctors = await fetch(
      `http://myhealthdemo.benhvienkhuvucthuduc.vn/api/Doctors/GetDoctors?pageNumber=${this.currentPage}&pageSize=12`
      // ,{
      //   headers: {
      //     "secret-key":
      //       "$2b$10$OAM34eETVHwS6ZDQSNGlce6NeO7o.yOdMuHVNiH3Z9qK2ESAGoSC2"
      //   }
      // }
    ).then(res => res.json());

    // console.log(doctors.doctor);

    this.doctors = this.doctors.concat(doctors.results);
  },
  data() {
    return {
      currentPage: 1,
      doctors: []
    };
  },
  methods: {
    lazyLoadArticles(isVisible) {
      if (isVisible) {
        if (this.currentPage < 10) {
          this.currentPage++;
          this.$fetch();
        }
      }
    }
  },
  head() {
    return {
      title: "Thông tin bác sĩ"
    };
  }
};
</script>


<style lang="scss" scoped>
.section-home {
  min-height: calc(100vh - 60px);
}
</style>

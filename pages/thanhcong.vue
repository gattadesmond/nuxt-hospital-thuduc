<template>
  <section
    class="section section-space section-bg section-home"
    style="background-image: url(img/background-doctor.jpg)"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 mb-4">
          <div class="content success-page-cont">
            <div class="card success-card">
              <div class="card-body px-4 px-lg-5">
                <div class="success-cont">
                  <i class="fas fa-check"></i>
                  <h3> {{this.$route.params.message ? this.$route.params.message : "Thành công"}} </h3>
                  <p>
                    Câu hỏi của bạn đã được gửi cho Bác sĩ
                    <strong>{{this.$route.params.doctorId}}</strong>
                    <br />vào
                    <strong>{{ new Date().toLocaleString() }} , chúng tôi sẽ gửi phản hồi lại cho bạn trong vòng 48h, Cám ơn</strong>
                  </p>
                  <nuxt-link  to="/" class="btn btn-primary view-inv-btn">Quay lại Trang chủ</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//API THONG TIN BAC SI
// https://api.jsonbin.io/b/5efe2af50bab551d2b6ace37



export default {
  auth: true,
  components: {
   
  },

  data() {
    return {
      currentPage: 1,
      doctors: [],
      loading: true,
    };
  },

  methods: {
    // async getDoctors() {
    //   const data = await this.$axios.$get(
    //     `Doctors/GetDoctors?pageNumber=${this.currentPage}&pageSize=12`
    //   );
    //   this.doctors = this.doctors.concat(data.results);
    //   this.loading = false;
    // },

  },
  mounted: function () {
    // this.getDoctors();
  },
  head() {
    return {
      title: "Thành công",
    };
  },
};
</script>


<style lang="scss" scoped>
.section-home {
  min-height: calc(100vh - 60px);
}
</style>

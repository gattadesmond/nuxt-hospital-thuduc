<template>
  <section
    class="section section-space section-bg section-home"
    style="background-image: url(img/background-doctor.jpg)"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 mb-4">
          <div class="content success-page-cont justify-content-center">
            <div class="card success-card">
              <div class="card-body px-4 px-lg-5">
                <template v-if="this.$route.query.errorCode == 0">
                  <div class="success-cont">
                    <i class="fas fa-check"></i>
                    <h3>
                      {{ this.$route.query.localMessage }}
                    </h3>
                    <p>
                      Bạn đã thanh toán thành công
                      <strong
                        >{{
                          this.$route.query.amount | formatPrice
                        }}
                        VNĐ</strong
                      >
                      <br />vào thời gian
                      <strong
                        >{{ this.$route.query.responseTime | formatDate2 }}
                      </strong>
                      từ ví <strong>MoMo</strong>.
                    </p>
                    <p>
                      {{ this.$route.query.orderInfo }}
                    </p>
                    <p>Rất cảm ơn bạn đã sử dụng dịch vụ của Bệnh viện.</p>
                    <nuxt-link to="/" class="btn btn-primary view-inv-btn"
                      >Quay lại Trang chủ</nuxt-link
                    >
                  </div>
                </template>

                <template v-else>
                  <div class="success-cont">
                    <i
                      class="fas fa-exclamation-triangle bg-warning border-0"
                    ></i>
                    <h3>
                      {{ this.$route.query.localMessage }}
                    </h3>
                    <p>
                      Thanh toán không thành công
                      <strong
                        >{{
                          this.$route.query.amount | formatPrice
                        }}
                        VNĐ</strong
                      >
                      <br />vào thời gian
                      <strong
                        >{{ this.$route.query.responseTime | formatDate2 }}
                      </strong>
                      từ ví <strong>MoMo</strong>.
                    </p>
                       <p>
                      {{ this.$route.query.orderInfo }}
                    </p>
                    <p>Bạn vui lòng thanh toán lại dịch vụ, cám ơn bạn.</p>
                    <nuxt-link to="/" class="btn btn-primary view-inv-btn"
                      >Quay lại Trang chủ</nuxt-link
                    >
                  </div>
                </template>
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

// http://myhealthdemo2.benhvienkhuvucthuduc.vn/thanhcong/?partnerCode=MOMO2NGI20201019&accessKey=W1EyDf49pvMlONEp&requestId=dd08b43f-e297-4701-f838-08d87506d06a&amount=300000&orderId=dd08b43f-e297-4701-f838-08d87506d06a&orderInfo=&orderType=momo_wallet&transId=2331410194&message=Success&localMessage=Th%C3%A0nh%20c%C3%B4ng&responseTime=2020-10-20%2021%3A46%3A13&errorCode=0&payType=qr&extraData=&signature=81526e843892448fcbb186e7dd3171a1a044a3c5aa40de09327fbc6955735c40

// http://localhost:3000/thanhcong/?partnerCode=MOMO2NGI20201019&accessKey=W1EyDf49pvMlONEp&requestId=dd08b43f-e297-4701-f838-08d87506d06a&amount=300000&orderId=dd08b43f-e297-4701-f838-08d87506d06a&orderInfo=Yeucauketquaxetnghiem&orderType=momo_wallet&transId=2331410194&message=Success&localMessage=Th%C3%A0nh%20c%C3%B4ng&responseTime=2020-10-20%2021%3A46%3A13&errorCode=0&payType=qr&extraData=&signature=81526e843892448fcbb186e7dd3171a1a044a3c5aa40de09327fbc6955735c40
import moment from "moment";

export default {
  auth: false,
  components: {},

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
    testFunction() {
      console.log(this.$route);
    },
  },
  mounted: function () {
    // this.getDoctors();
    this.testFunction();
  },
  head() {
    return {
      title: "Thành công",
    };
  },
};
</script>


<style lang="scss" scoped>
</style>

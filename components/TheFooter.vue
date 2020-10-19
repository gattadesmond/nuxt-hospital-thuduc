<template>
  <footer class="footer">
    <!-- Footer Top -->
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div
            class="page-footer-logo col-lg-3 col-md-12 col-12 align-self-center"
          >
            <nuxt-link to="/" class="page-footer-logo-img">
              <img
                class="img-fluid"
                src="http://www.benhvienkhuvucthuduc.vn/Content/assets/img/logo-white.png"
                width="200"
                alt=""
            /></nuxt-link>
          </div>

          <!-- Thông tin liên hệ -->
          <div class="col-lg-4 col-md-6 col-12">
            <div class="page-footer-title">
              <h4 class="text-white">Thông tin liên hệ</h4>
              <div class="section__title-icon page-footer__icon"></div>
            </div>

            <div class="page-footer-items">
              <!-- địa chỉ -->
              <div class="page-footer-item">
                <div class="page-footer-item-icon">
                  <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                </div>
                <div class="page-footer-item-content">
                  <b>Địa chỉ :</b>
                  <span>
                    64 Lê Văn Chí, Khu phố 1, P. Linh Trung, Quận Thủ Đức,
                    TP.HCM
                  </span>
                </div>
              </div>

              <!-- email -->
              <div class="page-footer-item">
                <div class="page-footer-item-icon">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div class="page-footer-item-content">
                  <b>Email :</b> <span>bv.dkkvthuduc@tphcm.gov.vn</span>
                </div>
              </div>

              <!-- fax -->
              <div class="page-footer-item">
                <div class="page-footer-item-icon">
                  <i class="fa fa-fax" aria-hidden="true"></i>
                </div>
                <div class="page-footer-item-content">
                  <b>Fax :</b> <span>(028) 3722 2522</span>
                </div>
              </div>

              <!-- điện thoại -->
              <div class="page-footer-item">
                <div class="page-footer-item-icon">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div class="page-footer-item-content">
                  <b>Điện thoại :</b> <span>(028) 3722 3556</span>
                </div>
              </div>

              <!-- điện thoại đường dây nóng -->
              <div class="page-footer-item">
                <div class="page-footer-item-icon">
                  <i class="fas fa-phone-volume" aria-hidden="true"></i>
                </div>
                <div class="page-footer-item-content">
                  <b class="hotline__title">Điện thoại đường dây nóng</b>
                  <br /><span class="hotline__number">096 614 1010</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Kết nối với chúng tôi -->
          <div class="col-lg-4 col-md-6 col-12">
            <div class="page-footer-title">
              <h4 class="text-white">Kết nối với chúng tôi</h4>
              <div class="section__title-icon page-footer__icon"></div>
            </div>
            <div class="page-footer-connect-items">
              <div class="page-footer-connect-item">
                <a
                  href="https://www.facebook.com/bvdkkhuvucthuduc"
                  class="page-footer-connect-item-icon"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
              <div class="page-footer-connect-item">
                <a
                  href="https://www.youtube.com/channel/UCJ66AiGPsuem4dQZvmfhogA"
                  class="page-footer-connect-item-icon"
                >
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
              <!-- <div class="page-footer-connect-item">
                          <a href="#" class="page-footer-connect-item-icon">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </div> -->
            </div>

            <div class="page-footer-title mt-3">
              <h4 class="text-white">Đường dẫn hữu ích</h4>
              <div class="section__title-icon page-footer__icon"></div>
            </div>
            <div class="page-footer__benerfit">
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
              <a href="/tim-bac-si/">Tìm bác sĩ</a>
            </div>
            <!-- <div class="page-footer__benerfit">
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      <a href="#">Đặt lịch hẹn Khám bệnh</a>
                    </div> -->
            <div class="page-footer__benerfit">
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
              <nuxt-link to="/tuvansuckhoe">Tư vấn sức khỏe</nuxt-link>
            </div>
            <div class="page-footer__benerfit">
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
              <nuxt-link to="/ketquacanlamsang">Kết quả cận lâm sàng</nuxt-link>
            </div>

            <div class="page-footer__benerfit">
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
              <nuxt-link to="/tracuulichsukhambenh"
                >Tra cứu lịch sử khám bệnh</nuxt-link
              >
            </div>

            <div class="page-footer__benerfit">
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
              <nuxt-link to="/dangkykhambenh">Đặt lịch khám Bác sĩ</nuxt-link>
            </div>

            <div class="page-footer__benerfit">
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
              <nuxt-link to="/dongvienphi">Đóng tiền viện phí</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Footer Top -->

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <!-- Copyright -->
        <div class="copyright">
          <div class="copyright-text">
            <p class="mb-0">
              Copyright ©2019 - Bản quyền thuộc về BỆNH VIỆN ĐA KHOA KHU VỰC THỦ
              ĐỨC
            </p>
          </div>
        </div>
        <!-- /Copyright -->
      </div>
    </div>
    <!-- /Footer Bottom -->
  </footer>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>

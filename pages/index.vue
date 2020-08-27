<template>
  <section
    class="section section-space section-bg section-home"
    style="background-image: url(img/background-doctor.jpg)"
  >
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8 mb-4">
          <div class="banner-header text-left">
            <h1 class="text-primary">Các dịch vụ của chúng tôi</h1>
            <p
              class="lead text-black-50"
            >Mang trải nghiệm thăm khám đa khoa hiện đại đến ngay trong ngôi nhà bạn.</p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-6 col-md-4 mb-5">
          <div class="function__item h-100">
            <nuxt-link to="/hoibacsi" class="link-absolute"></nuxt-link>
            <div class="function__image">
              <div class="embed-responsive embed-responsive-21by9 overflow-hidden">
                <!-- <img
                  src="http://benhvienkhuvucthuduc.vn/Content/assets/img/healthcare/NoiKhoa.jpg"
                  class="embed-responsive-img img-cover"
                  alt
                />-->
                <img src="img/func/BacSiTuVan.jpg" class="embed-responsive-img img-cover" alt />
              </div>
            </div>

            <div class="function__body">
              <div class="function__icon">
                <img
                  src="/img/svg/009-doctor.svg"
                  class="svg-icon fill-current"
                  data-inject-svg
                  alt
                />
              </div>
              <div class="function__title">Tư vấn sức khỏe </div>
              <div class="function__desc">Hãy cho chúng tôi biết bạn đang gặp khó khăn gì về tình trang sức khỏe của bạn </div>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-4 mb-5">
          <div class="function__item h-100">
            <nuxt-link to="/kqxetnghiem" class="link-absolute"></nuxt-link>
            <div class="function__image">
              <div class="embed-responsive embed-responsive-21by9 overflow-hidden">
                <img src="img/func/XemCanLamSang.jpg" class="embed-responsive-img img-cover" alt />
              </div>
            </div>

            <div class="function__body">
              <div class="function__icon">
                <img
                  src="/img/svg/027-laboratory.svg"
                  class="svg-icon fill-current"
                  data-inject-svg
                  alt
                />
              </div>
              <div class="function__title">Xem kết quả xét nghiệm</div>
              <div class="function__desc">Chúng tôi sẽ trả lời bạn trong 24h</div>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-4 mb-5">
          <div class="function__item h-100">
            <nuxt-link to="/xemtoathuoc" class="link-absolute"></nuxt-link>
            <div class="function__image">
              <div class="embed-responsive embed-responsive-21by9 overflow-hidden">
                <img src="img/func/XemToaThuoc.jpg" class="embed-responsive-img img-cover" alt />
              </div>
            </div>

            <div class="function__body">
              <div class="function__icon">
                <img
                  src="/img/svg/017-clipboard.svg"
                  class="svg-icon fill-current"
                  data-inject-svg
                  alt
                />
              </div>
              <div class="function__title">Xem toa thuốc</div>
              <div class="function__desc">Chúng tôi sẽ trả lời bạn trong 24h</div>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-4 mb-5">
          <div class="function__item h-100">
            <nuxt-link to="/datlichkham" class="link-absolute"></nuxt-link>
            <div class="function__image">
              <div class="embed-responsive embed-responsive-21by9 overflow-hidden">
                <img src="img/func/DatLichKham.jpg" class="embed-responsive-img img-cover" alt />
              </div>
            </div>

            <div class="function__body">
              <div class="function__icon">
                <img
                  src="/img/svg/037-quarantine.svg"
                  class="svg-icon fill-current"
                  data-inject-svg
                  alt
                />
              </div>
              <div class="function__title">Đặt lịch khám bác sĩ</div>
              <div class="function__desc">Chúng tôi sẽ trả lời bạn trong 24h</div>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-4 mb-5">
          <div class="function__item h-100">
            <nuxt-link to="/dongvienphi" class="link-absolute"></nuxt-link>
            <div class="function__image">
              <div class="embed-responsive embed-responsive-21by9 overflow-hidden">
                <img src="img/func/ThanhToanOnline.jpg" class="embed-responsive-img img-cover" alt />
              </div>
            </div>

            <div class="function__body">
              <div class="function__icon">
                <img src="/img/svg/039-bill.svg" class="svg-icon fill-current" data-inject-svg alt />
              </div>
              <div class="function__title">Đóng tiền viện phí</div>
              <div class="function__desc">Chúng tôi sẽ trả lời bạn trong 24h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SVGInjector } from "@tanem/svg-injector";

export default {
  auth: true,
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
};
</script>

<style lang="scss" scoped>
.section-home {
  min-height: calc(100vh - 60px);
}
</style>

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
            <h1 class="text-primary">Thông tin sức khỏe của bạn</h1>

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
            <div class="col-12 col-md-4 mb-5">
              <div class="function__item h-100">
                <nuxt-link to="/tuvansuckhoe" class="link-absolute"></nuxt-link>
                <div class="function__image">
                  <div
                    class="embed-responsive embed-responsive-21by9 overflow-hidden"
                  >
                    <!-- <img
                  src="http://benhvienkhuvucthuduc.vn/Content/assets/img/healthcare/NoiKhoa.jpg"
                  class="embed-responsive-img img-cover"
                  alt
                />-->
                    <img
                      src="img/func/BacSiTuVanOnline.jpg"
                      class="embed-responsive-img img-cover"
                      loading="lazy"
                      alt
                    />
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
                  <div class="function__title">Tư vấn sức khỏe</div>
                  <div class="function__desc">
                    Hãy cho chúng tôi biết bạn đang gặp khó khăn gì về tình
                    trang sức khỏe của bạn
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-4 mb-5">
              <div class="function__item h-100">
                <nuxt-link
                  to="/ketquacanlamsang"
                  class="link-absolute"
                ></nuxt-link>
                <div class="function__image">
                  <div
                    class="embed-responsive embed-responsive-21by9 overflow-hidden"
                  >
                    <img
                      src="img/func/XemCanLamSang.jpg"
                      class="embed-responsive-img img-cover"
                      alt
                      loading="lazy"
                    />
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
                  <div class="function__title">Kết quả cận lâm sàng</div>
                  <div class="function__desc">
                    Hãy cho chúng tôi biết bạn đang cần tra cứu thông tin gì
                    liên quan đến sức khỏe hiện tại của bạn
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-4 mb-5">
              <div class="function__item h-100">
                <nuxt-link
                  to="/tracuulichsukhambenh"
                  class="link-absolute"
                ></nuxt-link>
                <div class="function__image">
                  <div
                    class="embed-responsive embed-responsive-21by9 overflow-hidden"
                  >
                    <img
                      src="img/func/XemToaThuoc.jpg"
                      class="embed-responsive-img img-cover"
                      alt
                      loading="lazy"
                    />
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
                  <div class="function__title">Tra cứu lịch sử khám bệnh</div>
                  <div class="function__desc">
                    Hãy cho chúng tôi biết bạn đang cần tra cứu lịch sử khám
                    bệnh của bạn trong thời gian nào?
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-4 mb-5">
              <div class="function__item h-100">
                <nuxt-link
                  to="/dangkykhambenh"
                  class="link-absolute"
                ></nuxt-link>
                <div class="function__image">
                  <div
                    class="embed-responsive embed-responsive-21by9 overflow-hidden"
                  >
                    <img
                      src="img/func/DatLichKham.jpg"
                      class="embed-responsive-img img-cover"
                      alt
                      loading="lazy"
                    />
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
                  <div class="function__title">Đăng ký khám bệnh</div>
                  <div class="function__desc">
                    Hãy cho chúng tôi biết bạn đang cần đến khám bệnh ngày nào,
                    bác sĩ nào sẽ hỗ trợ bạn
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-4 mb-5">
              <div class="function__item h-100">
                <nuxt-link to="/dongvienphi" class="link-absolute"></nuxt-link>
                <div class="function__image">
                  <div
                    class="embed-responsive embed-responsive-21by9 overflow-hidden"
                  >
                    <img
                      src="img/func/ThanhToanOnline.jpg"
                      class="embed-responsive-img img-cover"
                      alt
                      loading="lazy"
                    />
                  </div>
                </div>

                <div class="function__body">
                  <div class="function__icon">
                    <img
                      src="/img/svg/039-bill.svg"
                      class="svg-icon fill-current"
                      data-inject-svg
                      alt
                    />
                  </div>
                  <div class="function__title">Đóng tiền viện phí</div>
                  <div class="function__desc">
                    Chúng tôi sẽ trả lời bạn trong 24h
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

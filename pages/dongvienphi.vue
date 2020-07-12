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
            <div class="row no-gutters align-items-center mb-4">
              <div class="col">
                <div class="card-title kq-title">Lịch sử thanh toán</div>
              </div>
              <div class="col-auto">
                <div class="kq-filter">
                  <el-date-picker
                    v-model="dateValue"
                    type="daterange"
                    align="right"
                    start-placeholder="Ngày bắt đầu"
                    end-placeholder="Ngày kết thúc"
                    default-value="2010-10-01"
                    format="dd-MM-yyyy"
                  ></el-date-picker>
                </div>
              </div>
            </div>

            <div class="box-listed">
              <div class="box-title-list">
                <div>Tháng 11</div>
              </div>
              <ul class="list-unstyled box-item-list">
                <li>
                  <div class="ic">
                    <i class="far fa-file-alt"></i>
                  </div>
                  <div class="date">
                    <span>19/09/2019 10:25</span>
                  </div>

                  <div class="name text-truncate">
                    <span class>Xét nghiệm</span>
                    <span class="ml-1 badge badge-pill bg-success-light">Đã thanh toán</span>
                  </div>

                  <div class="func">
                    <div class="action text-right">
                      <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                        <i class="far fa-eye"></i> Xem viện phí
                      </a>
                   
                    </div>
                  </div>
                </li>

                <li>
                  <div class="ic">
                    <i class="far fa-file-alt"></i>
                  </div>
                  <div class="date">
                    <span>18/09/2019 08:25</span>
                  </div>

                  <div class="name text-truncate">
                    <span class>X-Quang</span>
                    <span class="ml-1 badge badge-pill bg-success-light">Đã thanh toán</span>
                  </div>

                  <div class="func">
                    <div class="action text-right">
                      <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                        <i class="far fa-eye"></i> Xem viện phí
                      </a>
                       
                    </div>
                  </div>
                </li>
              </ul>
            </div>

       
          </div>

          <div class="col-md-4">
            <div class="service__card h-100">
              <h4 class="text-white pb-2">Quy định</h4>

              <div class="service__item">
                <div class="service__icon">
                  <i class="el-icon-money"></i>
                </div>
                <div class="service__body">
                  <div class="service__name">Phí dịch vụ</div>
                  <div class="service__desc">
                    <strong>50.000</strong> đồng
                  </div>
                </div>
              </div>

              <div class="service__item">
                <div class="service__icon">
                  <i class="el-icon-alarm-clock"></i>
                </div>
                <div class="service__body">
                  <div class="service__name">Thời gian tiếp nhận</div>
                  <div class="service__desc">
                    <div class="mb-2">Các bác sĩ sẽ dành 30 phút để trả lời</div>
                    <div class="mb-2">7h – 11h, trả lời vào 15h cùng ngày</div>
                    <div class="mb-2">12h – 7h ngày hôm sau, 10h cùng ngày</div>
                    <div
                      class="mb-2"
                    >TB, CN, Lễ - 10h ngày thứ 2 (TB,CN), ngày đi làm đầu tiên sau lễ (Lễ)</div>
                  </div>
                </div>
              </div>

              <div class="service__item">
                <div class="service__icon">
                  <i class="el-icon-date"></i>
                </div>
                <div class="service__body">
                  <div class="service__name">Sắp xếp lịch hẹn</div>
                  <div
                    class="service__desc"
                  >Các bác sĩ sẽ kê toa dựa vào kết quả khám lâm sàng. Trường hợp bạn cần chẩn đoán thêm.</div>
                </div>
              </div>

              <div class="service__item">
                <div class="service__icon">
                  <i class="el-icon-phone-outline"></i>
                </div>
                <div class="service__body">
                  <div class="service__name">Hỗ trợ sau khám</div>
                  <div
                    class="service__desc"
                  >Các bác sĩ cùng đội ngũ CSKH chuyên nghiệp luôn sẵn sàng giải đáp mọi thắc mắc về sức khỏe ngay trong ứng dụng hoặc qua đường dây nóng.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  auth: false,
  components: {},
  methods: {},
  data() {
    return {
      dateValue: ""
    };
  },
  head() {
    return {
      title: "Xem toa thuốc"
    };
  }
};
</script>


<style lang="scss" scoped>
</style>

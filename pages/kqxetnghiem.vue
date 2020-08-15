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
                <li class="breadcrumb-item active" aria-current="page">Kết quả xét nghiệm</li>
              </ol>
            </nav>
            <div class="banner-header text-left">
              <h1 class="text-white">Xem kết quả xét nghiệm</h1>
              <p class="lead text-white mb-0">Xem và tải về kết quả cận lâm sàng</p>
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
                <div class="card-title kq-title">Danh sách kết quả</div>
              </div>
              <div class="col-auto">
                <div class="kq-filter">
                  <el-select v-model="filters" placeholder="Select">
                    <el-option
                      v-for="item in filtersList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </div>
            </div>

            <div class="required__box mb-4">
              <div
                class
              >Chưa có kết quả xét nghiệm, bạn có thể yêu cầu Bệnh viện gửi kết quả xét nghiệm tại đây</div>
              <div class="text-center mt-3">
                <b-button v-b-modal.modal-1 variant="primary" size="sm">Yêu cầu kết quả xét nghiệm</b-button>

                <b-modal
                  id="modal-1"
                  centered
                  cancelTitle="Đóng cửa sổ"
                  okTitle="Thanh toán"
                  title="Yêu cầu kết quả xét nghiệm"
                >
                  <el-form ref="form" class="px-3" :model="form" label-width="0px">
                    <div class="row">
                      <div class="col-12">
                        <!-- <h5 class="font-weight-bold mb-3">Chọn ngày khám</h5> -->

                        <div class="row sm-gutters mt-3">
                          <div class="col-6">
                            <div class="mb-2">Chọn lại xét nghiệm:</div>
                            <el-select v-model="form.loaiHinh" placeholder="Select">
                              <el-option
                                v-for="item in filtersList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              ></el-option>
                            </el-select>
                          </div>

                          <div class="col-6">
                            <div class="mb-2">Chọn ngày xét nghiệm</div>
                            <el-date-picker
                              v-model="form.dateSelect"
                              type="date"
                              placeholder="Pick a day"
                            ></el-date-picker>
                          </div>

                          <div class="col-12">
                            <el-form-item class="mt-3 mb-0" label>
                              <el-checkbox-group v-model="form.checkrule">
                                <el-checkbox
                                  label="Tôi đồng ý gửi yêu cầu theo quy định"
                                  name="type"
                                ></el-checkbox>
                              </el-checkbox-group>
                            </el-form-item>
                          </div>
                        </div>

                        <div class="card mt-4 info__card">
                          <div class="font-weight-bold mb-3">Thông tin bệnh nhân</div>

                          <PersonalInfo />
                        </div>
                      </div>
                    </div>
                  </el-form>
                </b-modal>
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
                    <span class="ml-1 badge badge-pill bg-success-light">Miễn phí</span>
                  </div>

                  <div class="func">
                    <div class="action text-right">
                      <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                        <i class="far fa-eye"></i> Xem
                      </a>
                      <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                        <i class="fas fa-print"></i> In
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
                    <span class="ml-1 badge badge-pill bg-success-light">Miễn phí</span>
                  </div>

                  <div class="func">
                    <div class="action text-right">
                      <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                        <i class="far fa-eye"></i> Xem
                      </a>
                      <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                        <i class="fas fa-print"></i> In
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="box-listed">
              <div class="box-title-list">
                <div>Tháng 10</div>
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
                    <span class>CT, Scanner MRI</span>
                    <span class="ml-1 badge badge-pill bg-primary-light">Tốn phí</span>
                  </div>

                  <div class="func">
                    <div class="action text-right">
                      <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                        <i class="far fa-eye"></i> Xem
                      </a>
                      <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                        <i class="fas fa-print"></i> In
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
                    <span class>Nội soi</span>
                    <span class="ml-1 badge badge-pill bg-warning-light">Đang chờ</span>
                  </div>

                  <div class="func">
                    <div class="action text-right">
                      <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                        <i class="far fa-eye"></i> Xem
                      </a>
                      <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                        <i class="fas fa-print"></i> In
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
                    <span class>Nội soi</span>
                    <span class="ml-1 badge badge-pill bg-danger-light">Không có sẵn</span>
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

    <section class="section section-space" style="background-color: rgba(238, 242, 247, 1)">
      <div class="container">
        <div class="row no-gutters align-items-center mb-4">
          <div class="col">
            <div class="card-title kq-title">Danh sách kết quả</div>
          </div>
          <div class="col-auto">
            <div class="kq-filter">
              <el-select v-model="filters" placeholder="Select">
                <el-option
                  v-for="item in filtersList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4" v-for="i in [1,2]">
            <div class="kq__box mb-4">
              <div class="kq__box__body">
                <div class="kq__overlay">
                  <a href class="btn btn-success">Tải về</a>
                </div>
                <div class="kq__box__img">
                  <img src="http://html.iwthemes.com/mas/img/authorizations/doc.jpg" alt />
                </div>
              </div>

              <div class="kq__box__footer py-1">
                <div class="tt">Xét nghiệm</div>
                <div class="ff border-top">
                  <div class="row no-gutters align-items-center">
                    <div class="col">Ngày</div>
                    <div class="col-auto">22/05/2020</div>
                  </div>
                </div>
                <div class="ff border-top">
                  <div class="row no-gutters align-items-center">
                    <div class="col">Trạng thái</div>
                    <div class="col-auto">
                      <span class="alert p-1 px-2 m-0 alert-success d-inline-block">
                        <i class="fas fa-file-download"></i> Miễn phí
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-4">
            <div class="kq__box mb-4">
              <div class="kq__box__body">
                <div class="kq__overlay">
                  <a href class="btn btn-success">Tải về</a>
                </div>
                <div class="kq__box__img">
                  <img src="http://html.iwthemes.com/mas/img/authorizations/doc.jpg" alt />
                </div>
              </div>

              <div class="kq__box__footer py-1">
                <div class="tt">CT, Scanner MRI</div>
                <div class="ff border-top">
                  <div class="row no-gutters align-items-center">
                    <div class="col">Ngày</div>
                    <div class="col-auto">22/05/2020</div>
                  </div>
                </div>
                <div class="ff border-top">
                  <div class="row no-gutters align-items-center">
                    <div class="col">Trạng thái</div>
                    <div class="col-auto">
                      <span class="alert p-1 px-2 m-0 alert-warning d-inline-block">
                        <i class="fas fa-file-invoice-dollar"></i>
                        Tốn phí
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-4">
            <div class="kq__box mb-4">
              <div class="kq__box__body">
                <div class="kq__box__img">
                  <img src="http://html.iwthemes.com/mas/img/authorizations/doc.jpg" alt />
                </div>
              </div>

              <div class="kq__box__footer py-1">
                <div class="tt">X-quang</div>
                <div class="ff border-top">
                  <div class="row no-gutters align-items-center">
                    <div class="col">Ngày</div>
                    <div class="col-auto">22/05/2020</div>
                  </div>
                </div>
                <div class="ff border-top">
                  <div class="row no-gutters align-items-center">
                    <div class="col">Trạng thái</div>
                    <div class="col-auto">
                      <span class="alert p-1 px-2 m-0 alert-primary-2 d-inline-block">
                        <i class="fas fa-spinner"></i>
                        Đang chờ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-4">
            <div class="kq__box mb-4">
              <div class="kq__box__body">
                <div class="kq__box__img">
                  <img src="http://html.iwthemes.com/mas/img/authorizations/doc.jpg" alt />
                </div>
              </div>

              <div class="kq__box__footer py-1">
                <div class="tt">Nội soi</div>
                <div class="ff border-top">
                  <div class="row no-gutters align-items-center">
                    <div class="col">Ngày</div>
                    <div class="col-auto">22/05/2020</div>
                  </div>
                </div>
                <div class="ff border-top">
                  <div class="row no-gutters align-items-center">
                    <div class="col">Trạng thái</div>
                    <div class="col-auto">
                      <span class="alert p-1 px-2 m-0 alert-primary-3 d-inline-block">
                        <i class="fas fa-spinner"></i>
                        Không có sẵn
                      </span>
                    </div>
                  </div>
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

import PersonalInfo from "@/components/blocks/PersonalInfo";


export default {
  auth: true,
  components: {},
  methods: {},
  data() {
    return {
      form: {
        loaiKham: "1",
        noidung: "",
        loaiHinh: "",
        dateSelect: "",
        checkrule: "",
      },
      filtersList: [
        {
          value: "1q",
          label: "Tất cả",
        },
        {
          value: "2q",
          label: "Xét nghiệm",
        },
        {
          value: "3q",
          label: "X-Quang",
        },
        {
          value: "4q",
          label: "CT Scanner, MRI",
        },
        {
          value: "5q",
          label: "Siêu âm",
        },
        {
          value: "6q",
          label: "Nội soi",
        },
      ],
      filters: "1q",
    };
  },
  head() {
    return {
      title: "Kết quả cận lâm sàng",
    };
  },
};
</script>


<style lang="scss" scoped>
</style>

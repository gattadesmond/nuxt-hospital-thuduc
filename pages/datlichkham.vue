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
                <li class="breadcrumb-item active" aria-current="page">Đặt lịch khám</li>
              </ol>
            </nav>
            <div class="banner-header text-left">
              <h1 class="text-white">Đặt lịch khám</h1>
              <p class="lead text-white">
                Đồng ý sử dụng và thanh toán phí dịch vụ.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="s-heading-bg w-100" style="background-image: url(img/bv/bg-heading.jpg)"></div>
    </section>

    <section class="section section-space" style="background-color: rgba(238, 242, 247, 1)">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 card__soju">
              <div class="card-body">
                <el-form ref="form" :model="form" label-width="0px">
                  <div class="row">
                    <div class="col-md-7 col-lg-8">
                      <h4 class>Thông tin bệnh nhân</h4>

                      <div class="row sm-gutters mt-4">
                        <div class="col-6">
                          Họ tên :
                          <strong>Nguyễn Văn A</strong>
                        </div>

                        <div class="col-6">
                          Tuổi :
                          <strong>21</strong>
                        </div>
                      </div>

                      <div class="row sm-gutters mt-4">
                        <div class="col-6">
                          Địa chỉ :
                          <strong>302 Lê Văn Sỹ</strong>
                        </div>

                        <div class="col-6">
                          Điện thoại :
                          <strong>0909090909</strong>
                        </div>
                      </div>

                      <div class="row sm-gutters mt-4">
                        <div class="col-6">
                          Email:
                          <strong>test@mail.com</strong>
                        </div>

                        <div class="col-6">
                          Bảo hiểm:
                          <strong>Không</strong>
                        </div>
                      </div>

                      <h4 class="mt-5 mb-2">Dịch vụ khám</h4>
                      <p class="text-gray">Khám dịch vụ sẽ được chọn bác sĩ</p>

                      <el-radio v-model="form.loaiKham" label="1">Khám thường</el-radio>
                      <el-radio v-model="form.loaiKham" label="2">Khám dịch vụ</el-radio>

                      <!-- <h5 class="mt-4">Chọn Bác sĩ</h5> -->

                      <div class="row sm-gutters">
                        <div class="col-md-10">
                          <el-form-item>
                            <div class="form-soju">
                              <div class="form-soju-label">Chọn chuyên khoa</div>

                              <el-select
                                v-model="form.chuyenkhoa"
                                filterable
                                class="form-soju-input"
                                no-match-text="Không có Chuyên khoa "
                                placeholder="Vui lòng chọn Chuyên khoa"
                                width="400px"
                              >
                                <el-option
                                  v-for="item in chuyenkhoa"
                                  :key="item.id"
                                  :label="item.name"
                                  :value="item.name"
                                >
                                  <div class="row no-gutters flex-nowrap align-items-center">
                                    <div class="col mr-2">
                                      <span style>{{ item.name }}</span>
                                    </div>
                                  </div>
                                </el-option>
                              </el-select>
                            </div>
                          </el-form-item>
                        </div>

                        <div class="col-md-6 " v-if="form.loaiKham == 2">
                          <el-form-item>
                            <div class="form-soju">
                              <div class="form-soju-label">Chọn Bác sĩ</div>

                              <el-select
                                v-model="form.bacsi"
                                filterable
                                class="form-soju-input"
                                no-match-text="Không có Bác sĩ "
                                placeholder="Vui lòng chọn Bác sĩ"
                              >
                                <el-option
                                  v-for="item in doctors"
                                  :key="item.id"
                                  :label="item.name"
                                  :value="item.name"
                                >
                                  <div class="row no-gutters flex-nowrap align-items-center">
                                    <div class="col-auto mr-2">
                                      <b-avatar
                                        square
                                        size="sm"
                                        :src="`http://benhvienkhuvucthuduc.vn/Content/uploads/ImageDoctors/${item.imageLink}`"
                                      ></b-avatar>
                                    </div>
                                    <div class="col mr-2">
                                      <span style>{{ item.name }}</span>
                                    </div>

                                    <div class="col-auto">
                                      <span
                                        style="float: right; color: #8492a6; font-size: 13px"
                                      >{{ item.position }}</span>
                                    </div>
                                  </div>
                                </el-option>
                              </el-select>
                            </div>
                          </el-form-item>
                        </div>

                        <div class="col-6" v-if="form.loaiKham == 2">
                          <div class="booking-doc-info">
                            <a href="doctor-profile.html" class="booking-doc-img">
                              <img
                                src="http://benhvienkhuvucthuduc.vn/Content/uploads/ImageDoctors/749aea9c-ec80-409c-89fb-a9e000a341e9_capcuu-phong.jpg"
                                alt="User Image"
                              />
                            </a>
                            <div class="booking-info">
                              <h4>
                                <a href="doctor-profile.html">Bs CKI.Hồ Thanh Phong</a>
                              </h4>

                              <div class="clinic-details">
                                <p class="doc-location">
                                  <i class="fas fa-map-marker-alt"></i> Trưởng Khoa
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 col-lg-4">
                      <!-- Booking Summary -->

                      <div class="service__card">
                        <h4 class="text-white pb-2">Quy định</h4>

                        <div class="service__item">
                          <div class="service__icon">
                            <i class="el-icon-money"></i>
                          </div>
                          <div class="service__body">
                            <div class="service__name">Đối tượng</div>
                            <div class="service__desc">Có hoặc không có BHYT</div>
                          </div>
                        </div>

                        <div class="service__item">
                          <div class="service__icon">
                            <i class="el-icon-alarm-clock"></i>
                          </div>
                          <div class="service__body">
                            <div class="service__name">Thời gian tiếp nhận</div>
                            <div class="service__desc">Đăng ký trước 24h</div>
                          </div>
                        </div>

                        <div class="service__item">
                          <div class="service__icon">
                            <i class="el-icon-date"></i>
                          </div>
                          <div class="service__body">
                            <div class="service__name">Phí dịch vụ</div>
                            <div class="service__desc">
                              theo phí khám theo yêu cầu
                              <br />Đồng ý sử dụng và thanh toán phí dịch vụ.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <h4 class="mt-4 mb-1">Chọn ngày khám</h4>

                      <div class="booking-schedule schedule-widget mt-4">
                        <!-- Schedule Header -->
                        <div class="schedule-header">
                          <div class="row">
                            <div class="col-md-12">
                              <!-- Day Slot -->
                              <div class="day-slot">
                                <ul>
                                  <li class="left-arrow">
                                    <a href>
                                      <i class="fa fa-chevron-left"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <span>Thứ 2</span>
                                    <span class="slot-date">11/06</span>
                                  </li>
                                  <li>
                                    <span>Thứ 3</span>
                                    <span class="slot-date">11/06</span>
                                  </li>
                                  <li>
                                    <span>Thứ 4</span>
                                    <span class="slot-date">12/06</span>
                                  </li>
                                  <li>
                                    <span>Thứ 5</span>
                                    <span class="slot-date">13/06</span>
                                  </li>
                                  <li>
                                    <span>Thứ 6</span>
                                    <span class="slot-date">14/06</span>
                                  </li>
                                  <li>
                                    <span>Thứ 7</span>
                                    <span class="slot-date">15/06</span>
                                  </li>
                                  <li>
                                    <span>Chủ nhật</span>
                                    <span class="slot-date">
                                      17 Nov
                                      <small class="slot-year">2019</small>
                                    </span>
                                  </li>
                                  <li class="right-arrow">
                                    <a href>
                                      <i class="fa fa-chevron-right"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <!-- /Day Slot -->
                            </div>
                          </div>
                        </div>
                        <!-- /Schedule Header -->

                        <!-- Schedule Content -->
                        <div class="schedule-cont">
                          <div class="row">
                            <div class="col-md-12">
                              <!-- Time Slot -->
                              <div class="time-slot">
                                <ul class="clearfix">
                                  <li>
                                    <a class="timing" href="#">
                                      <span>9:00</span>
                                      <span>AM</span>
                                    </a>
                                    <a class="timing" href="#">
                                      <span>10:00</span>
                                      <span>AM</span>
                                    </a>
                                    <a class="timing" href="#">
                                      <span>11:00</span>
                                      <span>AM</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="timing" href="#">
                                      <span>9:00</span>
                                      <span>AM</span>
                                    </a>
                                    <a class="timing" href="#">
                                      <span>10:00</span>
                                      <span>AM</span>
                                    </a>
                                    <a class="timing" href="#">
                                      <span>11:00</span>
                                      <span>AM</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="timing" href="#">
                                      <span>9:00</span>
                                      <span>AM</span>
                                    </a>
                                    <a class="timing" href="#">
                                      <span>10:00</span>
                                      <span>AM</span>
                                    </a>
                                    <a class="timing" href="#">
                                      <span>11:00</span>
                                      <span>AM</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="timing" href="#">
                                      <span>9:00</span>
                                      <span>AM</span>
                                    </a>
                                    <a class="timing" href="#">
                                      <span>10:00</span>
                                      <span>AM</span>
                                    </a>
                                    <a class="timing" href="#">
                                      <span>11:00</span>
                                      <span>AM</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="timing" href="#">
                                      <span>9:00</span>
                                      <span>AM</span>
                                    </a>
                                    <a class="timing selected" href="#">
                                      <span>10:00</span>
                                      <span>AM</span>
                                    </a>
                                    <a class="timing" href="#">
                                      <span>11:00</span>
                                      <span>AM</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="timing" href="#">
                                      <span>9:00</span>
                                      <span>AM</span>
                                    </a>
                                    <a class="timing" href="#">
                                      <span>10:00</span>
                                      <span>AM</span>
                                    </a>
                                    <a class="timing" href="#">
                                      <span>11:00</span>
                                      <span>AM</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="timing" href="#">
                                      <span>9:00</span>
                                      <span>AM</span>
                                    </a>
                                    <a class="timing" href="#">
                                      <span>10:00</span>
                                      <span>AM</span>
                                    </a>
                                    <a class="timing" href="#">
                                      <span>11:00</span>
                                      <span>AM</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <!-- /Time Slot -->
                            </div>
                          </div>
                        </div>
                        <!-- /Schedule Content -->
                      </div>

                      <el-form-item label>
                        <el-checkbox-group v-model="form.checkrule">
                          <el-checkbox label="Tôi đồng ý đặt lịch khám theo quy định" name="type"></el-checkbox>
                        </el-checkbox-group>
                      </el-form-item>

                      <el-form-item class="text-right">
                        <!-- <el-button>Hủy</el-button> -->
                        <el-button
                          type="primary"
                          class="btn btn-primary submit-btn"
                          @click="onSubmit"
                        >
                          Xác nhận thông tin
                          <i class="fas fa-arrow-right"></i>
                        </el-button>
                      </el-form-item>
                    </div>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//API THONG TIN BAC SI
// https://api.jsonbin.io/b/5efe2af50bab551d2b6ace37

export default {
  auth: false,
  components: {},

  data() {
    return {
      form: {
        loaiKham: "1",
        bacsi: "",
        chuyenkhoa: "",
        checkrule: false
      },
      doctors: [
        {
          id: 4,
          name: "Bs CKI.Hồ Thanh Phong",
          position: "Trưởng khoa",
          imageLink: "749aea9c-ec80-409c-89fb-a9e000a341e9_capcuu-phong.jpg"
        },
        {
          id: 5,
          position: "Điều dưỡng trưởng",
          name: "CN ĐD.Phạm Quốc Trung",
          imageLink: ""
        },
        {
          id: 6,
          position: "Bác sĩ điều trị",
          name: "BS.Phạm Thi Thu",
          imageLink: "a900ab86-4eb6-4d98-a94f-a9dc01017e4c_capcuu-thu.jpg"
        },
        {
          id: 7,
          position: "Bác sĩ điều trị",
          name: "BS CKI.Trần Thị Tú",

          imageLink: "28a98e02-7373-4a0b-8307-a9dc01018c9c_capcuu-tu.jpg"
        },
        {
          id: 8,
          position: "Bác sĩ điều trị",
          name: "BS.Trần Thị Hiếu",

          imageLink: "8ba10650-803a-4eaf-b42a-a9dc0100941d_capcuu-hieu.jpg"
        },
        {
          id: 9,
          position: "Bác sĩ điều trị",
          name: "BS.Nguyễn Tiến Hoàn",

          imageLink: "1044759c-b9a8-460e-bb20-a9dc0100ac22_capcuu-hoan.jpg"
        },
        {
          id: 10,
          position: "Bác sĩ điều trị",
          name: "BS.Lê Văn Hưng",

          imageLink: "fa639536-6182-4f66-b7f3-a9dc010123fe_capcuu-hung`.jpg"
        },
        {
          id: 11,
          position: "Bác sĩ điều trị",
          name: "BS.Vũ Minh Hoàng",

          imageLink: "987e1a0c-9541-4103-8c44-a9dc0100cbba_capcuu-hoang.jpg"
        },
        {
          id: 12,
          position: "Bác sĩ điều trị",
          name: "BS.Trương Cao Đường",

          imageLink: "48623d1f-55ac-4fd4-ba16-a9dc01007542_capcuu-duong.jpg"
        },
        {
          id: 13,
          position: "Bác sĩ điều trị",
          name: "BS.Lê Hồng Quân",

          imageLink: "ec087c50-a2e1-42da-8767-a9dc01015b91_capcuu-quan.jpg"
        },
        {
          id: 14,
          position: "Bác sĩ điều trị",
          name: "BS CKII.Nguyễn Xuân Tuyến",

          imageLink: "b2f7e801-9558-4657-81ca-a9d0012003ff_truong-khoa.jpg"
        },
        {
          id: 15,
          position: "Bác sĩ điều trị",
          name: "CN ĐD.Nguyễn Thị Kim My",

          imageLink: ""
        },
        {
          id: 16,
          position: "Bác sĩ điều trị",
          name: "Ths.BS.Nguyễn Lê Hoàng Phi",

          imageLink: "a259121d-bba5-483f-b523-a9dc01031468_hscc-phi.jpg"
        },
        {
          id: 17,
          position: "Bác sĩ điều trị",
          name: "Bs CKI.Dương Hoàng Hà",

          imageLink: "291a4f11-76c2-432d-95d4-a9dc01030444_hscc-ha.jpg"
        },
        {
          id: 18,
          position: "Bác sĩ điều trị",
          name: "BS CKI.Nguyễn Thị Thanh Tú",

          imageLink: "084dc47c-35a7-47b6-9f7b-a9dc01033b5a_hscc-tu.jpg"
        }
      ],
      chuyenkhoa: [
        {
          id: 1,
          name: "Khoa Tai mũi họng"
        },
        {
          id: 2,
          name: "Nội khoa"
        },
        {
          id: 3,
          name: "Nội tổng quát"
        },
        {
          id: 4,
          name: "Nội tổng quát"
        },
        {
          id: 5,
          name: "Nội tổng quát"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    }
  },
  async fetch() {},

  head() {
    return {
      title: "Tư vấn bác sĩ"
    };
  }
};
</script>


<style lang="scss" scoped>
</style>

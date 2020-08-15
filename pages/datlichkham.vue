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
              <p class="lead text-white">Đồng ý sử dụng và thanh toán phí dịch vụ.</p>
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
                      
                      <PersonalInfo />

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

                              <SelectChuyenKhoa />
                            </div>
                          </el-form-item>
                        </div>

                        <div class="col-md-6" v-if="form.loaiKham == 2">
                          <el-form-item>
                            <div class="form-soju">
                              <div class="form-soju-label">Chọn Bác sĩ</div>

                              <SelectDoctor />
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

                        <div class="col-md-10">
                          <el-form-item>
                            <div class="form-soju">
                              <div class="form-soju-label">Mô tả triệu chứng</div>
                              <el-input
                                type="textarea"
                                :autosize="{ minRows: 3, maxRows: 10}"
                                class="form-soju-input"
                                placeholder="Vui lòng ghi rõ vấn đề của bạn để chúng tôi có thể sắp xếp đúng chuyên khoa nếu cần."
                                v-model="form.noidung"
                              ></el-input>
                            </div>
                          </el-form-item>
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
                      <h4 class="mt-4 mb-1">Chọn ngày khám và giờ khám</h4>

                      <TimeSchedule />

                      <el-form-item class="mt-4" label>
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
import SelectChuyenKhoa from "@/components/blocks/SelectChuyenKhoa";
import SelectDoctor from "@/components/blocks/SelectDoctor";
import TimeSchedule from "@/components/blocks/TimeSchedule";
import PersonalInfo from "@/components/blocks/PersonalInfo";

export default {
  auth: true,
  components: {
    SelectChuyenKhoa,
    SelectDoctor,
  },

  data() {
    return {
      form: {
        loaiKham: "1",
        noidung: "",
        checkrule: false,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
  },

  head() {
    return {
      title: "Tư vấn bác sĩ",
    };
  },
};
</script>


<style lang="scss" scoped>
</style>



<style lang="scss">
.el-tabs__item {
  height: auto;
  padding: 12px 20px 8px;
  &.is-active {
    .date {
      color: #0a8d68;
    }
  }
}

.date__item {
  text-align: center;
  font-weight: normal;

  .date {
    font-weight: bold;
    line-height: 1.5;
    color: #2b2b2b;
  }
  .day {
    line-height: 1.5;
    color: #909399;
  }
}

.time-slot .timing {
  cursor: pointer;
}
</style>


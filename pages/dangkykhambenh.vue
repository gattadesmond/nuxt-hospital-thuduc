<template>
  <div class="bg-white">
    <QuyDinhPopup
      @open-modal="handleOpenQuyDinh"
      @open-next="handleOpenNext"
      :recentOpen="isRecentOpen"
      :isOpen="isQuyDinhPopup"
    />
    <section class="section section-space s-heading s-heading-dark">
      <div class="container s-heading-content">
        <div class="row align-items-center s-heading-height">
          <div class="col-12 col-lg-8 mb-4">
            <nav aria-label="breadcrumb ">
              <ol class="breadcrumb soju-breadcrumb soju-breadcrumb-white">
                <li class="breadcrumb-item">
                  <nuxt-link to="/">Trang chủ</nuxt-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Đăng ký khám bệnh
                </li>
              </ol>
            </nav>
            <div class="banner-header text-left">
              <h1 class="text-white">Đăng ký khám bệnh</h1>
              <p class="lead text-white">
                Hãy cho chúng tôi biết bạn đang cần đến khám bệnh ngày nào, bác
                sĩ nào sẽ hỗ trợ bạn
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="s-heading-bg w-100"
        style="background-image: url(img/bv/bg-heading.jpg)"
      ></div>
    </section>

    <section class="section section-space">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="required__box mb-4">
              <div class>Đăng ký khám bệnh</div>
              <div class="text-center mt-3">
                <b-button
                  variant="primary"
                  size=""
                  @click.stop.prevent="handleOpenQuyDinh(true)"
                  >Đăng ký khám</b-button
                >

                <b-modal
                  v-model="isOpenNext"
                  id="modal-2"
                  centered
                  no-close-on-esc
                  no-close-on-backdrop
                  cancelTitle="Đóng cửa sổ"
                  okTitle="Yêu cầu"
                  title="Yêu cầu đơn thuốc"
                  @ok="submitForm"
                  size="lg"
                >
                  <el-form
                    ref="form"
                    class="px-3"
                    :model="form"
                    label-width="0px"
                  >
                    <div class="row">
                      <div class="col-12">
                        <!-- <h5 class="font-weight-bold mb-3">Chọn ngày khám</h5> -->

                        <div class="row sm-gutters mt-3">
                          <!-- <div class="col-6">
                            <div class="mb-2">Chọn lại xét nghiệm:</div>
                            <el-select v-model="form.loaiHinh" placeholder="Select">
                              <el-option
                                v-for="item in filtersList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              ></el-option>
                            </el-select>
                          </div>-->

                          <div class="col-6">
                            <div class="mb-2">Chọn khoảng thời gian khám</div>
                            <el-date-picker
                              v-model="form.dateSelect"
                              type="daterange"
                              align="left"
                              start-placeholder="Ngày bắt đầu"
                              end-placeholder="Ngày kết thúc"
                              format="dd/MM/yyyy"
                              value-format="dd/MM/yyyy"
                            ></el-date-picker>
                          </div>

                          <div class="col-md-10">
                            <div class="mb-2 mt-3">
                              Thông tin về đơn thuốc (nếu có)
                            </div>
                            <el-form-item class="mb-0" label>
                              <el-input
                                type="textarea"
                                :autosize="{ minRows: 3, maxRows: 10 }"
                                placeholder
                                v-model="form.noidung"
                              ></el-input>
                            </el-form-item>
                          </div>

                          <div class="col-12">
                            <el-form-item class="mt-3 mb-0" label>
                              <el-checkbox-group v-model="form.checkrule">
                                <el-checkbox
                                  label="Tôi đồng ý theo các quy định của Bệnh viện"
                                  name="type"
                                ></el-checkbox>
                              </el-checkbox-group>
                            </el-form-item>
                          </div>

                          <div class="col-12">
                            <div class="card info__card">
                              <div
                                class="font-weight-bold mb-0"
                                style="font-size: 16px"
                              >
                                Thông tin bệnh nhân
                              </div>
                              <PersonalInfo />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-form>
                </b-modal>
              </div>
            </div>
          </div>

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

                      <el-radio v-model="form.loaiKham" label="1"
                        >Khám thường</el-radio
                      >
                      <el-radio v-model="form.loaiKham" label="2"
                        >Khám dịch vụ</el-radio
                      >

                      <!-- <h5 class="mt-4">Chọn Bác sĩ</h5> -->

                      <div class="row sm-gutters">
                        <div class="col-md-6" v-show="form.loaiKham == 2">
                          <el-form-item>
                            <div class="form-soju">
                              <div class="form-soju-label">Chọn Bác sĩ</div>
                              <SelectDoctor @select-doctor="getSelectDoctor" />
                            </div>
                          </el-form-item>
                        </div>

                        <div class="col-6" v-show="form.loaiKham == 2">
                          <DoctorInfoMini v-bind:doctorId="form.doctorID" />
                        </div>

                        <div class="col-md-10">
                          <el-form-item>
                            <div class="form-soju">
                              <div class="form-soju-label">
                                Mô tả triệu chứng
                              </div>
                              <el-input
                                type="textarea"
                                :autosize="{ minRows: 3, maxRows: 10 }"
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
                      <Quangcao />
                    </div>

                    <div class="col-12">
                      <h4 class="mt-4 mb-1">Chọn ngày khám và giờ khám</h4>

                      <TimeSchedule @time-select="getTimeSelect" />

                      <el-form-item class="mt-4" label>
                        <el-checkbox-group v-model="form.checkrule">
                          <el-checkbox
                            label="Tôi đồng ý đặt lịch khám theo quy định"
                            name="type"
                          ></el-checkbox>
                        </el-checkbox-group>
                      </el-form-item>

                      <el-form-item class="text-right">
                        <!-- <el-button>Hủy</el-button> -->
                        <el-button
                          type="primary"
                          class="btn btn-primary submit-btn"
                          @click.stop.prevent="sendForm()"
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
import SelectDoctor from "@/components/blocks/SelectDoctor";
import TimeSchedule from "@/components/blocks/TimeSchedule";
import PersonalInfo from "@/components/blocks/PersonalInfo";
import QuyDinhPopup from "@/components/blocks/QuyDinhPopup";
import Quangcao from "@/components/blocks/Quangcao";

export default {
  auth: true,
  components: {
    SelectDoctor,
    PersonalInfo,
    TimeSchedule,
    QuyDinhPopup,
  },

  data() {
    return {
      isQuyDinhPopup: false,
      isRecentOpen: false,
      dateValue: "",
      form: {
        loaiKham: "1",
        noidung: "",
        doctorID: "",

        timeSelect: {
          timeSelect: "",
          daySelectFull: "",
        },
        checkrule: false,
      },
    };
  },
  methods: {
    handleOpenQuyDinh(status) {
      // console.log(status);
      // console.log("Nay la gi");
      this.isQuyDinhPopup = status;
      if (status == "again") {
        this.isRecentOpen = true;
      }
    },
    handleOpenNext(status) {
      this.isOpenNext = true;
    },

    onSubmit() {
      console.log(this.form);
    },

    getSelectDoctor(e) {
      // console.log(e);
      this.form.doctorID = e;
    },

    getTimeSelect(e) {
      this.form.timeSelect = e;
    },

    sendForm(e) {
      if (this.form.noidung == "") {
        this.$alert("Bạn chưa mô tả triệu chứng", "Thông báo", {
          confirmButtonText: "Đóng",
          type: "error",
          callback: (action) => {
            // this.$message({
            //   type: "info",
            //   message: `action: ${action}`
            // });
          },
        });
        return;
      }

      if (this.form.timeSelect == "" || this.form.timeSelect.timeSelect == "") {
        this.$alert("Bạn chưa chọn thời gian đặt khám", "Thông báo", {
          confirmButtonText: "Đóng",
          type: "error",
          callback: (action) => {
            // this.$message({
            //   type: "info",
            //   message: `action: ${action}`
            // });
          },
        });
        return;
      }

      if (this.form.checkrule == false) {
        this.$alert("Bạn cần đồng ý quy định đặt lịch khám", "Thông báo", {
          confirmButtonText: "Đóng",
          type: "error",
          callback: (action) => {
            // this.$message({
            //   type: "info",
            //   message: `action: ${action}`
            // });
          },
        });
        return;
      }

      this.$axios
        .post("Appointment/Insert", {
          doctorId: this.form.doctorID | "",
          content: this.form.noidung,
          appointmentDate: this.form.timeSelect.daySelectFull,
          timeBookingId: this.form.timeSelect.timeSelect,
          serviceId: 1,
        })
        .then((response) => {
          console.log(response);
          if (response.data.success === true) {
            const loading = this.$loading({
              lock: true,
              text: "Đang xử lý",
              spinner: "el-icon-loading",
              background: "rgba(0, 0, 0, 0.7)",
            });
            setTimeout(() => {
              loading.close();
              this.$router.push({
                name: "thanhcong",
                params: {
                  message: response.data.message,
                  doctorId: this.form.doctorId,
                },
              });
            }, 2000);

            // this.$alert(response.data.message, "Thông báo", {
            //   confirmButtonText: "OK",
            //   type: "success",
            //   callback: (action) => {
            //     // this.$message({
            //     //   type: "info",
            //     //   message: `action: ${action}`
            //     // });
            //   },
            // });
          } else {
            this.$alert(response.data.message, "Thông báo", {
              confirmButtonText: "Đóng",
              type: "error",
              callback: (action) => {
                // this.$message({
                //   type: "info",
                //   message: `action: ${action}`
                // });
              },
            });
          }
        })
        .catch((error) => {
          this.$alert(
            "Đặt lịch khám thất bại, vui lòng kiểm tra lại thông tin.",
            "Thông báo",
            {
              confirmButtonText: "Đóng",
              type: "error",
              callback: (action) => {
                // this.$message({
                //   type: "info",
                //   message: `action: ${action}`
                // });
              },
            }
          );
          // this.errored = true;
        });
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


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
                  Tra cứu lịch sử khám bệnh
                </li>
              </ol>
            </nav>
            <div class="banner-header text-left">
              <h1 class="text-white">Tra cứu lịch sử khám bệnh</h1>
              <p class="lead text-white">
                Hãy cho chúng tôi biết bạn đang cần tra cứu lịch sử khám bệnh
                của bạn trong thời gian nào?
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

    <section class="section section-space bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="required__box mb-4">
              <div class>
                Bạn chưa có toa thuốc mong muốn, vui lòng gửi yêu cầu miễn phí
                khi nhấn nút bên dưới
              </div>
              <div class="text-center mt-3">
                <b-button
                  variant="primary"
                  size=""
                  @click.stop.prevent="handleOpenQuyDinh(true)"
                  >Yêu cầu đơn thuốc</b-button
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
                            <div class="mb-2">Chọn ngày khám</div>
                            <el-date-picker
                              v-model="form.dateSelect"
                              type="date"
                              placeholder="Chọn ngày"
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

            <div class="card-title kq-title mt-4">Lịch sử</div>

            <template v-if="dataList.length">
              <div class="card card-table">
                <div class="card-body">
                  <!-- Invoice Table -->
                  <div class="table-responsive">
                    <table class="table table-center mb-0">
                      <thead>
                        <tr>
                          <th>Ngày yêu cầu</th>
                          <!-- <th>Ngày nhận</th> -->
                          <th>Trạng thái</th>
                          <th>Ghi chú</th>
                          <th>Chức năng</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in dataList" :key="item.id">
                          <td>{{ item.requestDate | formatDate }}</td>
                          <!-- <td>{{ item.uploadDate | formatDate }}</td> -->
                          <td>
                            <span
                              v-if="item.status == 3"
                              class="ml-1 badge badge-pill bg-success-light"
                              >Thành công</span
                            >

                            <span
                              v-if="item.status == 1"
                              class="ml-1 badge badge-pill bg-primary-light"
                              >Đang chờ</span
                            >

                            <span
                              v-if="item.status == 2"
                              class="ml-1 badge badge-pill bg-danger-light"
                              >Thất bại</span
                            >
                          </td>
                          <td>
                            <div style="width: 150px; font-size: 13px">
                              <i> {{ item.note }}</i>
                            </div>
                          </td>
                          <td class="text-right">
                            <div class="table-action" v-if="item.status == 3">
                              <!-- <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                                <i class="far fa-eye"></i> Xem
                              </a>-->
                              <el-image
                                style="width: 93px; height: 32px"
                                :src="url"
                                :preview-src-list="item.fullFiles"
                              ></el-image>

                              <!-- <img src="img/btn-xem.svg" alt /> -->

                              <a
                                href="javascript:void(0);"
                                class="btn btn-sm bg-primary-light"
                              >
                                <i class="fas fa-download"></i> Tải về
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </template>

         
          </div>

          <div class="col-md-4">
            <Quangcao />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import QuyDinhPopup from "@/components/blocks/QuyDinhPopup";
import PersonalInfo from "@/components/blocks/PersonalInfo";
import Quangcao from "@/components/blocks/Quangcao";

export default {
  auth: true,
  components: {
    PersonalInfo,
    QuyDinhPopup,
    Quangcao,
  },

  data() {
    return {
      isQuyDinhPopup: false,
      isRecentOpen: false,
      dateValue: "",
      isOpenNext: false,
      form: {
        dateSelect: "",
        noidung: "",
        checkrule: false,
      },

      dataList: [],
      url: "img/btn-xem.svg",
    };
  },
  mounted() {
    // console.log(this.$route.query.doctorId);
    // if (this.$route.query.doctorId != undefined) {
    //   this.form.doctorId = parseInt(this.$route.query.doctorId);
    // } else {
    //   this.form.doctorId = "";
    // }

    this.$axios
      .get("Prescription/GetByPrescriptionbyUser")
      .then((rds) => {
        // console.log(rds.data.results);
        this.dataList = rds.data.results;
        console.log(this.dataList);
      })
      .catch((error) => {
        console.log(error);
        // this.errored = true;
      });
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
    submitForm(bvModalEvt) {
      bvModalEvt.preventDefault();

      if (this.form.dateSelect == "") {
        this.$alert("Vui lòng chọn ngày", "Thông báo", {
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
        this.$alert("Bạn chưa đồng ý nội quy", "Thông báo", {
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
        .post("Prescription/Insert", {
          requestDate: this.form.dateSelect,
          note: this.form.noidung,
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
              window.location.href = response.data.data.callbackUrl;
              // this.$router.push({
              //   name: "thanhcong",
              //   params: {
              //     message: response.data.message,
              //     doctorId: this.form.doctorId,
              //   },
              // });
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
            "Yêu cầu thất bại, vui lòng kiểm tra lại thông tin.",
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
      title: "Xem lịch sử khám bệnh",
    };
  },
};
</script>


<style lang="scss" scoped>
</style>

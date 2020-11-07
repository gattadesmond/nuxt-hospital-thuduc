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
                  Kết quả cận lâm sàng
                </li>
              </ol>
            </nav>
            <div class="banner-header text-left">
              <h1 class="text-white">Kết quả cận lâm sàng</h1>
              <p class="lead text-white mb-0">
                Hãy cho chúng tôi biết bạn đang cần tra cứu thông tin gì liên
                quan đến sức khỏe hiện tại của bạn
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="s-heading-bg w-100"
        style="background-image: url(/img/bv/bg-heading.jpg)"
      ></div>
    </section>

    <section class="section section-space bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="row no-gutters align-items-center mb-4">
              <div class="col">
                <div class="card-title kq-title">Danh sách kết quả</div>
              </div>
            </div>

            <div class="required__box mb-4">
              <div class>
                Chưa có kết quả cận lâm sàng, bạn có thể yêu cầu Bệnh viện gửi
                kết quả cận lâm sàng tại đây
              </div>
              <div class="text-center mt-3">
                <b-button
                  variant="primary"
                  size=""
                  @click.stop.prevent="handleOpenQuyDinh(true)"
                  >Yêu cầu kết quả
                </b-button>

                <b-modal
                  v-model="isOpenNext"
                  id="modal-1"
                  centered
                  no-close-on-esc
                  no-close-on-backdrop
                  cancelTitle="Đóng cửa sổ"
                  okTitle="Thanh toán với MoMo"
                  ok-variant="momo"
                  title="Yêu cầu kết quả xét nghiệm"
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
                          <div class="col-6">
                            <div class="mb-2">Chọn lại xét nghiệm:</div>

                            <SelectXetNghiem
                              @select-xetnghiem="getSelectXetNghiem"
                            />
                            <!-- <el-select
                              v-model="form.loaiHinh"
                              placeholder="Loại xét nghiệm"
                            >
                              <el-option
                                v-for="item in filtersList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              ></el-option>
                            </el-select> -->
                          </div>

                          <div class="col-6">
                            <div class="mb-2">
                              Chọn khoảng thời gian xét nghiệm
                            </div>
                            <!-- <el-date-picker
                              v-model="form.dateSelect"
                              type="date"
                              placeholder="Ngày khám"
                              format="dd-MM-yyyy"
                            ></el-date-picker> -->

                            <el-date-picker
                              v-model="form.dateSelect"
                              type="daterange"
                              align="right"
                              start-placeholder="Ngày bắt đầu"
                              end-placeholder="Ngày kết thúc"
                              format="dd/MM/yyyy"
                              value-format="dd/MM/yyyy"
                            ></el-date-picker>
                          </div>

                          <div class="col-12 mt-4">
                            <div class="mb-2">Ghi chú:</div>

                            <el-input
                              type="textarea"
                              :autosize="{ minRows: 2, maxRows: 4 }"
                              placeholder="Ghi chú nếu có"
                              v-model="form.noiDung"
                            ></el-input>
                          </div>

                          <div class="col-12">
                            <el-form-item class="mt-3 mb-0" label>
                              <el-checkbox-group v-model="isPostOffice">
                                <el-checkbox
                                  label=" Nhận kết quả qua bưu điện"
                                  name="type"
                                ></el-checkbox>
                              </el-checkbox-group>
                            </el-form-item>
                          </div>

                          <div class="col-12">
                            <el-form-item class="mt-1 mb-0" label>
                              <el-checkbox-group v-model="form.checkrule">
                                <el-checkbox
                                  label="Tôi đồng ý gửi yêu cầu theo quy định"
                                  name="type"
                                ></el-checkbox>
                              </el-checkbox-group>

                              <div>
                                Xem lại các quy định
                                <a
                                  href
                                  @click.stop.prevent="
                                    handleOpenQuyDinh('again')
                                  "
                                  >tại đây</a
                                >
                              </div>
                            </el-form-item>
                          </div>
                        </div>

                        <div class="card mt-4 info__card">
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
                  </el-form>
                </b-modal>
              </div>
            </div>

            <template v-if="radiograpyList.length">
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
                        <tr v-for="item in radiograpyList" :key="item.id">
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
                          <td>{{ item.note }}</td>

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
//API lay ket qua xet nghiem
// ​//api​/Radiograpy​/GetByRadiographybyUser
import moment from "moment";
import QuyDinhPopup from "@/components/blocks/QuyDinhPopup";
import SelectXetNghiem from "@/components/blocks/SelectXetNghiem";
import PersonalInfo from "@/components/blocks/PersonalInfo";
import Quangcao from "@/components/blocks/Quangcao";
// isReceivePostOffice
export default {
  auth: true,
  components: {
    QuyDinhPopup,
    PersonalInfo,
    Quangcao,
  },
  data() {
    return {
      isQuyDinhPopup: false,
      isRecentOpen: false,
      isOpenNext: false,
      isPostOffice: false,
      form: {
        noiDung: "",
        loaiHinh: "",
        dateSelect: "",
        checkrule: false,
        address: "",
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
      radiograpyList: [],
      url: "/img/btn-xem.svg",
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
    getSelectXetNghiem(e) {
      console.log(e);
      this.form.loaiHinh = e;
    },

    async getRadiograpyList() {
      // console.log(this.doctorId);
      const data = await this.$axios.$get(`Radiograpy/GetByRadiographybyUser`);
      this.radiograpyList = this.radiograpyList.concat(data.results);
      // this.loading = false;
      // this.radiograpyList.srcList = [];
      // data.results.map((item, index) => {
      //   this.radiograpyList[index].srcList = [];
      //   this.radiograpyList[index].srcList = this.radiograpyList[
      //     index
      //   ].srcList.concat(
      //     `http://myhealthdemo.benhvienkhuvucthuduc.vn/${item.urlShortFile}`
      //   );
      // });
    },

    submitForm(bvModalEvt) {
      bvModalEvt.preventDefault();
      if (this.form.loaiHinh == "") {
        this.$alert("Bạn chưa chọn loại xét nghiệm", "Thông báo", {
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

      if (this.form.dateSelect == "") {
        this.$alert("Bạn chưa chọn ngày khám", "Thông báo", {
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
        .post("Radiograpy/Insert", {
          isReceivePostOffice: this.isPostOffice,
          serviceId: this.form.loaiHinh,
          addressDelivery: this.form.address,
          requestTime: this.form.dateSelect.join(" - "),
          note: this.form.noiDung,
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
              // console.log(response);
              window.location.href = response.data.data.callbackUrl;

              // this.$router.push({ name: response.data.data.callbackUrl })
              // this.$router.go({
              //   // name: "thanhcong",
              //   path: response.data.data.callbackUrl,
              //   params: {
              //     totolMoney: response.data.data.totolMoney,
              //     transactionId: response.data.data.transactionId,
              //     type: response.data.data.type
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
            "Đặt yêu cầu thất bại, vui lòng kiểm tra lại thông tin.",
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
  // filters: {
  //   formatDate: function (value) {
  //     if (!value) return "";
  //     value = value.toString();
  //     return moment(String(value)).format("DD/MM/YY hh:mm");
  //   },
  // },
  watch: {},
  mounted() {
    this.getRadiograpyList();
  },
  head() {
    return {
      title: "Kết quả xét nghiệm",
    };
  },
};
</script>


<style lang="scss" scoped>
</style>

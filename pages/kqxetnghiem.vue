<template>
  <div class="bg-white">
    <QuyDinhPopup
      @open-modal="handleOpenQuyDinh"
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
                  okTitle="Gửi yêu cầu"
                  title="Yêu cầu kết quả xét nghiệm"
                  @ok="submitForm"
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
                              placeholder="Ngày khám"
                              format="dd-MM-yyyy"
                            ></el-date-picker>
                          </div>

                          <div class="col-12 mt-4">
                            <div class="mb-2">Ghi chú:</div>

                            <el-input
                              type="textarea"
                              :autosize="{ minRows: 2, maxRows: 4}"
                              placeholder="Ghi chú nếu có"
                              v-model="form.noiDung"
                            ></el-input>
                          </div>

                          <div class="col-12">
                            <el-form-item class="mt-3 mb-0" label>
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
                                  @click.stop.prevent="handleOpenQuyDinh"
                                >tại đây</a>
                              </div>
                            </el-form-item>
                          </div>
                        </div>

                        <div class="card mt-4 info__card">
                          <div
                            class="font-weight-bold mb-0"
                            style="font-size: 16px"
                          >Thông tin bệnh nhân</div>
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
                          <th>Ngày nhận</th>
                          <th>Trạng thái</th>
                          <th>Ghi chú</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in radiograpyList" :key="item.id">
                          <td>{{item.requestDate | formatDate}}</td>
                          <td>{{item.uploadDate | formatDate}}</td>
                          <td>
                            <span
                              v-if="item.status == 3"
                              class="ml-1 badge badge-pill bg-success-light"
                            >Thành công</span>

                            <span
                              v-if="item.status == 1"
                              class="ml-1 badge badge-pill bg-primary-light"
                            >Đang chờ</span>

                            <span
                              v-if="item.status == 2"
                              class="ml-1 badge badge-pill bg-danger-light"
                            >Thất bại</span>
                          </td>
                          <td>{{item.note}}</td>
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

                              <!-- <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                <i class="fas fa-print"></i> Print
                              </a>-->
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
            <div class="mb-4">
              <a href>
                <img
                  src="https://cdn2.medihub.vn/image/360/w/ImagesUpload/2019/07/22/9e01e1e8-1db7-4ec5-a461-c166463a5164_kemdanhrang.jpg"
                  class="img-fluid d-block mx-auto"
                  alt
                />
              </a>
            </div>

            <div class="mb-4">
              <a href>
                <img
                  src="https://cdn2.medihub.vn/image/360/w/ImagesUpload/2018/09/14/8e7e7626-2368-4842-8655-9acf0338f750_tuongan.jpg"
                  class="img-fluid d-block mx-auto"
                  alt
                />
              </a>
            </div>

            <div class="mb-4">
              <a href>
                <img
                  src="http://cdn1.medihub.vn/uploads/images/2017/07/12/medermakid.jpg"
                  class="img-fluid d-block mx-auto"
                  alt
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-space d-none" style="background-color: rgba(238, 242, 247, 1)">
      <div class="container">
        <div class="row no-gutters align-items-center mb-4">
          <div class="col">
            <div class="card-title kq-title">Danh sách kết quả</div>
          </div>
        </div>
        <div class="row">
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
//API lay ket qua xet nghiem
// ​//api​/Radiograpy​/GetByRadiographybyUser
import moment from "moment";
import QuyDinhPopup from "@/components/blocks/QuyDinhPopup";
import PersonalInfo from "@/components/blocks/PersonalInfo";

export default {
  auth: true,
  components: {
    QuyDinhPopup,
    PersonalInfo,
  },
  data() {
    return {
      isQuyDinhPopup: true,
      isRecentOpen: false,
      form: {
        noiDung: "",
        loaiHinh: "",
        dateSelect: "",
        checkrule: false,
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
      url: "img/btn-xem.svg",
    };
  },
  methods: {
    handleOpenQuyDinh(status) {
      console.log("Nay la gi");
      this.isQuyDinhPopup = status;
      this.isRecentOpen = true;
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
          name: this.form.loaiHinh,
          requestDate:this.form.dateSelect,
          note : this.form.noiDung 
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
  filters: {
    formatDate: function (value) {
      if (!value) return "";
      value = value.toString();
      return moment(String(value)).format("DD/MM/YY hh:mm");
    },
  },
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

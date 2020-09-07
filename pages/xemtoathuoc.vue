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
                <li class="breadcrumb-item active" aria-current="page">Xem toa thuốc</li>
              </ol>
            </nav>
            <div class="banner-header text-left">
              <h1 class="text-white">Xem toa thuốc</h1>
              <p class="lead text-white">Xem và tải về toa thuốc</p>
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
                <div class="card-title kq-title">Danh sách toa thuốc</div>
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

            <div class="required__box mb-4">
              <div
                class
              >Bạn chưa có toa thuốc mong muốn, vuio lòng gửi yêu cầu miễn phí khi nhấn nút bên dưới</div>
              <div class="text-center mt-3">
                <b-button v-b-modal.modal-2 variant="primary" size="sm">Yêu cầu đơn thuốc</b-button>

                <b-modal
                  id="modal-2"
                  centered
                  cancelTitle="Đóng cửa sổ"
                  okTitle="Yêu cầu"
                  title="Yêu cầu đơn thuốc"
                >
                  <el-form ref="form" class="px-3" :model="form" label-width="0px">
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
                              placeholder="Pick a day"
                            ></el-date-picker>
                          </div>

                          <div class="col-md-10">
                            <div class="mb-2 mt-3">Thông tin về đơn thuốc (nếu có)</div>
                            <el-form-item class="mb-0" label>
                              <el-input
                                type="textarea"
                                :autosize="{ minRows: 3, maxRows: 10}"
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
  </div>
</template>

<script>
import QuyDinhPopup from "@/components/blocks/QuyDinhPopup";
import PersonalInfo from "@/components/blocks/PersonalInfo";

export default {
  auth: true,
  components: {
    PersonalInfo,
    QuyDinhPopup,
  },
  methods: {
    handleOpenQuyDinh(status) {
      console.log("Nay la gi");
      this.isQuyDinhPopup = status;
      this.isRecentOpen = true;
    },
  },
  data() {
    return {
      isQuyDinhPopup: true,
      isRecentOpen: false,
      dateValue: "",
      form: {
        loaiKham: "1",
        noidung: "",
        checkrule: false,
      },
    };
  },
  head() {
    return {
      title: "Xem toa thuốc",
    };
  },
};
</script>


<style lang="scss" scoped>
</style>

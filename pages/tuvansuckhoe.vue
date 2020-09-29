<template>
  <div class="bg-white">
    <QuyDinhPopup
      @open-modal="handleOpenQuyDinh"
      :recentOpen="isRecentOpen"
      :isOpen="isQuyDinhPopup"
      :type="typeRule"
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
                <li class="breadcrumb-item active" aria-current="page">Hỏi Bác sĩ</li>
              </ol>
            </nav>

            <div class="banner-header text-left">
              <h1 class="text-white">Tư vấn sức khỏe</h1>
              <p class="lead text-white mb-0">
                Bác sĩ sẽ dành 30 phút để cẩn thận kiểm tra sức khỏe, tư vấn kỹ
                lưỡng cho bạn.
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
          <div class="col-md-7 col-lg-8">
            <div class="card border-0 card__soju">
              <div class="card-body">
                <div>
                  <div class="mb-5">
                    <h4 class="card-title">Thông tin cá nhân</h4>
                    <PersonalInfo />
                  </div>

                  <el-form ref="form" :rules="rules" :model="form" label-width="0px">
                    <!-- <div class="info-widget"> -->
                    <h4 class="card-title">Mô tả triệu chứng</h4>

                    <el-form-item prop="trieuChungBenh">
                      <div class="form-soju">
                        <div class="form-soju-label">Triệu chứng bệnh</div>
                        <el-input
                          type="textarea"
                          :autosize="{ minRows: 3, maxRows: 10 }"
                          class="form-soju-input"
                          placeholder="Vui lòng ghi rõ triệu chứng"
                          v-model="form.trieuChungBenh"
                        ></el-input>
                      </div>
                    </el-form-item>

                    <div class="row">
                      <div class="col-md-6">
                        <el-form-item prop="dienTienBenh">
                          <div class="form-soju">
                            <div class="form-soju-label">Diễn tiến bệnh</div>
                            <el-input
                              type="textarea"
                              :autosize="{ minRows: 2, maxRows: 10 }"
                              class="form-soju-input"
                              placeholder="Vui lòng ghi rõ triệu chứng"
                              v-model="form.dienTienBenh"
                            ></el-input>
                          </div>
                        </el-form-item>
                      </div>

                      <div class="col-md-6">
                        <el-form-item prop="tienSuBenh">
                          <div class="form-soju">
                            <div class="form-soju-label">Tiền sử bệnh</div>
                            <el-input
                              type="textarea"
                              :autosize="{ minRows: 2, maxRows: 10 }"
                              class="form-soju-input"
                              placeholder="Vui lòng ghi rõ triệu chứng"
                              v-model="form.tienSuBenh"
                            ></el-input>
                          </div>
                        </el-form-item>
                      </div>
                    </div>

                    <h4 class="mt-4">Yêu cầu chuyên khoa (nếu cần)</h4>

                    <div class="row no-gutters">
                      <div class="col-md-6">
                        <el-form-item>
                          <div class="form-soju">
                            <div class="form-soju-label">Chọn Chuyên khoa</div>
                            <SelectChuyenKhoa @select-chuyenkhoa="getSelectChuyenKhoa" />
                          </div>
                        </el-form-item>
                      </div>
                    </div>

                    <el-form-item prop="checkrule">
                      <el-checkbox-group v-model="form.checkrule">
                        <el-checkbox label="Tôi đồng ý gửi câu hỏi theo quy định" name="type"></el-checkbox>
                      </el-checkbox-group>
                      <div>
                        Xem lại các quy định
                        <a href @click.stop.prevent="handleOpenQuyDinh">tại đây</a>
                      </div>
                    </el-form-item>

                    <el-form-item class="mt-5">
                      <!-- <el-button>Hủy</el-button> -->
                      <el-button
                        type="primary"
                        class="btn btn-primary submit-btn"
                        @click.stop.prevent="submitForm('form')"
                      >Gửi câu hỏi</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-5 col-lg-4 theiaStickySidebar">
            <!-- Booking Summary -->

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

        <div class="mt-5">
          <h4 class="mb-4">Danh sách câu hỏi trước</h4>

          <div class></div>

          <div class="doc-review review-listing">
            <!-- Review Listing -->
            <ul class="comments-list">
              <li v-for="question in questionsList" :key="question.id">
                <div class="comment">
                  <img
                    class="avatar rounded-circle"
                    alt="User Image"
                    src="img/patients/patient6.jpg"
                  />
                  <div class="comment-body">
                    <div class="meta-data">
                      <span class="comment-author">
                        {{
                        question.userAskFullName
                        }}
                      </span>
                      <span class="comment-date">Vào ngày {{ question.prettyCreatedDate }}</span>
                    </div>

                    <p
                      class="recommended"
                      v-bind:class="[
                        question.statusId == 3 ? '' : 'text-warning'
                      ]"
                    >
                      <i class="far fa-clock"></i>
                      {{ question.status }}
                    </p>

                    <div class="comment-content" v-html="question.questionContent"></div>
                  </div>
                </div>

                <!-- Comment Reply -->
                <ul class="comments-reply" v-if="question.statusId == 3">
                  <!-- Comment Reply List -->
                  <li>
                    <div class="comment">
                      <img
                        class="avatar rounded-circle"
                        alt="User Image"
                        src="http://benhvienkhuvucthuduc.vn/Content/uploads/ImageDoctors/6fb28875-81e8-4f0b-8340-a9d00120a18b_truong-khoa.jpg"
                      />
                      <div class="comment-body">
                        <div class="meta-data">
                          <span class="comment-author">
                            <a href>
                              <b>BS CKII.Từ Văn Lai</b>
                            </a>
                          </span>
                          <span class="comment-date">Trả lời 1 ngày trước</span>
                        </div>
                        <div class="comment-content" v-html="question.replyContent"></div>
                      </div>
                    </div>
                  </li>
                  <!-- /Comment Reply List -->
                </ul>
                <!-- /Comment Reply -->
              </li>

              <!-- /Comment List -->
            </ul>
            <!-- /Comment List -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//API THONG TIN BAC SI
// https://api.jsonbin.io/b/5efe2af50bab551d2b6ace37

import QuyDinhPopup from "@/components/blocks/QuyDinhPopup";
import PersonalInfo from "@/components/blocks/PersonalInfo";
import SelectChuyenKhoa from "@/components/blocks/SelectChuyenKhoa";
export default {
  auth: true,

  components: {
    QuyDinhPopup,
    PersonalInfo,
    SelectChuyenKhoa,
  },

  data() {
    var checkBoxValidate = (rule, value, callback) => {
      if (value === false) {
        callback(new Error("Bạn cần đồng ý các điều khoản"));
      } else {
        callback();
      }
    };
    return {
      isQuyDinhPopup: true,
      isRecentOpen: false,
      typeRule: "tuvansuckhoe",
      form: {
        trieuChungBenh: "",
        dienTienBenh: "",
        tienSuBenh: "",
        doctorId: "",
        chuyenKhoa: "",
        checkrule: false,
      },
      computed: {},
      rules: {
        trieuChungBenh: [
          {
            required: true,
            message: "Vui lòng ghi triệu chứng bệnh",
            trigger: "blur",
          },
          {
            min: 20,
            message: "Nội dung cần lớn hơn 20 kí tự",
            trigger: "blur",
          },
        ],

        checkrule: [
          {
            validator: checkBoxValidate,
            trigger: "change",
          },
        ],
      },
      questionsList: [],
    };
  },
  methods: {
    getSelectChuyenKhoa(e) {
      console.log(e);
      this.form.chuyenKhoa = e;
    },

    handleOpenQuyDinh(status) {
      console.log("Nay la gi");
      this.isQuyDinhPopup = status;
      this.isRecentOpen = true;
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post("Question/Insert", {
              questionContent: this.form.trieuChungBenh,
              diseaseProgression: this.form.dienTienBenh,
              diseaseHistory: this.form.tienSuBenh,
              specialist: this.form.chuyenKhoa,
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
                "Đặt câu hỏi thất bại, vui lòng kiểm tra lại thông tin.",
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
        } else {
          //  this.$alert("Có lỗi xảy ra, vui lòng thử lại", "Thông báo", {
          //         confirmButtonText: "Đóng",
          //         type: "error",
          //         callback: (action) => {
          //           // this.$message({
          //           //   type: "info",
          //           //   message: `action: ${action}`
          //           // });
          //         },
          //       });
          return false;
        }
      });
    },
  },
  // watch: {
  //   "this.$route.query.doctorId": function () {
  //     this.doctorId= this.$route.query.doctorId
  //   },
  // },
  updated: function () {},
  mounted() {
    // console.log(this.$route.query.doctorId);
    if (this.$route.query.doctorId != undefined) {
      this.form.doctorId = parseInt(this.$route.query.doctorId);
    } else {
      this.form.doctorId = "";
    }

    this.$axios
      .get("Question/GetByQuestionbyUser")
      .then((rds) => {
        // console.log(rds.data.results);
        this.questionsList = rds.data.results;
        // console.log(this.questionsList);
      })
      .catch((error) => {
        console.log(error);
        // this.errored = true;
      });
  },

  head() {
    return {
      title: "Tư vấn sức khỏe",
    };
  },
};
</script>

<style lang="scss" scoped>
.comments-reply {
  background: red;
}
.review-listing.doc-review > ul > li {
  border-radius: 5px;
}
.review-listing > ul li .comment {
  margin-bottom: 10px;
}

.review-listing > ul li .comments-reply {
  background: #f7f7f7;
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 55px;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    top: -10px;
    left: 35px;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #f7f7f7 transparent;
  }
}
</style>

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
                  Tư vấn sức khỏe
                </li>
              </ol>
            </nav>

            <div class="banner-header text-left">
              <h1 class="text-white">Tư vấn sức khỏe</h1>
              <p class="lead text-white mb-0">
                Hãy cho chúng tôi biết bạn đang gặp khó khăn gì về tình trang
                sức khỏe của bạn
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

    <section class="section section-space bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="required__box mb-4">
              <div style="">
                Bạn có thể gửi câu hỏi cho Bác sĩ bệnh viện tại đây
              </div>
              <div class="text-center mt-3">
                <b-button
                  variant="primary"
                  size=""
                  @click.stop.prevent="handleOpenQuyDinh(true)"
                  >Gửi câu hỏi</b-button
                >
              </div>
            </div>

            <b-modal
              v-model="isOpenNext"
              id="modal-1"
              centered
              no-close-on-esc
              no-close-on-backdrop
              cancelTitle="Đóng cửa sổ"
              okTitle="Gửi câu hỏi"
              title="Gửi câu hỏi"
              @ok="submitForm"
              size="lg"
            >
              <el-form class="px-3" label-width="0px">
                <div class="row">
                  <div class="col-12">
                  

                    <el-form label-width="0px">
                      <!-- <div class="info-widget"> -->
                      <h4 class="card-title">Mô tả triệu chứng</h4>

                      <el-form-item prop="trieuChungBenh">
                        <div class="form-soju">
                          <div class="form-soju-label">Triệu chứng bệnh</div>
                          <el-input
                            type="textarea"
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
                              <div class="form-soju-label">
                                Chọn Chuyên khoa
                              </div>
                              <SelectChuyenKhoa
                                @select-chuyenkhoa="getSelectChuyenKhoa"
                              />
                            </div>
                          </el-form-item>
                        </div>
                      </div>

                      <el-form-item prop="checkrule">
                        <el-checkbox-group v-model="form.checkrule">
                          <el-checkbox
                            label="Tôi đồng ý gửi câu hỏi theo quy định"
                            name="type"
                          ></el-checkbox>
                        </el-checkbox-group>
                        <div>
                          Xem lại các quy định
                          <a
                            href
                            @click.stop.prevent="handleOpenQuyDinh('again')"
                            >tại đây</a
                          >
                        </div>
                      </el-form-item>
                      <!-- 
                      <el-form-item class="mt-5">
                        <el-button
                          type="primary"
                          class="btn btn-primary submit-btn"
                          @click.stop.prevent="submitForm"
                          >Gửi câu hỏi</el-button
                        >
                      </el-form-item> -->
                    </el-form>
                  </div>

                  <div class="col-12">
                      <div class="card  info__card">
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

            <!-- Nay la danh sach cau hoi -->

            <div class="card-title kq-title mt-4">Lịch sử câu hỏi</div>

     

            <div class="doc-review review-listing">
              <!-- Review Listing -->
              <ul class="comments-list">
                <li v-for="question in questionsList" :key="question.id">
                  <div class="comment">
                    <img
                      class="avatar rounded-circle"
                      alt="User Image"
                      src="/img/patients/patient6.jpg"
                    />
                    <div class="comment-body">
                      <div class="meta-data">
                        <span class="comment-author">
                          {{ question.userAskFullName }}
                        </span>
                        <span class="comment-date"
                          >Vào ngày {{ question.prettyCreatedDate }}</span
                        >
                      </div>

                      <p
                        class="recommended"
                        v-bind:class="[
                          question.statusId == 3 ? '' : 'text-warning',
                        ]"
                      >
                        <i class="far fa-clock"></i>
                        {{ question.status }}
                      </p>

                      <div
                        class="comment-content"
                        v-html="question.questionContent"
                      ></div>
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
                            <span class="comment-date"
                              >Trả lời 1 ngày trước</span
                            >
                          </div>
                          <div
                            class="comment-content"
                            v-html="question.replyContent"
                          ></div>
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

          <div class="col-md-4 theiaStickySidebar">
            <!-- Booking Summary -->
            <Quangcao />
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
import Quangcao from "@/components/blocks/Quangcao";
export default {
  auth: true,
  components: {
    QuyDinhPopup,
    PersonalInfo,
    SelectChuyenKhoa,
    Quangcao,
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
      isQuyDinhPopup: false,
      isRecentOpen: false,
      isOpenNext: false,
      form: {
        trieuChungBenh: "",
        dienTienBenh: "",
        tienSuBenh: "",
        doctorId: "",
        chuyenKhoa: "",
        checkrule: false,
      },
      computed: {},

      questionsList: [],
    };
  },
  methods: {
    getSelectChuyenKhoa(e) {
      console.log(e);
      this.form.chuyenKhoa = e;
    },

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

    // handleOpenQuyDinh(status) {
    //   console.log("Nay la gi");
    //   this.isQuyDinhPopup = status;
    //   this.isRecentOpen = true;
    // },

    submitForm(bvModalEvt) {
      bvModalEvt.preventDefault();

      if (this.form.trieuChungBenh == "") {
        this.$alert("Vui lòng ghi triệu chứng bệnh", "Thông báo", {
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

      if (this.form.dienTienBenh == "") {
        this.$alert("Vui lòng ghi diễn tiến bệnh", "Thông báo", {
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
               window.location.href = response.data.data.callbackUrl 
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

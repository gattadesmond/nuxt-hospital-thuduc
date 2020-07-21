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
                <li class="breadcrumb-item active" aria-current="page">Hỏi Bác sĩ</li>
              </ol>
            </nav>

            <div class="banner-header text-left">
              <h1 class="text-white">Tư vấn sức khỏe</h1>
              <p
                class="lead text-white mb-0"
              >Bác sĩ sẽ dành 30 phút để cẩn thận kiểm tra sức khỏe, tư vấn kỹ lưỡng cho bạn.</p>
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
                  <el-form ref="form" :rules="rules" :model="form" label-width="0px">
                    <!-- <div class="info-widget"> -->
                    <h4 class="card-title">Nội dung cần tư vấn</h4>

                    <el-form-item>
                      <div class="form-soju">
                        <div class="form-soju-label">Nội dung</div>
                        <el-input
                          type="textarea"
                          :autosize="{ minRows: 3, maxRows: 10}"
                          class="form-soju-input"
                          placeholder="Vui lòng ghi rõ câu hỏi của bạn, càng rõ ràng càng tốt."
                          v-model="form.noidung"
                        ></el-input>
                      </div>
                    </el-form-item>

                    <h5 class="mt-4">Chọn Bác sĩ</h5>

                    <el-form-item>
                      <div class="form-soju">
                        <div class="form-soju-label">Danh sách Bác sĩ</div>

                        <el-select
                          v-model="form.bacsi"
                          filterable
                          class="form-soju-input"
                          no-match-text="Không có Bác sĩ "
                          placeholder="Vui lòng chọn Bác sĩ"
                        >
                          <el-option
                            v-for="item in doctorsList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.name"
                          >
                            <div class="row no-gutters flex-nowrap align-items-center">
                              <div class="col-auto mr-2">
                                <b-avatar square size="sm" :src="`${item.imageLink}`"></b-avatar>
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

                    <el-form-item label>
                      <el-checkbox-group v-model="form.checkrule">
                        <el-checkbox label="Tôi đồng ý gửi câu hỏi theo quy định" name="type"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>

                    <el-form-item>
                      <!-- <el-button>Hủy</el-button> -->
                      <el-button
                        type="primary"
                        class="btn btn-primary submit-btn"
                        @click="onSubmit"
                      >Gửi câu hỏi</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-5 col-lg-4 theiaStickySidebar">
            <!-- Booking Summary -->

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

        <div class="mt-5">
          <h4 class="mb-4">Danh sách câu hỏi trước</h4>

          <div class></div>

          <div class="doc-review review-listing">
            <!-- Review Listing -->
            <ul class="comments-list">
              <li>
                <div class="comment">
                  <img
                    class="avatar rounded-circle"
                    alt="User Image"
                    src="img/patients/patient6.jpg"
                  />
                  <div class="comment-body">
                    <div class="meta-data">
                      <span class="comment-author">Nguyễn Thị Dung</span>
                      <span class="comment-date">Vào 2 ngày trước</span>
                      <!-- <div class="review-count rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star"></i>
                      </div>-->
                    </div>

                    <p class="recommended">
                      <i class="far fa-clock"></i> Đang chờ
                    </p>

                    <div
                      class="comment-content"
                    >Em bị đau dạ dày 7 năm nay rồi, mà cứ tái đi tái lại nhiều lần k hết được bác sĩ ạ ? E đang có ý định dùng thuốc LacbioMax của Pháp vì dược chị cùng cty mách cho , không biết thuốc này có tốt không ạ bs cho e xin thêm ý kiến với ạ, vì chữa nhiều thuốc rồi k khỏi nên e cũng lăn tăn.</div>
                  </div>
                </div>
              </li>

              <!-- Comment List -->
              <li>
                <div class="comment">
                  <img
                    class="avatar rounded-circle"
                    alt="User Image"
                    src="img/patients/patient6.jpg"
                  />
                  <div class="comment-body">
                    <div class="meta-data">
                      <span class="comment-author">Nguyễn Thị Dung</span>
                      <span class="comment-date">Vào 2 ngày trước</span>
                      <!-- <div class="review-count rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star"></i>
                      </div>-->
                    </div>

                    <div
                      class="comment-content"
                    >Bác sĩ ơi cho cháu hỏi cháu 19 tuổi sáng dậy bị đau chân đi mấy bước lại bình thường là bệnh gì ạ</div>
                  </div>
                </div>

                <!-- Comment Reply -->
                <ul class="comments-reply">
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
                            <a href>BS CKII.Từ Văn Lai</a>
                          </span>
                          <span class="comment-date">Trả lời 1 ngày trước</span>
                        </div>
                        <div class="comment-content">
                          <p>@Lê Quang Hà: Chào bạn! Trường hợp của bạn nhiều khả năng chỉ bị đau do sinh lý, nguyên nhân do tư thế ngủ, do thay đổi thời tiết,... cũng có thể biểu hiện của thiếu canxi (rất hay gặp ở tuổi đang phát triển). Để khắc phục tình trạng này, bạn nên thực hiện các biện pháp sau đây:</p>

                          <p>- Tăng chế độ ăn nhiều dinh dưỡng, giầu canxi</p>
                          <p>- Tăng cường thể dục thể thao, nhất là luyện tập buổi tối, trước khi đi ngủ. Nên tập thường xuyên, mỗi ngày ít nhất 60 phút, ít nhất 5 ngày mỗi tuần.</p>
                          <p>- Vật lý trị liệu, xông hơi, chườm nóng..... cũng có tác dụng tốt</p>
                          <p>- Ngoài ra, nên uống thêm các sản phẩm có chứa vitamin nhóm B giúp bảo vệ tế bào thần kinh, chứa thành phần Ginkgo biloba giúp tăng lưu thông máu, tăng tuần hoàn ngoại vi, chứa cao blueberry giúp chống lão hóa. Các thành phần này có trong viên uống Vindermen Plus, giúp giảm đau, giảm tê, tăng lưu thông máu. Bạn có thể uống thường xuyên hoặc ít nhất 6 tháng để duy trì kết quả.</p>
                          <p>
                            Chúc bạn mạnh khỏe !
                            Nếu còn thắc mắc nào cần giải đáp vui lòng gọi 19001259 !
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- /Comment Reply List -->
                </ul>
                <!-- /Comment Reply -->
              </li>
              <!-- /Comment List -->

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

export default {
  auth: false,
  components: {},

  data() {
    return {
      form: {
        noidung: "",
        bacsi: "",
        checkrule: false
      },
      rules: {
        noidung: [
          {
            required: true,
            message: "Vui lòng ghi câu hỏi",
            trigger: "change"
          }
        ]
      },
      doctorsList: []
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    }
  },
  async fetch() {
    const doctorsList = await fetch(
      "http://myhealthdemo.benhvienkhuvucthuduc.vn/api/Doctors/GetAllDoctorForQnA"
    ).then(res => res.json());

    this.doctorsList = this.doctorsList.concat(doctorsList);
  },

  head() {
    return {
      title: "Tư vấn bác sĩ"
    };
  }
};
</script>


<style lang="scss" scoped>
</style>

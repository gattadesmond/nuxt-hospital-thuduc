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
              <h1 class="text-white">Tư vấn Bác sĩ</h1>
              <p
                class="lead text-white"
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
                          placeholder="Tôi bị trĩ"
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
              <h4 class="text-white pb-4">Quy trình Khám sức khỏe</h4>

              <div class="service__item">
                <div class="service__icon">
                  <i class="el-icon-alarm-clock"></i>
                </div>
                <div class="service__body">
                  <div class="service__name">Trả lời trong 8h</div>
                  <div class="service__desc">Các bác sĩ sẽ trả lời tròng vòng 8h</div>
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

                    <p class="recommended"><i class="far fa-clock"></i> Đang chờ</p>

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

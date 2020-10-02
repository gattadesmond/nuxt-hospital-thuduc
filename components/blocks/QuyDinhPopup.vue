<template>
  <div class="modal-benhvien">
    <el-dialog
      title="Quy định"
      :visible.sync="isOpen"
      width="700px"
      :show-close="true"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      center
    >
      <div>
        <template v-if="type == 'tuvansuckhoe'">
          <div class="noidung-quydinh">
            <p style="font-size: 16px">
              <i class="fas fa-coins"></i> Phí dịch vụ:
              <strong>50.000đ</strong>
            </p>
            <p style="font-size: 16px">
              <i class="fas fa-calendar-alt"></i> Thời gian trả lời :
            </p>

            <table class="table table-bordered">
              <thead class="bg-light">
                <tr>
                  <th scope="col" width="150">
                    <strong>Ngày</strong>
                  </th>
                  <th scope="col">
                    <strong>Giờ</strong>
                  </th>

                  <th scope="col">
                    <strong>Trả lời</strong>
                  </th>

                  <th scope="col">
                    <strong>Phí dịch vụ</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row" rowspan="2">Thừ 2 - thứ 6</td>
                  <td>7h30</td>
                  <td>11h30 cùng ngày</td>
                  <td rowspan="2"><strong>50.000đ</strong></td>
                </tr>

                <tr>
                  <td>12h</td>
                  <td>16h30 cùng ngày</td>
                </tr>

                <tr>
                  <td scope="row">Thứ 7, CN Lễ</td>
                  <td>10h</td>
                  <td>15h cùng ngày</td>
                  <td><strong>100.000đ</strong></td>
                </tr>
              </tbody>
            </table>

            <p>
              <i class="fas fa-caret-right"></i>
              <strong>Đối tượng áp dụng : </strong> chính người bệnh đủ 18 tuổi
              trở lên và có các triệu chứng hay bệnh: Đau đầu, chóng mặt, đau
              lung, đau ngực, đau nhức toàn than, RLTH, viêm đường tiểu, bệnh lý
              tai mũi họng, bệnh lý răng hàm mặt…
            </p>

            <p class="text-danger">
              <i class="fas fa-caret-right"></i> Không áp dụng: Trường hợp cấp
              cứu hoặc có Bảo hiểm y tế cứu
            </p>
          </div>
        </template>

        <template v-if="type == 'ketquacanlamsang'">
          <div class="noidung-quydinh">
            <p style="font-size: 16px">
              <i class="fas fa-caret-right"></i> Áp dụng cho các cận lâm sàng đã
              làm tại bệnh viện trong thời gian 01 năm gần nhất.
            </p>

            <p style="font-size: 16px">
              Chi phí các loại cận lâm sàng được áp dụng :
            </p>

            <table class="table table-bordered">
              <tr>
                <th rowspan="2" width="150">
                  <strong>Tên cận lâm sàng</strong>
                </th>
                <th scope="col" colspan="2">
                  <strong>Hình thức áp dụng</strong>
                </th>

                <th scope="col" colspan="2">
                  <strong>Phí dịch vụ</strong>
                </th>
              </tr>
              <tr>
                <td scope="row">Trả kết quả qua mail</td>
                <td>Trả kết quả qua đường bưu điện</td>
                <td>Trả kết quả qua mail</td>
                <td>Trả kết quả qua bưu điện</td>
              </tr>

              <tr>
                <td scope="row">
                  <b>Xét ngiệm/siêu âm/nội soi/điện cơ/điện não</b>
                </td>
                <td>File PDF kết quả</td>
                <td>Bản sao kết quả</td>
                <td>50.000đ</td>
                <td>100.000đ</td>
              </tr>

              <tr>
                <td scope="row">
                  <b>Xquang</b>
                </td>
                <td>File PDF kết quả + hình ảnh</td>
                <td>Phim + kết quả</td>
                <td>70.000đ</td>
                <td>150.000đ</td>
              </tr>

              <tr>
                <td scope="row">
                  <b>CT Scanner</b>
                </td>
                <td>File PDF kết quả + hình ảnh</td>
                <td>Phim + kết quả</td>
                <td>100.000đ</td>
                <td>200.000đ</td>
              </tr>

              <tr>
                <td scope="row">
                  <b>MRI</b>
                </td>
                <td>File PDF kết quả + hình ảnh</td>
                <td>Phim (bộ) + kết quả</td>
                <td>100.000đ</td>
                <td>300.000đ</td>
              </tr>

              <tr>
                <td scope="row"><b> DSA</b></td>
                <td>File PDF kết quả</td>
                <td>In đĩa</td>
                <td></td>
                <td>300.000đ</td>
              </tr>
            </table>

            <p style="font-size: 16px">Thời gian trả kết quả:</p>

            <table class="table table-bordered">
              <tr>
                <th scope="col" colspan="2" width="200">
                  <strong>Thời gian tiếp nhận</strong>
                </th>
                <th scope="col" colspan="2">
                  <strong>Thời gian trả kết quả</strong>
                </th>
              </tr>

              <tr>
                <td scope="row">Ngày</td>
                <td>Giờ</td>
                <td width="190">Trả kết quả qua mail</td>
                <td>Trả kết qua bưu điện</td>
              </tr>

              <tr>
                <td scope="row" rowspan="2">Thứ 2 - thứ 6</td>
                <td>7h30</td>
                <td>11h30 cùng ngày</td>
                <td rowspan="2">
                  <div>- Trong vòng 05 ngàylàm việc (trong thành phố)</div>
                  <div>- Trong vòng 07 ngày làm việc (ngoài tình)</div>
                </td>
              </tr>

              <tr>
                <td>12h</td>
                <td>16h30 cùng ngày</td>
              </tr>
            </table>

            <p>
              <i class="fas fa-caret-right"></i>
              <strong>Lưu ý : </strong> Trong trường hợp bạn đăng ký trả kết quả
              qua bưu điện nhưng cần sớm hơn thời gian trả theo quy định, bạn
              muốn nhận kết quả tại Bệnh viện, Bạn liên hệ số ĐT CSKH
              <strong>+(84)37245959</strong> để được nhân viên hỗ trợ.
            </p>

            <p class="text-danger">
              <i class="fas fa-caret-right"></i> Không áp dụng Bảo hiểm y tế
            </p>
          </div>
        </template>

        <template v-if="type == 'tracuulichsukhambenh'">
          <div class="noidung-quydinh">
            <p style="font-size: 16px">
              <i class="fas fa-caret-right"></i> Áp dụng cho các đối tượng đã
              khám và điều trị tại bệnh viện trong thời gian 01 năm gần nhất.
            </p>

            <p style="font-size: 16px">
              <i class="fas fa-caret-right"></i> Một lần tra cứu tối đa 03 tháng
            </p>

            <p style="font-size: 16px">Chi phí và thời gian trả kết quả:</p>

            <table class="table table-bordered">
              <tr>
                <th colspan="2" width="150">
                  <strong>Tiếp nhận</strong>
                </th>
                <th scope="col" rowspan="2">
                  <strong>Trả lời </strong>
                </th>

                <th scope="col" rowspan="2">
                  <strong>Phí dịch vụ</strong>
                </th>
              </tr>
              <tr>
                <td scope="row">Ngày</td>
                <td>Giờ</td>
              </tr>

              <tr>
                <td scope="row" rowspan="2">Thừ 2 - thứ 6</td>
                <td>7h30</td>
                <td>11h30 cùng ngày</td>
                <td rowspan="2"><b>50.000đ</b></td>
              </tr>

              <tr>
                <td scope="row">12h</td>
                <td>16h30 cùng ngày</td>
              </tr>

              <tr>
                <td scope="row">Thứ 7, CN Lễ</td>
                <td>10h</td>
                <td>15h cùng ngày</td>
                <td><b>100.000đ</b></td>
              </tr>
            </table>

            <p class="text-danger">
              <i class="fas fa-caret-right"></i> Không áp dụng Bảo hiểm y tế
            </p>
          </div>
        </template>

        <template v-if="type == 'dangkykhambenh'">
          <div class="noidung-quydinh">
            <p style="font-size: 16px">
              <i class="fas fa-caret-right"></i>Đăng ký trước 14h của ngày hôm
              trước ( CN - thứ 6)
            </p>

            <p style="font-size: 16px">
              <i class="fas fa-caret-right"></i> Áp dụng cho các đối tượng đăng
              ký khám theo yêu cầu
            </p>

            <p style="font-size: 16px">
              <i class="fas fa-caret-right"></i>Một lần đăng ký chỉ áp dụng cho
              01 chuyên khoa (có thể đang ký khám 02 chuyên khoa/ngày)
            </p>

            <p style="font-size: 16px">Chi phí cho các dịch vụ:</p>

            <table class="table table-bordered">
              <tr>
                <th  width="100">
                  <strong>STT</strong>
                </th>
                <th  >
                  <strong>Tên dịch vụ </strong>
                </th>
                <th >
                  <strong>Thời gian áp dụng</strong>
                </th>
                   <th >
                  <strong>Chi phí</strong>
                </th>
              </tr>
              <tr>
                <td >1</td>
                <td>Đăng ký khám theo yêu cầu</td>
                <td>Thứ 2 – Thứ 7</td>
                <td>150.000đ/ chuyên khoa</td>
              </tr>

                 <tr>
                <td >2</td>
                <td>Đăng ký khám chọn Bác sĩ</td>
                <td>Thứ 2 – Thứ 6</td>
                <td>300.000đ</td>
              </tr>

            </table>

          </div>
        </template>

        <p class="mt-4" v-if="recentOpen == false">
          <b-form-checkbox
            id="checkbox-1"
            v-model="checkOK"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
            >Đồng ý sử dụng và thanh toán phí dịch vụ.</b-form-checkbox
          >
        </p>
      </div>
      <span slot="footer" class="dialog-footer" v-if="recentOpen == false">
        <el-button @click="comeBack()">Quay lại Trang chủ</el-button>
        <el-button type="primary" @click="handleOK()">Đồng ý</el-button>
      </span>

      <span slot="footer" class="dialog-footer" v-else>
        <el-button type="primary" @click="handleClose()">Đóng</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["isOpen", "recentOpen", "type"],
  async fetch() {},
  data() {
    return {
      checkOK: "not_accepted",
      // dialogVisible: true,
    };
  },
  mounted() {
    // if (localStorage.hoibacsi == "true") {
    //   this.dialogVisible = false;
    // }
  },
  methods: {
    comeBack() {
      this.$router.push({
        path: "/login",
      });
    },
    handleOK() {
      if (this.checkOK == "not_accepted") {
        this.$alert(
          "Bạn cần đồng ý để có thể tiếp tục sử dụng dịch vụ",
          "Thông báo",
          {
            confirmButtonText: "Quay lại",
            callback: (action) => {},
          }
        );
      } else {
        // this.dialogVisible = false;
        this.$emit("open-modal", false);

        this.$axios
          .post("Tracking/Insert", {
            //         [Description("Đặt lịch hẹn")]
            // Apppointment = 1,
            // [Description("Đặt lịch hẹn Vip")]
            // ApppointmentVip = 2,
            // [Description("Toa thuốc")]
            // Precription = 3,
            // [Description("Kết quả Xét nghiệm")]
            // Radiography = 4,
            // [Description("Thanh toán viện phí")]
            // HospitalFee = 5,
            // [Description("Đặt câu hỏi")]
            // Question =6,
            serviceName: "1",
          })
          .then((response) => {
            console.log(response);
            if (response.data.success === true) {
              // localStorage.hoibacsi = true;

              const loading = this.$loading({
                lock: true,
                text: "Đang xử lý",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)",
              });
              setTimeout(() => {
                loading.close();
                // this.$router.push({
                //   name: "thanhcong",
                //   params: {
                //     message: response.data.message,
                //     doctorId: this.form.doctorId,
                //   },
                // });

                this.$message({
                  type: "success",
                  message: "Xác nhận thành công",
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
      }
    },
    handleClose() {
      this.$emit("open-modal", false);
    },
  },
};
</script>

<style lang="scss">
</style>

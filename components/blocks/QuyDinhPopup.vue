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
              <b-td scope="row" rowspan="2">Thừ 2 - thứ 6</b-td>
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
          <strong>Đối tượng áp dụng : </strong> chính người bệnh đủ 18 tuổi trở
          lên và có các triệu chứng hay bệnh: Đau đầu, chóng mặt, đau lung, đau
          ngực, đau nhức toàn than, RLTH, viêm đường tiểu, bệnh lý tai mũi họng,
          bệnh lý răng hàm mặt…
        </p>

        <p class="text-danger">
          <i class="fas fa-caret-right"></i> Không áp dụng:  Trường hợp cấp cứu hoặc có Bảo hiểm y tế
          cứu
        </p>

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
  props: ["isOpen", "recentOpen"],
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

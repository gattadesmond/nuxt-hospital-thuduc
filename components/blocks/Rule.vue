<template>
  <div class="modal-benhvien">
    <el-dialog
      title="Quy trình và nội quy sử dụng"
      :visible.sync="dialogVisible"
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
          <i class="fas fa-calendar-alt"></i> Thời gian
        </p>

        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">
                <strong>Thời gian tiếp nhận nội dung</strong>
              </th>
              <th scope="col">
                <strong>Bác sĩ trả lời</strong>
              </th>
              <th scope="col">
                <strong>Thời lượng trao đổi nội dung tư vấn</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">7h – 10h</th>
              <td>15h cùng ngày</td>
              <td>30 phút</td>
            </tr>

            <tr>
              <th scope="row">11h – 7h ngày hôm sau</th>
              <td>10h cùng ngày</td>
              <td>30 phút</td>
            </tr>

            <tr>
              <th scope="row">Thứ 7, CN, Lễ</th>
              <td>10h ngày thứ 2 (Thứ 7, CN), ngày đi làm đầu tiên sau lễ (Lễ)</td>
              <td>30 phút</td>
            </tr>
          </tbody>
        </table>

        <p>
          <i class="fas fa-caret-right"></i> Áp dụng cho chính người bệnh đủ 18 tuổi trở lên và có các triệu chứng hay bệnh: Đau đầu, chóng mặt, đau lung, đau ngực, đau nhức toàn than, RLTH, viêm đường tiểu, bệnh lý tai mũi họng, bệnh lý răng hàm mặt…
        </p>

        <p class="text-danger">
          <i class="fas fa-caret-right"></i> Không áp dụng: BHYT, trường hợp cấp cứu
        </p>

        <p class="mt-4">
          <b-form-checkbox
            id="checkbox-1"
            v-model="checkOK"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >Tôi đồng ý sử dụng và thanh toán phí dịch vụ.</b-form-checkbox>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Quay lại</el-button>
        <el-button type="primary" @click="handleOK()">Đồng ý</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  // props: ["doctorId"],
  async fetch() {},
  data() {
    return {
      checkOK: "not_accepted",
      dialogVisible: true,
    };
  },
  mounted() {
    if (localStorage.hoibacsi == "true") {
      this.dialogVisible = false;
    }
  },
  methods: {
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
        this.dialogVisible = false;

        this.$axios
          .post("Tracking/Insert", {
            serviceName: "1",
          })
          .then((response) => {
            console.log(response);
            if (response.data.success === true) {
              localStorage.hoibacsi = true;

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
                  type: "info",
                  message:
                    "Xác nhận thành công, mời bạn đặt câu hỏi cho Bác sĩ",
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
  },
};
</script>

<style lang="scss">
</style>

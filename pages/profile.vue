<template>
  <div class="bg-white" v-if="this.$auth.loggedIn">
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
                  Thông tin cá nhân
                </li>
              </ol>
            </nav>
            <div class="banner-header text-left">
              <h1 class="text-white">Thông tin cá nhân</h1>
              <!-- <p class="lead text-white">Xem và tải về toa thuốc</p> -->
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
          <div class="col-md-4">
            <div class="profile-sidebar">
              <div class="widget-profile pro-widget-content">
                <div class="profile-info-widget">
                  <div class="mb-3">
                    <b-avatar
                      size="120px"
                      :src="`http://myhealthdemo.benhvienkhuvucthuduc.vn/${this.$auth.user.avatar}`"
                    ></b-avatar>
                  </div>
                  <div class="profile-det-info">
                    <div class="h5 font-body">
                      {{ this.$auth.user.fullName }}
                    </div>

                    <div class="patient-details">
                      <div class="mb-1" v-if="this.$auth.user.birthDay">
                        <i class="fas fa-calendar"></i>
                        {{ this.$auth.user.birthDay | formatDate3 }}
                      </div>

                      <div class="mb-0" v-if="this.$auth.user.fullAddress">
                        <i class="fas fa-map-marker-alt"></i>
                        {{ this.$auth.user.fullAddress }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dashboard-widget">
                <nav class="dashboard-menu">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fas fa-columns"></i>
                        <span>Thông tin</span>
                      </a>
                    </li>
                    <li class="d-none">
                      <a href="favourites.html">
                        <i class="fas fa-bookmark"></i>
                        <span>Thông báo</span>
                        <small class="unread-msg text-white">3</small>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div class="col-md-8">
            <div class="card">
              <div class="card-body">
                <div class="form-group">
                  <div class="change-avatar">
                    <div class="profile-img">
                      <b-avatar
                        size="72px"
                        rounded="sm"
                        :src="`${this.fileAvatarUrl}`"
                      ></b-avatar>
                    </div>

                    <div class="upload-img">
                      <div class>
                        <b-form-file
                          v-model="fileAvatar"
                          :state="Boolean(fileAvatar)"
                          @change="onFileChange"
                          placeholder="Chọn hình để tải lên"
                          drop-placeholder="Drop file here..."
                          accept="image/*"
                          plain
                        ></b-form-file>

                        <!-- <b-form-file v-model="file2" class="mt-3" plain></b-form-file> -->
                      </div>
                      <small class="form-text text-muted"
                        >Định dạng JPG, GIF or PNG. Max size of 2MB</small
                      >
                    </div>

                    <div v-if="fileAvatar">
                      <a
                        href
                        class="btn btn-outline-primary btn-sm"
                        @click.stop.prevent="submitUpload()"
                      >
                        <span>
                          <i class="fa fa-upload"></i> Tải lên hình đã chọn
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <el-form
                  ref="form"
                  :rules="rules"
                  :model="form"
                  label-width="0px"
                >
                  <!-- <div class="info-widget"> -->

                  <div class="row">
                    <div class="col-md-6">
                      <el-form-item prop="fullName">
                        <div class>
                          <div class>Họ và tên</div>
                          <el-input
                            class="form-soju-input"
                            placeholder
                            v-model="form.fullName"
                          ></el-input>
                        </div>
                      </el-form-item>
                    </div>

                    <div class="col-md-6">
                      <el-form-item prop="birthDay">
                        <div class>
                          <div class>Ngày sinh</div>
                          <!-- <el-input class="form-soju-input" placeholder v-model="form.birthDay"></el-input> -->

                          <el-date-picker
                            class="w-100"
                            v-model="form.birthDay"
                            type="date"
                            placeholder="Ngày sinh"
                            format="dd-MM-yyyy"
                            value-format="yyyy-MM-dd"
                          ></el-date-picker>
                        </div>
                      </el-form-item>
                    </div>
                  </div>

                  <el-form-item prop="fullAddress">
                    <div class>
                      <div class>Địa chỉ</div>
                      <el-input
                        class="form-soju-input"
                        placeholder="Chưa điền thông tin"
                        v-model="form.fullAddress"
                      ></el-input>
                    </div>
                  </el-form-item>

                  <div class="row">
                    <div class="col-md-6">
                      <el-form-item prop="phoneNumber">
                        <div class>
                          <div class="f">Số điện thoại</div>
                          <el-input
                            class="form-soju-input"
                            placeholder="Chưa có số điện thoại"
                            v-model="form.phoneNumber"
                          ></el-input>
                        </div>
                      </el-form-item>
                    </div>

                    <div class="col-md-6">
                      <el-form-item prop="email">
                        <div class>
                          <div class>Email</div>
                          <el-input
                            class="form-soju-input"
                            placeholder
                            v-model="form.email"
                          ></el-input>
                        </div>
                      </el-form-item>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <el-form-item prop="sex">
                        <div class>
                          <div class>Giới tính</div>

                          <el-radio v-model="form.sex" label="nam"
                            >Nam</el-radio
                          >
                          <el-radio v-model="form.sex" label="nữ">Nữ</el-radio>
                        </div>
                      </el-form-item>
                    </div>
                  </div>

                  <el-form-item class="mt-5">
                    <!-- <el-button>Hủy</el-button> -->
                    <el-button
                      type="primary"
                      class="btn btn-primary submit-btn"
                      @click="submitForm('form')"
                      :disabled="isFormEnable"
                      >Cập nhập thông tin</el-button
                    >
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { diff } from "deep-diff";

var defaultForm = {};

export default {
  auth: true,
  components: {},

  data() {
    return {
      fileAvatar: null,
      fileAvatarUrl: null,
      form: {
        fullName: "",
        birthDay: "",
        email: "",
        fullAddress: "",
        phoneNumber: "",
        sex: "",
      },
      rules: {
        fullName: [
          {
            required: true,
            message: "Vui lòng ghi họ tên",
            trigger: "blur",
          },
        ],
        birthDay: [
          {
            required: true,
            message: "Vui lòng nhập ngày sinh",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Vui lòng nhập địa chỉ Email",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Địa chỉ Email không hợp lệ",
            trigger: "blur",
          },
        ],
        fullAddress: [
          {
            required: true,
            message: "Vui lòng nhập địa chỉ của bạn",
            trigger: "blur",
          },
        ],
        phoneNumber: [
          {
            required: true,
            pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g,
            message: "Vui lòng nhập số điện thoại hợp lệ",
            trigger: "blur",
          },
        ],
        sex: [
          {
            required: true,
            message: "Vui lòng chọn giới tính",
            trigger: "blur",
          },
        ],
      },
    };
  },

  computed: {
    isFormEnable() {
      if (!diff(this.form, defaultForm)) return true;
      return false;
    },
  },

  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      // console.log(file);
      this.fileAvatarUrl = URL.createObjectURL(file);
    },

    submitUpload() {
      // console.log(this.fileAvatarUrl);
      // console.log(this.fileAvatar);
      let formData = new FormData();

      formData.append("file", this.fileAvatar);

      this.$axios.post("Users/UploadAvatar", formData).then((response) => {
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
            type: "success",
            callback: (action) => {
              window.location.reload(true);
              // this.$message({
              //   type: "info",
              //   message: `action: ${action}`
              // });
            },
          });
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(this.form.birthDay);
          // alert("fewe");
          this.$axios
            .post("Users/MyProfile", {
              email: this.form.email,
              fullName: this.form.fullName,
              fullAdress: this.form.fullAddress,
              sex: this.form.sex,
              phoneNumber: this.form.phoneNumber,
              birthDay: this.form.birthDay,
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
                  this.$alert("Thông tin thay đổi thành công", "Thông báo", {
                    confirmButtonText: "Đóng",
                    type: "success",
                    callback: (action) => {
                      window.location.reload(true);
                    },
                  });
                  // window.location.reload(true);
                  // window.location.href = response.data.data.callbackUrl;
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
              this.$alert("Có lỗi xảy ra, vui lòng thử lại .", "Thông báo", {
                confirmButtonText: "Đóng",
                type: "error",
                callback: (action) => {
                  // this.$message({
                  //   type: "info",
                  //   message: `action: ${action}`
                  // });
                },
              });
              // this.errored = true;
            });
        } 
      });
    },
  },

  mounted: function () {
    if (this.$auth.loggedIn) {
      this.form.fullName = this.$auth.user.fullName;
      this.form.birthDay = this.$auth.user.birthDay;
      this.form.email = this.$auth.user.email;
      this.form.fullAddress = this.$auth.user.fullAddress;
      this.form.phoneNumber = this.$auth.user.phoneNumber;
      this.form.sex = this.$auth.user.sex;
    }

    if (this.$auth.loggedIn) {
      defaultForm = {
        fullName: this.$auth.user.fullName,
        birthDay: this.$auth.user.birthDay,
        email: this.$auth.user.email,
        fullAddress: this.$auth.user.fullAddress,
        phoneNumber: this.$auth.user.phoneNumber,
        sex: this.$auth.user.sex,
      };
    }
  },
  head() {
    return {
      title: "Thông tin cá nhân",
    };
  },
};
</script>


<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style lang="scss">
.custom-file-input ~ .custom-file-label::after {
  content: "Tải lên ảnh" !important;
}
</style>
<template>
  <section
    class="section section-space section-bg section-home"
    style="background-color: rgb(247, 247, 247)"
  >
    <div class="container">
      <div class="row align-items-center" style="min-height: 489px;">
        <div class="col-md-10 offset-md-1">
          <!-- Login Tab Content -->
          <div class="account-content">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7 col-lg-6 login-left">
                <img src="img/bv/undraw_medicine_b1ol.svg" class="img-fluid" alt=" Login" />
              </div>
              <div class="col-md-12 col-lg-6 login-right">
                <div class="login-header">
                  <h3>
                    Đăng nhập
                    <span>Hệ thống</span>
                  </h3>
                </div>
                <el-form :model="login" :rules="rules" ref="login">
                  <div class="form-group">
                    <label class>Mã y tế</label>

                    <el-form-item label prop="userName">
                      <el-input v-model="login.userName"></el-input>
                    </el-form-item>
                  </div>

                  <div class="form-group">
                    <label class>Mật khẩu</label>

                    <el-form-item label prop="password">
                      <el-input type="password" v-model="login.password"></el-input>
                    </el-form-item>
                  </div>

                  <el-form-item>
                    <button
                      class="btn btn-primary btn-block"
                      @click.stop.prevent="submitForm('login')"
                    >Đăng nhập</button>
                  </el-form-item>
                </el-form>

                <div class="login-or">
                  <span class="or-line"></span>
                  <span class="span-or">or</span>
                </div>

                <div class="text-center dont-have">
                  Tải khoản demo
                  <div>
                    username :
                    <strong>teo</strong>
                  </div>
                  <div>
                    password :
                    <strong>Admin1@34</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Login Tab Content -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      login: {
        userName: "",
        password: "",
      },
      rules: {
        userName: [
          {
            required: true,
            message: "Bạn chưa nhập tên tài khoản",
            trigger: "blur",
          },
          {
            min: 3,
            message: "Tên tài khoản không hợp lệ",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Bạn chưa nhập mật khẩu",
            trigger: "blur",
          },
          {
            min: 6,
            message: "Mật khẩu có ít nhất 6 kí tự",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
      } catch (err) {
        this.$alert(err.response.data.message, "Có lỗi xảy ra", {
          confirmButtonText: "Đóng",
        });
      }
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: "Đang xử lý",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)",
          });
          setTimeout(() => {
            loading.close();
            this.userLogin();
          }, 1000);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.section-home {
  min-height: calc(100vh - 60px);
}
.login-right {
  background-color: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  padding: 25px;
}
</style>

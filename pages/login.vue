<template>
  <section
    class="section section-space section-bg section-home"
    style="background-color: rgb(247, 247, 247)"
  >
    <div class="container">
      <!-- <div>
      <div>
        <label>Username</label>
        <input type="text" v-model="login.userName" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button @click="userLogin">Submit</button>
      </div>
      </div>-->

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
                <div class="form-group">
                  <label class>Tên tài khoản</label>

                  <input type="text" v-model="login.userName" class="form-control" />
                </div>
                <div class="form-group">
                  <label class="focus-label">Mật khẩu</label>
                  <input type="password" v-model="login.password" class="form-control" />
                </div>
                <!-- <div class="text-right">
                  <a class="forgot-link" href="forgot-password.html">Forgot Password ?</a>
                </div>-->
                <button class="btn btn-primary btn-block" @click="userLogin">Đăng nhập</button>
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
        password: ""
      }
    };
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$axios.post(
          "http://myhealthdemo.benhvienkhuvucthuduc.vn/api/Users/login",
          {
            userName: this.login.userName,
            password: this.login.password
          }
        );
        console.log(response);
        await this.$auth.setToken(
          "local",
          "Bearer " + response.data.token.accessToken
        );
        // await this.$auth.setRefreshToken("local", response.data.refresh);
        await this.$auth.setUserToken(response.data.token.accessToken);
      } catch (e) {
        this.error = "Username or Password not valid";
      }
      // try {
      //   let response = await this.$auth.loginWith("local", {
      //     data: this.login
      //   });
      //   console.log(response);
      // } catch (err) {
      //   console.log(err);
      //   console.log("32432423");
      // }
    }
  }
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

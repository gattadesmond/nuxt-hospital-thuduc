<template>
  <header class="header Site-header">
    <nav class="navbar navbar-expand-lg header-nav">
      <div class="navbar-header">
        <!-- <a id="mobile_btn" href="javascript:void(0);">
          <span class="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>-->
        <nuxt-link to="/" class="navbar-brand logo">
          <img
            src="http://benhvienkhuvucthuduc.vn/Content/assets/img/logo.png"
            class="img-fluid"
            alt="Logo"
          />
        </nuxt-link>
      </div>
      <div class="main-menu-wrapper pl-lg-3">
        <div class="menu-header">
          <a href="index.html" class="menu-logo">
            <img src="/img/logo.png" class="img-fluid" alt="Logo" />
          </a>
          <a id="menu_close" class="menu-close" href="javascript:void(0);">
            <i class="fas fa-times"></i>
          </a>
        </div>
        <ul class="main-nav">
          <li>
            <nuxt-link to="/">Trang chủ</nuxt-link>
          </li>
          <!-- 
        <li>
          <a href="index.html">Giới thiệu</a>
          </li>-->

          <li>
            <nuxt-link to="/thongtinbacsi">Thông tin Bác sĩ</nuxt-link>
          </li>

          <li class="has-submenu">
            <a href="#">
              Dịch vụ
              <i class="fas fa-chevron-down"></i>
            </a>
            <ul class="submenu">
              <li>
                <nuxt-link to="/hoibacsi">Tư vấn sức khỏe</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/kqxetnghiem">Xem kết quả xét nghiệm</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/xemtoathuoc">Xem toa thuốc</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/datlichkham">Đặt lịch khám Bác sĩ</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/dongvienphi">Đóng tiền viện phí</nuxt-link>
              </li>
            </ul>
          </li>

          <!-- <li class="login-link">
          <a href="login.html">Login / Signup</a>
          </li>-->
        </ul>
      </div>

      <ul class="nav header-navbar-rht">
        <li class="nav-item contact-item">
          <div class="header-contact-img">
            <i class="far fa-hospital"></i>
          </div>
          <div class="header-contact-detail">
            <p class="contact-header">Liên hệ</p>
            <p class="contact-info-header">
              <a href="tel: (028) 3722 3556">(028) 3722 3556</a>
            </p>
          </div>
        </li>
        <!-- <li class="nav-item">
          <a
            class="nav-link header-login"
            href="#"
            data-toggle="modal"
            data-target="#modal-login"
          >Đăng nhập</a>
        </li>-->

        <!-- User Menu -->

        <li class="nav-item dropdown has-arrow logged-item" v-if="this.$auth.loggedIn">
          <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
            <span class="user-img">
             <b-avatar variant="primary" class="font-weight-bold" v-text="this.$auth.user.fullName.charAt(0).toUpperCase()"></b-avatar>
            </span>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="user-header">
              <div class="avatar avatar-sm">
              <b-avatar variant="primary" class="font-weight-bold" v-text="this.$auth.user.fullName.charAt(0).toUpperCase()"></b-avatar>
              </div>

              <div class="user-text">
                <div>
                  <strong>{{this.$auth.user.fullName}}</strong>
                </div>
                <p class="text-muted mb-0">{{this.$auth.user.email}}</p>
              </div>
            </div>
            <!-- <nuxt-link to="/profile" class="dropdown-item">Thông tin</nuxt-link> -->
            <!-- <a class="dropdown-item" href="doctor-profile-settings.html">Tùy chọn</a> -->
            <a class="dropdown-item" href @click.stop.prevent="logout()">Thoát</a>
          </div>
        </li>

        <!-- /User Menu -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

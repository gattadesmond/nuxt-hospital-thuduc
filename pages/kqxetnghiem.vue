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
                <li class="breadcrumb-item active" aria-current="page">Kết quả xét nghiệm</li>
              </ol>
            </nav>
            <div class="banner-header text-left">
              <h1 class="text-white">Xem kết quả xét nghiệm</h1>
              <p class="lead text-white">Xem và tải về kết quả cận lâm sàng</p>
            </div>
          </div>
        </div>
      </div>

      <div class="s-heading-bg w-100" style="background-image: url(img/bv/bg-heading.jpg)"></div>
    </section>

    <section class="section section-space" style="background-color: rgba(238, 242, 247, 1)">
      <div class="container">
        <div class="row no-gutters align-items-center">
          <div class="col">
            <div class="card-title kq-title">Recent document</div>
          </div>
          <div class="col-auto">
            <div class="kq-filter">
              <el-dropdown>
                <el-button type="primary">
                  Loại xét nghiệm
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>Xét nghiệm</el-dropdown-item>
                  <el-dropdown-item>X Quang</el-dropdown-item>
                  <el-dropdown-item>CT Scanner, MRI</el-dropdown-item>
                  <el-dropdown-item>Siêu âm</el-dropdown-item>
                  <el-dropdown-item>Nội soi</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              

                <el-popover
    placement="bottom"
    title="Title"
    width="200"
    trigger="click"
    content="this is content, this is content, this is content">
    <el-button slot="reference">Click to activate</el-button>
  </el-popover>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="kq__box">
              <div class="kq__box__body">
                <div class="kq__box__img">
                  <img src="http://html.iwthemes.com/mas/img/authorizations/doc.jpg" alt />
                </div>
              </div>

              <div class="kq__box__footer py-1">
                <div class="tt">X-quang</div>
                <div class="ff border-top">
                  <div class="row no-gutters align-items-center">
                    <div class="col">Ngày</div>
                    <div class="col-auto">22/05/2020</div>
                  </div>
                </div>
                <div class="ff border-top">
                  <div class="row no-gutters align-items-center">
                    <div class="col">Trạng thái</div>
                    <div class="col-auto">
                      <span class="alert p-1 px-2 m-0 alert-success d-inline-block">
                        <i class="fa fa-check"></i> Approved
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    return {};
  },
  methods: {},
  async fetch() {},

  head() {
    return {
      title: "Tư vấn bác sĩ"
    };
  }
};
</script>


<style lang="scss" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>

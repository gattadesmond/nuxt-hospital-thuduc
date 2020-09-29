<template>
  <div class="col-6 col-md-3 mb-4">
    <div class="doctor__item h-100">
      <div class="doctor__image">
        <a href="#" data-toggle="modal" data-target="#modal-bacsi">
          <div class="embed-responsive embed-responsive-9by16 overflow-hidden">
            <img
              :src="`http://benhvienkhuvucthuduc.vn/Content/uploads/ImageDoctors/${doctor.imageLink}`"
              class="embed-responsive-img img-cover"
              alt
            />
          </div>
        </a>
      </div>

      <div class="doctor__body">
        <div class="doctor__name text-primary">{{doctor.name}}</div>
        <div class="dashed">
          <span></span>
        </div>

        <div class="doctor__title">{{doctor.position}}</div>

        <div class="doctor__meta">
          <div class="doctor__meta__item">
            <span>Học vị :</span>
            {{doctor.certificate}}
          </div>

          <div class="doctor__meta__item">
            <span>Chuyên khoa :</span>
            {{doctor.department}}
          </div>
        </div>
      </div>

      <div class="doctor__footer">
        <template v-if="doctor.isInChargeofQnAForPatient">
          <nuxt-link to="/tuvansuckhoe" class="btn btn-block f1">
            <i class="far fa-calendar-alt"></i>
            Đặt lịch khám
          </nuxt-link>
        </template>
        <template v-if="doctor.isBooking">
          <nuxt-link
            :to="{ path : 'tuvansuckhoe', query: {doctorId: `${doctor.id}`}}"
            class="btn btn-block f2"
          >
            <i class="far fa-question-circle"></i>
            Gửi câu hỏi
          </nuxt-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    doctor: {
      type: Object,
      default: null,
    },
  },
  async fetch() {
    // const article = await fetch(
    //   `https://dev.to/api/articles/${this.$route.params.article}`
    // ).then(res => res.json());
    // if (article.id && article.user.username === this.$route.params.username) {
    //   this.article = article;
    //   this.$store.commit("SET_CURRENT_ARTICLE", this.article);
    // } else {
    //   // set status code on server
    //   if (process.server) {
    //     this.$nuxt.context.res.statusCode = 404;
    //   }
    //   throw new Error("Article not found");
    // }
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>

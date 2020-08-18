<template>
  <div class="booking-doc-info" v-show="doctorId != '' ">
    <div class="booking-doc-img">
      <!-- <img :src="`${doctorInfo.imageLink}`" alt="User Image" /> -->

      <b-avatar size="72px" rounded="sm" :src="`${doctorInfo.imageLink}`"></b-avatar>
    </div>

    <div class="booking-info">
      <h5>
        <a href="doctor-profile.html">{{doctorInfo.name}}</a>
      </h5>

      <div class="clinic-details">
        <p class="doc-location">
          <i class="fas fa-map-marker-alt"></i>
          {{doctorInfo.position}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["doctorId"],

  data() {
    return {
      doctorInfo: "",
    };
  },
  methods: {
    async getDoctorInfo() {
      // console.log(this.doctorId);
      if (this.doctorId != "") {
        const data = await this.$axios.$get(
          `Doctors/GetDoctorbyId/${this.doctorId}`
        );
        this.doctorInfo = data;
      }
    },
    // selectDoctorAction(e) {
    //   console.log(e)
    // }
  },
  watch: {
    doctorId: function () {
      this.getDoctorInfo();
      // console.log(this.doctorInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

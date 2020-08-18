<template>
 
</template>

<script>
export default {

  props: {
    doctorId: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      doctorInfo: ""
    };
  },
  methods: {
    async getDoctorInfo() {
      const data = await this.$axios.$get(`Doctors/GetAllDoctorForQnA`);
      this.doctorInfo = this.doctorInfo.concat(data);
      this.loading = false;
    },
    // selectDoctorAction(e) {
    //   console.log(e)
    // }
  },
  mounted: function () {
    this.getDoctorInfo();
    //  console.log(this.chuyenKhoa);
  },
};
</script>

<style lang="scss" scoped>
</style>

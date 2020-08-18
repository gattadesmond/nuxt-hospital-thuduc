<template>
  <el-select
    v-model="doctorsSelectId"
    filterable
    class="form-soju-input"
    no-match-text="Không có Bác sĩ "
    placeholder="Vui lòng chọn Bác sĩ"
    @change="$emit('select-doctor', doctorsSelectId)"
  >
    <el-option v-for="item in doctorsList" :key="item.id" :label="item.name" :value="item.id">
      <div class="row no-gutters flex-nowrap align-items-center">
        <div class="col-auto mr-2">
          <b-avatar square size="sm" :src="`${item.imageLink}`"></b-avatar>
        </div>
        <div class="col mr-2">
          <span style>{{ item.name }}</span>
        </div>

        <div class="col-auto">
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.position }}</span>
        </div>
      </div>
    </el-option>
  </el-select>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      isOpen: false,
      doctorsList: [],
      doctorsSelectId: "",
    };
  },
  methods: {
    async getDoctorsList() {
      const data = await this.$axios.$get(`Doctors/GetAllDoctorForQnA`);
      this.doctorsList = this.doctorsList.concat(data);
      this.loading = false;
    },
    // selectDoctorAction(e) {
    //   console.log(e)
    // }
  },
  mounted: function () {
    this.getDoctorsList();
    //  console.log(this.chuyenKhoa);
  },
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <el-select
    v-model="chuyenKhoaSelect"
    filterable
    class="form-soju-input"
    clearable
    no-match-text="Không có kết quả "
    placeholder="Vui lòng chọn Chuyên khoa"
    @change="$emit('select-chuyenkhoa', chuyenKhoaSelect)"
  >
    <el-option v-for="item in chuyenKhoa" :key="item.id" :label="item.name" :value="item.name">
      <div class="row no-gutters flex-nowrap align-items-center">
        <div class="col mr-2">
          <span style>{{ item.name }}</span>
        </div>
      </div>
    </el-option>
  </el-select>
</template>

<script>
export default {
  components: {  },
  props: ["openQuyDinh"],

  data() {
    return {
      isOpen: false,
      chuyenKhoa: [],
      chuyenKhoaSelect: "",
    };
  },
  methods: {
    async getChuyenKhoa() {
      const data = await this.$axios.$get(`Doctors/GetSpecialists`);
      this.chuyenKhoa = this.chuyenKhoa.concat(data);
      this.loading = false;
    },
  },
  mounted: function () {
    this.getChuyenKhoa();
    console.log(this.openQuyDinh);
    //  console.log(this.chuyenKhoa);
  },
};
</script>

<style lang="scss" scoped>
</style>

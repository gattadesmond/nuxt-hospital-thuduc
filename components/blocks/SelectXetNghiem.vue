<template>
  <el-select
    v-model="loaiXetNghiemSelect"
    filterable
    class="form-soju-input"
    clearable
    no-match-text="Không có kết quả "
    placeholder="Loại xét nghiệm"
    @change="$emit('select-xetnghiem', loaiXetNghiemSelect)"
  >
    <el-option v-for="item in loaiXetNghiem" :key="item.id" :label="item.name" :value="item.id">
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

  data() {
    return {
      isOpen: false,
      loaiXetNghiem: [],
      loaiXetNghiemSelect: "",
    };
  },
  methods: {
    async getChuyenKhoa() {
      const data = await this.$axios.$get(`Radiograpy/GetByRadiographyService`);
      this.loaiXetNghiem = this.loaiXetNghiem.concat(data);
      this.loading = false;
      console.log(data);
    },
  },
  mounted: function () {
    this.getChuyenKhoa();
    //  console.log(this.chuyenKhoa);
  },
};
</script>

<style lang="scss" scoped>
</style>

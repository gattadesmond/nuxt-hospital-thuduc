<template>
  <div v-if="this.$auth.loggedIn">
    <div class="row sm-gutters mt-4">
      <div class="col-6">
        Họ tên :
        <strong v-if="this.$auth.user.fullName">{{this.$auth.user.fullName}}</strong>
        <span class="text-black-50" v-else>Chưa có</span>
      </div>

      <div class="col-6">
        Tuổi :
        <strong v-if="this.$auth.user.birthDay">{{new Date().getFullYear() - new Date(this.$auth.user.birthDay).getFullYear()}}</strong>
        <span class="text-black-50" v-else>Chưa có</span>
      </div>
    </div>

    <div class="row sm-gutters mt-4">
      <div class="col-6">
        Địa chỉ :
        <strong v-if="this.$auth.user.fullAddress">{{this.$auth.user.fullAddress}}</strong>
        <span class="text-black-50" v-else>Chưa có</span>
      </div>

      <div class="col-6">
        Điện thoại :
        <strong v-if="this.$auth.user.phoneNumber">{{this.$auth.user.phoneNumber}}</strong>
        <span class="text-black-50" v-else>Chưa có</span>
      </div>
    </div>

    <div class="row sm-gutters mt-4">
      <div class="col-6">
        Email :
        <strong v-if="this.$auth.user.email">{{this.$auth.user.email}}</strong>
        <span class="text-black-50" v-else>Chưa có</span>
      </div>

      <div class="col-6">
        Giới tính: 
         <strong v-if="this.$auth.user.sex">{{this.$auth.user.sex}}</strong>
        <span class="text-black-50" v-else>Chưa có</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>

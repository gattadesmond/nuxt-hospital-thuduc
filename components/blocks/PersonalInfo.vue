<template>
  <div v-if="this.$auth.loggedIn">
    <div class="row sm-gutters mt-4">
      <div class="col-6">
        Họ tên :
        <strong v-if="this.$auth.user.fullName">{{this.$auth.user.fullName}}</strong>
        <strong v-else>Chưa có</strong>
      </div>

      <div class="col-6">
        Tuổi :
        <strong v-if="this.$auth.user.Age">{{this.$auth.user.Age}}</strong>
        <strong v-else>Chưa có</strong>
      </div>
    </div>

    <div class="row sm-gutters mt-4">
      <div class="col-6">
        Địa chỉ :
        <strong v-if="this.$auth.user.fullAddress">{{this.$auth.user.fullAddress}}</strong>
        <strong v-else>Chưa có</strong>
      </div>

      <div class="col-6">
        Điện thoại :
        <strong v-if="this.$auth.user.phoneNumber">{{this.$auth.user.phoneNumber}}</strong>
        <strong v-else>Chưa có</strong>
      </div>
    </div>

    <div class="row sm-gutters mt-4">
      <div class="col-6">
        Email :
        <strong v-if="this.$auth.user.email">{{this.$auth.user.email}}</strong>
        <strong v-else>Chưa có</strong>
      </div>

      <!-- <div class="col-6">
        Bảo hiểm:
        <strong>Không</strong>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
</style>

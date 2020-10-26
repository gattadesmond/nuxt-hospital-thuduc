<template>
  <div class="mt-4">
    <template v-if="isLoading && !timeSchedule.length">
      <div class="text-center" v-if="isLoading">
        <b-spinner variant="primary" label="Spinning"></b-spinner>
      </div>
    </template>

    <template v-else-if="timeSchedule.length == 0">
        <div style="padding: 20px; background-color: #fafafa; color: gray; text-align: center">
          Bác sĩ không có lịch khám
        </div>
    </template>
    
    <template v-else>
      <el-tabs
        type="border-card"
        v-model="daySelect"
        @tab-click="handleTabClick"
      >
        <el-tab-pane v-for="item in timeSchedule" :key="item.day">
          <div slot="label">
            <div class="date__item">
              <div class="date">{{ item.dayName }}</div>
              <div class="day">{{ item.dayFormat }}</div>
            </div>
          </div>

          <div class="time-slot">
            <ul class="clearfix">
              <!-- <li>
                <a class="timing selected" href="#">
                  <span>8:00</span>
                  <span>AM</span>
                </a>
              </li>-->

              <li v-for="time in item.times" :key="time.value">
                <span
                  class="timing"
                  v-bind:class="{ selected: time.value == timeSelect }"
                  v-on:click.stop="checkTimeSchedule(time.value)"
                >
                  <span>{{ time.name }}</span>
                  <!-- <span>AM</span> -->
                </span>
              </li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["doctorId", "loaiKham"],
  data() {
    return {
      isLoading: true,
      timeSchedule: [],
      timeSelect: null,
      daySelect: "",
      daySelectFull: "",
    };
  },
  methods: {
    async getTimeSchedule() {
      // if (this.doctorId != "") {
      //   console.log("doctorId", this.doctorId);
      //   console.log("loaiKham", this.loaiKham);
      // }
      var data = null;

      //  console.log("loaiKham", this.loaiKham);

      if (this.doctorId != "" && this.loaiKham == 2) {
        data = await this.$axios.$get(
          `Appointment/GetTimeWorking?doctorId=${this.doctorId}`
        );
      } else {
        data = await this.$axios.$get(`Appointment/GetTimeWorking`);
      }

      // const data = await this.$axios.$get(`Appointment/GetTimeWorking`);

      this.timeSchedule = [];
      this.timeSchedule = this.timeSchedule.concat(data);
      this.isLoading = false;
      // console.log("fwef", this.timeSchedule);
    },

    checkTimeSchedule: function (time) {
      this.timeSelect = time;

      this.daySelectFull = this.timeSchedule[
        this.daySelect ? this.daySelect : 0
      ].day;

      // console.log("timeSelect", this.timeSelect);
      // console.log("daySelect", this.daySelect);
      // console.log("daySelectFull", this.daySelectFull);

      this.$emit("time-select", {
        timeSelect: this.timeSelect,
        daySelectFull: this.daySelectFull,
      });
    },

    handleTabClick: function (tab, event) {
      this.timeSelect = "";

      this.$emit("time-select", {
        timeSelect: this.timeSelect,
        daySelectFull: this.daySelectFull,
      });

      // console.log("daySelectFull", this.daySelectFull);
    },
  },
  mounted: function () {
    this.getTimeSchedule();
  },
  watch: {
    doctorId: function () {
      this.getTimeSchedule();
      // console.log(this.doctorInfo);
    },
     loaiKham: function () {
      this.getTimeSchedule();
      // console.log(this.doctorInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

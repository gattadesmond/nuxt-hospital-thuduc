<template>
  <div class="mt-4">
    <template v-if="isLoading && !timeSchedule.length">
      <div class="text-center" v-if="isLoading">
        <b-spinner variant="primary" label="Spinning"></b-spinner>
      </div>
    </template>
    <template v-else>
      <el-tabs type="border-card">
        <el-tab-pane v-for="item in timeSchedule" :key="item.dayOfWeek">
          <div slot="label">
            <div class="date__item">
              <div class="date">{{item.dayName}}</div>
              <div class="day">{{item.dayFormat}}</div>
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
                <span class="timing" v-bind:class="{selected : time.value == timeScheduleSelect}" v-on:click.stop="checkTimeSchedule(time.value)">
                  <span>{{time.name}}</span>
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
  props: [],

  data() {
    return {
      isLoading: true,
      timeSchedule: [],
      timeScheduleSelect: null,
    };
  },
  methods: {
    async getTimeSchedule() {
      const data = await this.$axios.$get(`Appointment/GetTimeWorking`);
      this.timeSchedule = this.timeSchedule.concat(data);
      this.isLoading = false;
      console.log(this.timeSchedule);
    },

    checkTimeSchedule: function (time) {
      this.timeScheduleSelect = time;

      console.log("time", time);
    },
  },
  mounted: function () {
    this.getTimeSchedule();
  },
};
</script>

<style lang="scss" scoped>
</style>

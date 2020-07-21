<template>
  <div>
    <!-- <div v-if="$auth.loggedIn">
      {{$auth.user.email}}
      <b-button>Logout</b-button>
    </div>
      <div v-else>
       <b-button href="/login">Login</b-button>
    </div> -->
    <!-- <div v-if="$auth.loggedIn">
      {{$auth.user.email}}
      <b-button>Logout</b-button>
    </div>

    <div v-else>
       <b-button href="/login">Login</b-button>
    </div>-->

    <the-header />
    <Nuxt keep-alive />
    <the-footer />
  </div>
</template>

<style>
</style>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter
  },
  mounted() {}
};
</script>
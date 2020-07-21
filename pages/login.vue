<template>
  <div>
    <div>
      <label>Username</label>
      <input type="text" v-model="login.userName" />
    </div>
    <div>
      <label>Password</label>
      <input type="text" v-model="login.password" />
    </div>
    <div>
      <button @click="userLogin">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$axios.post("http://myhealthdemo.benhvienkhuvucthuduc.vn/api/Users/login", {
          userName: this.login.userName,
          password: this.login.password
        });
        console.log(response);
        await this.$auth.setToken(
          "local",
          "Bearer " + response.data.token.accessToken
        );
        // await this.$auth.setRefreshToken("local", response.data.refresh);
        await this.$auth.setUserToken(response.data.token.accessToken);
      } catch (e) {
        this.error = "Username or Password not valid";
      }
      // try {
      //   let response = await this.$auth.loginWith("local", {
      //     data: this.login
      //   });
      //   console.log(response);
      // } catch (err) {
      //   console.log(err);
      //   console.log("32432423");
      // }
    }
  }
};
</script>
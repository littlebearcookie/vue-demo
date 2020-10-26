<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-4 com-sm-12 justify-content-left">
        <h3>{{ $t("Login.__login") }}</h3>
        <div class="input-group input-group-sm my-3">
          <input
            class="form-control"
            :placeholder="$t('Login.__enterUserName')"
            v-model="user_name"
          />
        </div>
        <button type="button" class="btn btn-success" @click="login()">
          {{ $t("Login.__login") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user_name: "",
    };
  },
  methods: {
    login() {
      this.$session.start();
      this.$session.set("user_name", this.user_name);
      this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

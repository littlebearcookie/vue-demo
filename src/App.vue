<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand>
        <b-link :to="{ name: 'home' }">
          <img src="@/assets/logo.png" id="logo" />
        </b-link>
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'home' }">{{ $t("__home") }}</b-nav-item>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown right>
          <template v-slot:button-content>{{ $t("__language") }}</template>
          <b-dropdown-item @click="switch_lang('en')">English</b-dropdown-item>
          <b-dropdown-item @click="switch_lang('tw')">繁體中文</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" v-if="this.$session.get('user_name')">
        <b-nav-text>
          &nbsp;{{ this.$session.get("user_name") }}&nbsp;
        </b-nav-text>
        <b-nav-text>{{ $t("__hello") }}</b-nav-text>
        <b-nav-item @click="logout()">{{ $t("__logout") }}</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto" v-else>
        <b-nav-item :to="{ name: 'login' }">{{ $t("__login") }}</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    logout() {
      this.$session.destroy();
      this.$router.push({ name: "login" });
    },
    switch_lang(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("locale", lang);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#logo {
  height: 30px;
}
</style>

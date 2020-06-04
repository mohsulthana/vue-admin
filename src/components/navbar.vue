<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Multifunctional App</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-nav>
        <b-nav-item>
          <b-link to="/">Home</b-link>
        </b-nav-item>
        <b-nav-item>
          <b-link to="/barang">Barang</b-link>
        </b-nav-item>
        <b-nav-item>
          <b-link to="/kampus">Kampus</b-link>
        </b-nav-item>
        <b-nav-item v-if="token">
          <b-link to="/profile">Profile</b-link>
        </b-nav-item>
      </b-navbar-nav>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav v-if="!token">
            <b-link to="/">Login</b-link>
          </b-navbar-nav>
          <b-nav-item-dropdown right v-else>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              User
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  computed: {
    token() {
      return this.$store.getters.token;
    },
  },
};
</script>

<style scoped lang="scss">
 a {
    color: rgba(255, 255, 255, 0.5);

    &.router-link-exact-active {
      color: #ffffff;
    }
 }
</style>

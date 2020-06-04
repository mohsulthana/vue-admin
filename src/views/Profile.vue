<template>
  <div>
    <b-container class="mt-5">
      <b-list-group>
        <b-list-group-item>Username: {{ user.username }}</b-list-group-item>
        <b-list-group-item>Token: {{user.token }}</b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'profile',
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

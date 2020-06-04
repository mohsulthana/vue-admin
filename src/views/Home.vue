<template>
  <div class="home">
    <b-container>
      <b-form-group
        id="input-group-1"
        label="Username"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Password"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" @click="login" variant="primary">Submit</b-button>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      form: {
        username: '',
        password: '',
        token: 'I7SvBx1Tcz',
      },
    };
  },
  methods: {
    login() {
      const payload = {
        username: this.form.username,
        password: this.form.password,
        token: this.form.token,
      };
      this.$store.dispatch('login', payload)
        .then((response) => {
          console.info(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

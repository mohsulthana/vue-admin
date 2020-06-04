<template>
  <div class="kampus">
    <b-table striped hover :items="kampus"></b-table>
  </div>
</template>

<script>
export default {
  name: 'kampus',
  data() {
    return {
      kampus: [],
    };
  },
  methods: {
    fetchKampus() {
      this.$store.dispatch('fetchKampus')
        .then((response) => {
          this.kampus = response.data.data;
          console.info(this.kampus);
        })
        .catch((error) => {
          throw new Error(error);
        });
    },
  },
  mounted() {
    this.fetchKampus();
  },
};
</script>

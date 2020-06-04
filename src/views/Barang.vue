<template>
  <div class="barang">
    <b-table striped hover :items="barang"></b-table>
  </div>
</template>

<script>
export default {
  name: 'barang',
  data() {
    return {
      barang: [],
    };
  },
  methods: {
    fetchBarang() {
      this.$store.dispatch('fetchBarang')
        .then((response) => {
          this.barang = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.fetchBarang();
  },
};
</script>

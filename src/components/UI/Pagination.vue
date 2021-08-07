<template>
  <section>
    <!-- <h1>{{Object.keys(this.$store.getters.covidData).length}}</h1> -->
    <p>
      <button @click="changePage(-1)">Back</button>
      <span>Showing Page {{ page }} of {{ pages }}</span>
      <button @click="changePage(1)">Next</button>
    </p>
  </section>
</template>

<script>
export default {
  props: ["totalRecords"],
  data() {
    return {
      page: 1,
      perPage: 10,
    };
  },
  computed: {
    pages() {
      const remainder = this.totalRecords % this.perPage;

      if (remainder > 0) {
        return Math.floor(this.totalRecords / this.perPage) + 1;
      } else {
        return this.totalRecords / this.perPage;
      }
    },
  },
  methods: {
      changePage(val) {
          switch(val) {
              case -1: this.page = this.page > 1 ? this.page - 1 : this.page;
              break;
              case 1: this.page = this.page < this.pages ? this.page + 1 : this.page;
              break;
          }

          this.$emit('input', {page: this.page, perPage: this.perPage});
      }
  }
};
</script>

<style></style>

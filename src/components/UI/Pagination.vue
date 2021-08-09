<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item active page-link" @click="changePage(-1)">Previous</li>
        <li
          class="page-item page-link"
          @click="goToPage(i)"
          v-for="i in pages"
          :key="i"
          :class="active(i)"
        >
          {{ i }}
        </li>
        <li class="page-item page-link" @click="changePage(1)">Next</li>
      </ul>
    </nav>
  </div>
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
      switch (val) {
        case -1:
          this.page = this.page > 1 ? this.page - 1 : this.page;
          break;
        case 1:
          this.page = this.page < this.pages ? this.page + 1 : this.page;
          break;
      }

      this.$emit("input", { page: this.page, perPage: this.perPage });
    },
    active(val) {
      if (this.page === val) {
        return 'pg';
      }
    },
    goToPage(val) {
      this.page = val;
      this.$emit("input", { page: this.page, perPage: this.perPage });
    },
  },
};
</script>

<style scoped>
li {
  cursor: pointer !important;
}

.pg {
  background-color: #0d6efd;
  color: white;
}
</style>

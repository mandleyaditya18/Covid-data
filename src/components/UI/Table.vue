<template>
  <table
    v-if="tempData"
    class="table table-striped table-light table-bordered table-hover table-responsive"
  >
    <thead class="text-center">
      <tr>
        <th>State</th>
        <th v-for="(obj, ind) in config" :key="ind">
          {{ obj.title }}
          <span><i class="bi bi-filter" @click="sort(obj.key)"></i></span>
        </th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr v-for="(row, index) in covidData" :key="index">
        <td>{{ row.state }}</td>
        <td v-for="(obj, ind) in config" :key="ind">
          {{ row["total"][obj.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["covidData", "config"],
  data() {
    return {
      tempData: [],
      currentSort: "",
      isAsc: true,
    };
  },
  mounted() {
    this.tempData = this.covidData;
  },
  methods: {
    sort(ind) {
      if (ind === this.currentSort) {
        this.isAsc = !this.isAsc;
      }
      this.currentSort = ind;

      this.tempData = this.covidData.sort((a, b) => {
        if (a["total"][ind] > b["total"][ind]) {
          return this.isAsc ? 1 : -1;
        } else if (a["total"][ind] < b["total"][ind]) {
          return this.isAsc ? -1 : 1;
        }
        return 0;
      });
    },
  },
};
</script>

<style scoped>
i {
  cursor: pointer !important;
}
</style>

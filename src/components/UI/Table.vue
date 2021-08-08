<template>
  <table>
    <thead>
      <tr>
        <th>State</th>
        <th v-for="(obj, ind) in config" :key="ind" @click="sort(obj.key)">{{ obj.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in tempData" :key="index">
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
      tempData: this.covidData,
      currentSort: '',
      isAsc: true
    };
  },
  methods: {
    sort(ind) {
      if (ind === this.currentSort) {
        this.isAsc = !this.isAsc;
      }
      this.currentSort = ind;

      this.tempData = this.covidData.sort((a,b) => {
        if (a['total'][ind] > b['total'][ind]) {
          return this.isAsc ? 1 : -1;
        }
        else if (a['total'][ind] < b['total'][ind]) {
          return this.isAsc ? -1 : 1;
        }
        return 0;
      })
    },
  }
};
</script>

<style>
table,
td,
th {
  border: 1px solid black;
}

table {
  width: 60%;
  border-collapse: collapse;
}
</style>

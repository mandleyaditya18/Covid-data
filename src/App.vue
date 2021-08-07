<template>
  <div>
    {{pagination.page}}
    <h1>Hello World</h1>
    <Table v-if="tableData" :covidData="tableData" :config="tableConfig" />
    <Pagination :totalRecords="tableCount" v-model="pagination" />
  </div>
</template>

<script>
import Table from "./components/UI/Table.vue";
import axios from "axios";
import { config } from "./utils/config";
import Pagination from "./components/UI/Pagination.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Table,
    Pagination,
  },
  data() {
    return {
      tableConfig: config,
      pagination: { page: 1, perPage: 10 },
      dataKeys: [],
      states: [] 
    };
  },
  mounted() {
    axios
      .get("https://api.covid19india.org/v4/min/data.min.json")
      .then(({ data }) => {
        this.dataKeys = Object.keys(data);
        for (let key of this.dataKeys) {
          this.states.push(data[key]);
        }
        for (let i=0; i<this.states.length; i++) {
          this.states[i].state = this.dataKeys[i];
        }
        this.$store.dispatch("initData", this.states);
      });
  },
  computed: {
    ...mapGetters({tableData: "covidData"}),
    tableCount() {
      return Object.keys(this.tableData).length;
    },
    // computedTableData() {
    //   if (!this.tableData) return [];
    //   else {
    //     const firstIndex = (this.pagination.page - 1) * this.pagination.perPage;
    //     const lastIndex = this.pagination.page * this.pagination.perPage;
    //     console.log(firstIndex, lastIndex);
    //     return this.tableData.slice(firstIndex, lastIndex);
    //   }
    // }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

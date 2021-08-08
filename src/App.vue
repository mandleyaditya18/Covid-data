<template>
  <div>
    <Multiselect
      @statesData="statesTableData($event)"
      @resetData="statesTableData($event)"
    />
    <Table
      v-if="tableType === 'default'"
      :covidData="paginatedTableData"
      :config="tableConfig"
    />
    <Table
      v-if="tableType === 'selected'"
      :covidData="selectedStates"
      :config="tableConfig"
    />
    <Table
      v-if="tableType === 'filtered'"
      :covidData="filteredStatesData"
      :config="tableConfig"
    />
    <Pagination :totalRecords="tableCount" v-model="pagination" />
    <FilterData
      @filteredData="filterStatesData($event)"
      @resetData="filterStatesData($event)"
    />
  </div>
</template>

<script>
import Table from "./components/UI/Table.vue";
import axios from "axios";
import { config } from "./utils/config";
import Pagination from "./components/UI/Pagination.vue";
import Multiselect from "./components/UI/Multiselect.vue";
import FilterData from "./components/UI/FilterData.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Table,
    Pagination,
    Multiselect,
    FilterData,
  },
  data() {
    return {
      tableConfig: config,
      pagination: { page: 1, perPage: 10 },
      dataKeys: [],
      states: [],
      selectedStates: [],
      filteredStatesData: [],
      tableType: "default",
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
        for (let i = 0; i < this.states.length; i++) {
          this.states[i].state = this.dataKeys[i];
        }
        this.$store.dispatch("initData", this.states);
      });
  },
  computed: {
    ...mapGetters({ tableData: "covidData" }),
    tableCount() {
      return Object.keys(this.tableData).length;
    },
    paginatedTableData() {
      if (!this.tableData) return [];
      else {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage;
        const lastIndex = this.pagination.page * this.pagination.perPage;
        return this.tableData.slice(firstIndex, lastIndex);
      }
    },
  },
  methods: {
    statesTableData(fewStates) {
      this.selectedStates = fewStates;
      this.tableType = this.tableType === "default" ? "selected" : "default";
    },
    filterStatesData(filtered) {
      this.filteredStatesData = filtered;
      this.tableType = this.tableType === "default" ? "filtered" : "default";
    },
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

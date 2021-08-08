<template>
  <div>
    <Multiselect @statesData="statesTableData($event)" @resetData="statesTableData($event)" />
    <Table
      v-if="tableData && selectedStates.length === 0"
      :covidData="paginatedTableData"
      :config="tableConfig"
    />
    <Table
      v-if="selectedStates.length !== 0" 
      :covidData="selectedStates"
      :config="tableConfig"
    />
    <Pagination :totalRecords="tableCount" v-model="pagination" />
  </div>
</template>

<script>
import Table from "./components/UI/Table.vue";
import axios from "axios";
import { config } from "./utils/config";
import Pagination from "./components/UI/Pagination.vue";
import Multiselect from "./components/UI/Multiselect.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Table,
    Pagination,
    Multiselect,
  },
  data() {
    return {
      tableConfig: config,
      pagination: { page: 1, perPage: 10 },
      dataKeys: [],
      states: [],
      selectedStates: [],
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
      console.log(fewStates);
      this.selectedStates = fewStates;
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

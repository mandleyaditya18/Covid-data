<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <MultiselectData
          v-if="tableType === 'default' || tableType === 'selected'"
          @multiCovidData="statesTableData($event)"
        />
      </div>
      <div class="col-lg-8 col-md-6">
        <FilterData
          v-if="tableType === 'default' || tableType === 'filtered'"
          @filteredData="filterStatesData($event)"
          @resetData="filterStatesData($event)"
        />
      </div>
    </div>
    <div class="row justify-content-lg-center">
      <div class="col-lg-10 col-md-6">
        <br /><br />
        <Table
          v-if="tableType === 'default'"
          :covidData="paginatedTableData"
          :config="tableConfig"
        />
        <Table
          v-if="tableType === 'selected'"
          :covidData="paginatedMultiData"
          :config="tableConfig"
        />
        <Table
          v-if="tableType === 'filtered'"
          :covidData="paginatedFilterData"
          :config="tableConfig"
        />
        <br /><br />
      </div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-center">
        <Pagination :totalRecords="tableCount" v-model="pagination" />
      </div>
    </div>
  </div>
</template>

<script>
import Table from "./components/UI/Table.vue";
import { config } from "./utils/config";
import Pagination from "./components/UI/Pagination.vue";
import FilterData from "./components/UI/FilterData.vue";
import Navbar from "./components/UI/Navbar.vue";
import MultiselectData from "./components/UI/MultiselectData.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Table,
    Pagination,
    FilterData,
    Navbar,
    MultiselectData,
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
    this.initData();
  },
  computed: {
    ...mapGetters({
      tableData: "covidData",
      multiData: "multiSelectCovidData",
      filterData: "filterCovidData",
    }),
    tableCount() {
      if (this.tableType === "selected") {
        return Object.keys(this.multiData).length;
      } else if (this.tableType === "filtered") {
        return Object.keys(this.filterData).length;
      } else {
        return Object.keys(this.tableData).length;
      }
    },
    paginatedTableData() {
      if (!this.tableData) return [];
      else {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage;
        const lastIndex = this.pagination.page * this.pagination.perPage;
        return this.tableData.slice(firstIndex, lastIndex);
      }
    },
    paginatedMultiData() {
      if (!this.multiData) return [];
      else {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage;
        const lastIndex = this.pagination.page * this.pagination.perPage;
        return this.multiData.slice(firstIndex, lastIndex);
      }
    },
    paginatedFilterData() {
      if (!this.filterData) return [];
      else {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage;
        const lastIndex = this.pagination.page * this.pagination.perPage;
        return this.filterData.slice(firstIndex, lastIndex);
      }
    },
  },
  methods: {
    ...mapActions(["initData", "initMultiData", "initFilterData"]),
    statesTableData(fewStates) {
      if (fewStates === false) {
        this.initFilterData([]);
        this.tableType = "selected";
      } else if (fewStates === true && this.filterData.length !== 0) {
        this.tableType = "filtered";
      } else {
        this.tableType = "default";
      }
    },
    filterStatesData(filtered) {
      if (filtered === false) {
        this.initMultiData([]);
        this.tableType = "filtered";
      } else if (filtered === true && this.multiData.length !== 0) {
        this.tableType = "selected";
      } else {
        this.tableType = "default";
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0px;
}
</style>

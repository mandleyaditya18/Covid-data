<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <MultiselectData @multiCovidData="statesTableData($event)" />
      </div>
      <div class="col-lg-8 col-md-6">
        <FilterData
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
      <div v-if="tableType === 'noData'" class="col d-flex justify-content-center">
        <h1>No Data Available</h1>
      </div>
    </div>
    <div class="row">
      <Spinner v-if="loading" />
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
import Spinner from "./components/UI/Spinner.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Table,
    Pagination,
    FilterData,
    Navbar,
    MultiselectData,
    Spinner,
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
      btnType: ''
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
      loading: "isLoading",
    }),
    tableCount() {
      if (this.tableType === "selected") {
        return Object.keys(this.multiData).length;
      } else if (this.tableType === "filtered") {
        return Object.keys(this.filterData).length;
      } else if (this.tableType === "noData") {
        return 0;
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
    ...mapActions(["initData"]),
    statesTableData(fewStates) {
      if (fewStates === false) {
        this.tableType = "selected";
      } else if (fewStates === true && this.filterData.length !== 0) {
        this.tableType = "filtered";
      } else if (fewStates === true && this.filterData.length === 0) {
        if (this.btnType === 'show') {
          this.filterStatesData({ hasData: true, filterType: "show" });
        }
        else if (this.btnType === 'reset') {
          this.filterStatesData({ hasData: true, filterType: "reset" });
        }
      } else {
        this.tableType = "default";
      }
    },
    filterStatesData(filtered) {
      if (filtered.hasData === false) {
        this.btnType = 'show';
        this.tableType = "filtered";
      } else if (
        filtered.hasData === true &&
        this.multiData.length !== 0 &&
        filtered.filterType !== "show"
      ) {
        this.btnType = 'reset';
        this.tableType = "selected";
      } else if (filtered.hasData === true && filtered.filterType === "show") {
        this.btnType = 'show';
        this.tableType = "noData";
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

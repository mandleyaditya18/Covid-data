<template>
  <div class="row">
    <div class="col-lg-3">
      <label class="d-block " for="fields">Choose Field</label>
      <select
        class="d-block form-select"
        name="fields"
        id="fields"
        v-model="selectedField"
      >
        <option v-for="obj in fieldConfig" :value="obj.key" :key="obj.key">{{
          obj.title
        }}</option>
      </select>
    </div>
    <div class="col-lg-3">
      <label class="d-block" for="operation">Choose Operation</label>
      <select
        class="d-block form-select"
        name="operation"
        id="operation"
        v-model="operation"
      >
        <option value="gt">Greater than</option>
        <option value="lt">Less than</option>
        <option value="eq">Equals to</option>
      </select>
    </div>
    <div class="col-lg-3">
      <label class="d-block" for="val">Enter Value</label>
      <input class="d-block form-control" type="number" v-model="value" />
    </div>
    <div class="col-lg-3 mt-4">
      <button class="btn btn-primary mx-2" @click="loadData">Show Data</button>
      <button class="btn btn-info mx-2" @click="resetData">Reset Data</button>
    </div>
  </div>
</template>

<script>
import { config } from "../../utils/config";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      fieldConfig: config,
      selectedField: "",
      operation: "",
      value: 0,
      filteredData: [],
    };
  },
  computed: {
    ...mapGetters({ tableData: "covidData", filterData: "filterCovidData"}),

  },
  methods: {
    ...mapActions(["initFilterData",]),
    loadData() {
      if (this.operation === "lt" && this.selectedField !== "") {
        this.filteredData = this.tableData.filter((obj) => {
          return obj.total[this.selectedField] < this.value;
        });
        this.initFilterData(this.filteredData);       
        this.$emit("filteredData", this.filterData.length === 0);
      }
      if (this.operation === "gt" && this.selectedField !== "") {
        this.filteredData = this.tableData.filter((obj) => {
          return obj.total[this.selectedField] > this.value;
        });
        this.initFilterData(this.filteredData);
        this.$emit("filteredData", this.filterData.length === 0);
      }
      if (this.operation === "eq" && this.selectedField !== "") {
        this.filteredData = this.tableData.filter((obj) => {
          return obj.total[this.selectedField] == this.value;
        });
        this.initFilterData(this.filteredData);
        this.$emit("filteredData", this.filterData.length === 0);
      }
    },
    resetData() {
      this.selectedField = "";
      this.operation = "";
      this.value = "";
      this.filteredData = [];
      this.initFilterData(this.filteredData);
      this.$emit("resetData", this.filterData.length === 0);
    },
  },
};
</script>

<style scoped></style>

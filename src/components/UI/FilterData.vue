<template>
  <div class="row">
    <div class="col-lg-3">
      <label class="d-block " for="fields">Choose Field</label>
      <select
        class="d-block form-control"
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
        class="d-block form-control"
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
      <button class="btn btn-primary" @click="loadData">Show Data</button>
      <button class="btn btn-info" @click="resetData">Reset Data</button>
    </div>
  </div>
</template>

<script>
import { config } from "../../utils/config";
import { mapGetters } from "vuex";

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
    ...mapGetters({ tableData: "covidData" }),
  },
  methods: {
    loadData() {
      if (this.operation === "lt" && this.selectedField !== "") {
        this.filteredData = this.tableData.filter((obj) => {
          return obj.total[this.selectedField] < this.value;
        });
      }
      if (this.operation === "gt" && this.selectedField !== "") {
        this.filteredData = this.tableData.filter((obj) => {
          return obj.total[this.selectedField] > this.value;
        });
      }
      if (this.operation === "eq" && this.selectedField !== "") {
        this.filteredData = this.tableData.filter((obj) => {
          return obj.total[this.selectedField] == this.value;
        });
      }

      this.$emit("filteredData", this.filteredData);
    },
    resetData() {
      this.selectedField = "";
      this.operation = "";
      this.value = "";
      this.filteredData = [];

      this.$emit("resetData", this.filteredData);
    },
  },
};
</script>

<style scoped></style>

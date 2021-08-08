<template>
  <div>
    <label for="fields">Choose Field</label>
    <select name="fields" id="fields" v-model="selectedField">
      <option v-for="obj in fieldConfig" :value="obj.key" :key="obj.key">{{
        obj.title
      }}</option>
    </select>

    <label for="operation">Choose Operation</label>
    <select name="operation" id="operation" v-model="operation">
      <option value="gt">Greater than</option>
      <option value="lt">Less than</option>
      <option value="eq">Equals to</option>
    </select>
    <label for="val">Enter Value</label>
    <input type="number" v-model="value" />

    <button @click="loadData">Show Data</button>
    <button @click="resetData">Reset Data</button>
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
      this.selectedField = '';
      this.operation = "";
      this.value = "";
      this.filteredData = [];

      this.$emit("resetData", this.filteredData);
    }
  },
};
</script>

<style></style>

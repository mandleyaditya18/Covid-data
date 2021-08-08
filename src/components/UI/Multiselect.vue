<template>
  <div class="row">
    <div class="col-lg-6">
      <label class="d-block" for="states">Choose States</label>
      <select
        class="d-block form-control"
        name="states"
        id="states"
        v-model="selectedStates"
        multiple
      >
        <option v-for="state in states" :value="state" :key="state.state">
          {{ state.state }}
        </option>
      </select>
    </div>
    <div class="col-lg-6 mt-4">
      <button class="btn btn-primary mx-2" @click="someStates">
        Show State Data
      </button>
      <button class="btn btn-info mx-2" @click="resetData">Reset</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedStates: [],
    };
  },
  computed: {
    ...mapGetters({ states: "covidData" }),
  },
  methods: {
    someStates() {
      this.$emit("statesData", this.selectedStates);
    },
    resetData() {
      this.selectedStates = [];
      this.$emit("resetData", this.selectedStates);
    },
  },
};
</script>

<style scoped></style>

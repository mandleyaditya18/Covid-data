<template>
  <div>
    <label for="states">Choose States</label>
    <select
      name="states"
      id="states"
      v-model="selectedStates"
      multiple
    >
      <option v-for="state in states" :value="state" :key="state.state">
        {{ state.state }}
      </option>
    </select>
    <button @click="someStates">Show State Data</button>
    <button @click="resetData">Reset</button>
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
    }
  },
};
</script>

<style scoped>
select {
  width: 20%;
  height: 150px;
}
</style>

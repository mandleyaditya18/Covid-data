<template>
  <div class="row">
    <div class="col-lg-6 ms">
        <label for="multiselect">Select States</label>
      <Multiselect
        v-model="selectedStates"
        tag-placeholder="Add this as new tag"
        placeholder="Search or add a tag"
        label="state"
        id="multiselect"
        track-by="state"
        :options="states"
        :multiple="true"
        :taggable="true"
        class="mSelect"
        :maxHeight="300"
      />
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
        selectedStates: [],
    };
  },
  computed: {
    ...mapGetters({ states: "covidData", multi: "multiSelectCovidData" }),
  },
  watch: {
      selectedStates(val) {
          this.initMultiData(val);
          this.$emit("multiCovidData", val.length === 0);
      }
  },
  methods: {
      ...mapActions(['initMultiData']),
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.mSelect, .ms {
  width: 400px;
}
</style>

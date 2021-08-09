<template>
  <div class="row">
    <div class="col-lg-6 ms">
      <Multiselect
        v-model="selectedStates"
        tag-placeholder="Add this as new tag"
        placeholder="Search or add a tag"
        label="state"
        track-by="state"
        :options="states"
        :multiple="true"
        :taggable="true"
        class="mSelect"
        :maxHeight="300"
      />
    </div>
    <button class="btn btn-primary" @click="show">Click</button>
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
          console.log(val);
          this.initMultiData(val);
      }
  },
  methods: {
      ...mapActions(['initMultiData']),
    show() {
        // console.log(this.selectOptions);
        console.log(this.multi);
    }
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.mSelect, .ms {
  width: 400px;
}
</style>

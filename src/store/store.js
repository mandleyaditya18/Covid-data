import Vue from "vue";
import Vuex from "vuex";

import table from "./modules/table";
import multiselect from "./modules/multiselect";
import filter from "./modules/filter";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    table,
    multiselect,
    filter
  },
});

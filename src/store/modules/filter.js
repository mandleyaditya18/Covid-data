const state = {
  filterCovidData: [],
};

const mutations = {
  SET_FILTER_DATA(state, theData) {
    state.filterCovidData = theData;
  },
};

const actions = {
  initFilterData: ({ commit }, theData) => {
    commit("SET_FILTER_DATA", theData);
  },
};

const getters = {
    filterCovidData: (state) => {
    return state.filterCovidData;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};

const state = {
  multiSelectCovidData: [],
};

const mutations = {
  SET_MULTI_DATA(state, theData) {
    state.multiSelectCovidData = theData;
  },
};

const actions = {
  initMultiData: ({ commit }, theData) => {
    commit("SET_MULTI_DATA", theData);
  },
};

const getters = {
  multiSelectCovidData: (state) => {
    return state.multiSelectCovidData;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};

const state = {
  covidData: [],
};

const mutations = {
  SET_COVID_DATA(state, theData) {
    state.covidData.push(theData);
  },
};

const actions = {
  initData: ({ commit }, theData) => {
    commit("SET_COVID_DATA", theData);
  },
};

const getters = {
  covidData: (state) => {
    return state.covidData;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};

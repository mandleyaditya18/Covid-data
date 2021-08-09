import axios from "axios";

const state = {
  covidData: [],
  isLoading: false
};

const mutations = {
  SET_COVID_DATA(state, theData) {
    state.covidData = theData;
  },
  SET_LOADING(state, val) {
    state.isLoading = val;
  }
};

const actions = {
  initData: ({ commit, dispatch }) => {
    dispatch('setLoading', true);
    let dataKeys = [];
    let states = [];
    axios.get("https://api.covid19india.org/v4/min/data.min.json").then(({data}) => {
      dataKeys = Object.keys(data);
      for (let key of dataKeys) {
        states.push(data[key]);
      }
      for (let i = 0; i < states.length; i++) {
        states[i].state = dataKeys[i];
      }
      // console.log(this.isLoading);
      // console.log(this.states);
      commit("SET_COVID_DATA", states);
      dispatch('setLoading', false);
    })
  },
  setLoading: ({commit}, val) => {
    commit("SET_LOADING", val);
  }
};

const getters = {
  covidData: (state) => {
    return state.covidData;
  },
  isLoading: (state) => {
    return state.isLoading;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};

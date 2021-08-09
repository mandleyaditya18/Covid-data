import axios from "axios";

const state = {
  covidData: [],
};

const mutations = {
  SET_COVID_DATA(state, theData) {
    state.covidData = theData;
  },
};

const actions = {
  initData: ({ commit }) => {
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
      
      commit("SET_COVID_DATA", states);
    })
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

import { createStore } from "vuex";

const store = createStore({
  state: {
    apiUrl: "http://projectacademia.test/api/v1",
  },
  mutations: {},
  actions: {},
  getters: {
    apiUrl: (state) => state.apiUrl,
  },
});

export default store;

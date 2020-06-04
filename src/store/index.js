import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: '',
    barang: [],
    kampus: [],
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    RESET_USER(state) {
      state.user = '';
    },
    SET_BARANG(state, payload) {
      state.barang.push(payload);
    },
    SET_KAMPUS(state, payload) {
      state.kampus.push(payload);
    },
  },
  actions: {
    login({ commit }, payload) {
      commit('SET_USER', payload);
    },
    logout({ commit }) {
      commit('RESET_USER');
    },
    fetchBarang({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get('https://shielded-retreat-23199.herokuapp.com/api/barang')
          .then((response) => {
            commit('SET_BARANG', response.data.data);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    fetchKampus({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
          .then((response) => {
            commit('SET_KAMPUS', response.data.data);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    token: (state) => state.user.token,
    user: (state) => state.user,
  },
  modules: {
  },
});

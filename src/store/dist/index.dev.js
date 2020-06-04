"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    user: '',
    barang: [],
    kampus: []
  },
  mutations: {
    SET_USER: function SET_USER(state, payload) {
      state.user = payload;
    },
    RESET_USER: function RESET_USER(state) {
      state.user = '';
    },
    SET_BARANG: function SET_BARANG(state, payload) {
      state.barang.push(payload);
    },
    SET_KAMPUS: function SET_KAMPUS(state, payload) {
      state.kampus.push(payload);
    }
  },
  actions: {
    login: function login(_ref, payload) {
      var commit = _ref.commit;
      commit('SET_USER', payload);
    },
    logout: function logout(_ref2) {
      var commit = _ref2.commit;
      commit('RESET_USER');
    },
    fetchBarang: function fetchBarang(_ref3) {
      var commit = _ref3.commit;
      return new Promise(function (resolve, reject) {
        _axios["default"].get('https://shielded-retreat-23199.herokuapp.com/api/barang').then(function (response) {
          commit('SET_BARANG', response.data.data);
          resolve(response);
        })["catch"](function (error) {
          reject(error);
        });
      });
    },
    fetchKampus: function fetchKampus(_ref4) {
      var commit = _ref4.commit;
      return new Promise(function (resolve, reject) {
        _axios["default"].get('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then(function (response) {
          commit('SET_KAMPUS', response.data.data);
          resolve(response);
        })["catch"](function (error) {
          reject(error);
        });
      });
    }
  },
  getters: {
    token: function token(state) {
      return state.user.token;
    },
    user: function user(state) {
      return state.user;
    }
  },
  modules: {}
});

exports["default"] = _default;
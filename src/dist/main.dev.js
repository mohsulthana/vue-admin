
const _vue = _interopRequireDefault(require('vue'));

const _bootstrapVue = require('bootstrap-vue');

const _App = _interopRequireDefault(require('./App.vue'));

const _router = _interopRequireDefault(require('./router'));

const _store = _interopRequireDefault(require('./store'));

require('./registerServiceWorker');

require('bootstrap/dist/css/bootstrap.css');

require('bootstrap-vue/dist/bootstrap-vue.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies
_vue.default.config.productionTip = false;

_vue.default.use(_bootstrapVue.BootstrapVue);

_vue.default.use(_bootstrapVue.BootstrapVueIcons);

new _vue.default({
  router: _router.default,
  store: _store.default,
  render: function render(h) {
    return h(_App.default);
  },
}).$mount('#app');

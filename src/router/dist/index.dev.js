
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _vue = _interopRequireDefault(require('vue'));

const _vueRouter = _interopRequireDefault(require('vue-router'));

const _Home = _interopRequireDefault(require('@/views/Home.vue'));

const _index = _interopRequireDefault(require('@/store/index'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== 'function') return null; const cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue.default.use(_vueRouter.default);

const routes = [{
  path: '/',
  name: 'Home',
  component: _Home.default,
}, {
  path: '/barang',
  name: 'Barang',
  component: function component() {
    return Promise.resolve().then(() => _interopRequireWildcard(require('@/views/Barang.vue')));
  },
  meta: {
    authentication: true,
  },
}, {
  path: '/kampus',
  name: 'Kampus',
  component: function component() {
    return Promise.resolve().then(() => _interopRequireWildcard(require('@/views/Kampus.vue')));
  },
  meta: {
    authentication: true,
  },
}, {
  path: '/profile',
  name: 'Profile',
  component: function component() {
    return Promise.resolve().then(() => _interopRequireWildcard(require('@/views/Profile.vue')));
  },
  meta: {
    authentication: true,
  },
}];
const router = new _vueRouter.default({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.authentication)) {
    const user = _index.default.getters.token;

    if (user) {
      next();
    } else {
      next({
        path: '/',
      });
    }
  }

  next();
});
const _default = router;
exports.default = _default;

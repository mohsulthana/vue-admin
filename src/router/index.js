import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import store from '@/store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/barang',
    name: 'Barang',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Barang.vue'),
    meta: {
      authentication: true,
    },
  },
  {
    path: '/kampus',
    name: 'Kampus',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Kampus.vue'),
    meta: {
      authentication: true,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Profile.vue'),
    meta: {
      authentication: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.authentication)) {
    const user = store.getters.token;
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

export default router;

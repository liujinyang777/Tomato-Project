import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   redirect: "/home"
  // },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/xrp_home',
    name: 'Xrp_home',
    component: () => import('../views/Xrp_home.vue'),
  },
  {
    path: '/xrp_nav',
    name: 'Xrp_nav',
    component: () => import('../views/Xrp_nav.vue'),
  }, {
    path: '/xrp_email',
    name: 'Xrp_email',
    component: () => import('../views/Xrp_email.vue'),
  }, {
    path: '/lhome',
    name: 'lhome',
    component: () => import('../views/LHome.vue'),
  }, {
    path: '/xrp_detail',
    name: 'Xrp_detail',
    component: () => import('../views/Xrp_detail.vue'),
  }, {
    path: '/xrp_zc',
    name: 'Xrp_zc',
    component: () => import('../views/Xrp_zc.vue'),
  }
];


//解决路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes,
});


export default router;

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
    name: 'Homex',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/lhome',
    name: 'lhome',
    component: () => import('../views/LHome.vue'),
  },
  {
    path: '/lhome2',
    name: 'lhome2',
    component: () => import('../views/LHome2.vue'),
  },
  {
    path: '/lhome12',
    name: 'lhome12',
    component: () => import('../views/LHome12.vue'),
  },
  {
    path: '/lhome13',
    name: 'lhome13',
    component: () => import('../views/LHome13.vue'),
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

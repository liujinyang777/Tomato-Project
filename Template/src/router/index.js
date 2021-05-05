import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

<<<<<<< HEAD
const routes = [
  // {
  //   path: '/',
  //   redirect: "/home"
  // },
=======
const routes = [{
    path: '/',
    redirect: "/S-ttp"
  },
>>>>>>> err
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  }, {
    path: '/S-list',
    name: 'S-list',
    component: () => import('../views/S-list.vue'),
  },{
    path: '/S-ttp',
    name: 'S-ttp',
    component: () => import('../views/S-ttp.vue'),
  },
  {
    path: '/S-dt',
    name: 'S-dt',
    component: () => import('../views/S-dt.vue'),
  },{
    path: '/S-my',
    name: 'S-my',
    component: () => import('../views/S-my.vue'),
  },
  {
    path: '/S-baojia',
    name: 'S-baojia',
    component: () => import('../views/S-baojia.vue'),
  },
  {
    path: '/lhome',
    name: 'Home',
    component: () => import('../views/LHome.vue'),
  },
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
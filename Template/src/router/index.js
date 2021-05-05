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
    name: 'Homex',
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
<<<<<<< HEAD
  }, {
    path: '/xrp_detail',
    name: 'Xrp_detail',
    component: () => import('../views/Xrp_detail.vue'),
  }, {
    path: '/xrp_zc',
    name: 'Xrp_zc',
    component: () => import('../views/Xrp_zc.vue'),
=======
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
>>>>>>> ljy
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
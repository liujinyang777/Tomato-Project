import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const routes = [
 {
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
  },{
    path: '/zx_List',
    name: 'zx_List',
    component: () => import('../views/zx_List.vue'),
  },
  {
    path: '/zx_List2',
    name: 'zx_List2',
    component: () => import('../views/zx_List2.vue'),
  },
  {
    path: '/zx_List3',
    name: 'zx_List3',
    component: () => import('../views/zx_List3.vue'),
  },
  {
    path: '/zx_List4',
    name: 'zx_List4',
    component: () => import('../views/zx_List4.vue'),
  },
  {
    path: '/zx_List5',
    name: 'zx_List5',
    component: () => import('../views/zx_List5.vue'),
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
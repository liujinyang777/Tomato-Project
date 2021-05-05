import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: "/zx_List2"
  },
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
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

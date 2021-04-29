import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: "/zx_List"
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

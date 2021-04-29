import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
<<<<<<< HEAD
  {
    path: '/',
    redirect: "/zx_List"
  },
=======
  // {
  //   path: '/',
  //   redirect: "/home"
  // },
>>>>>>> 886d57c6644343696fabe62f4cd3d275bd5de339
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

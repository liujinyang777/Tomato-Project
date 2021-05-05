import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/js/app.js"

import "@/assets/css/common.css"
import "@/assets/css/reset.css"
import "@/assets/js/app.js"
import "/public/iconfont/iconfont.css"

Vue.config.productionTip = false;

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: "rQxHPQX1ua21rWnXzTbUh5KSSUbnefxR"
})

import http from "./http/http.js";
Vue.prototype.$http = http;

//头部组件 全局引入
import lTop from "@/components/Heads.vue"
Vue.component("lTop",lTop)

//底部组件全局引入
import lBot from "@/components/Bottom.vue"
Vue.component("lBot",lBot)

import axios from "axios";
Vue.prototype.$axios = axios;

import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
// 全局引入element-ui

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

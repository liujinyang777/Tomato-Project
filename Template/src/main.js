import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/js/app.js"

Vue.config.productionTip = false;

import http from "./http/http.js";
Vue.prototype.$http = http;

import lTop from "@/components/Heads.vue"
Vue.component("lTop",lTop)

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

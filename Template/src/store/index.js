import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
Vue.use(Vuex);

import vuexPersist from "vuex-persist";

// store是仓库的意思
export default new Vuex.Store({
  //数据（状态）
  state: {
    user: "",
  },
  //方法 修改状态
  mutations: {

  },
  //异步操作
  actions: {

  },
  //模块化
  modules: {},
  //计算属性
  getters: {

  },
  //持久化工具
  plugins: [
    new vuexPersist({
      storage: window.localStorage,
    }).plugin,
  ],
  //配置持久化插件
});

// state ：就是data  存放公共的数据
// mutations 方法相当于是methods 操作state
// 只有mutation可以操作state
// actions 执行异步操作的 访问ajax的
// getters  相当于是计算属性
// modules 模块 分模块管理state

// 在组件里使用state;
// this.$store.state.xxx;

//  只有mutation才能操作state
//  所以 当你在页面里需要操作state的时候 必须调用vuex里mutation 让mutation去操作state
//  mutation里的默认的第一个参数是state

// vuex的持久化工具 本地存储的工具
// 会帮我们自动把vuex里的数据存在本地存储中 不需要我们再写任何跟本地存储有关的代码
// 注意：只有在vuex底下才能用
// Vuex-persist
// 第一步：安装 cnpm i vuex-persist --save
// 第二部 在store/index 引入 import vuexpersist from "vuex-persist"
// 第三步 配置
// plugins:[
//   new vuexPersist({
//     storage:window.localStorage
//   }).plugin
// ]

// getters跟计算属性computed用法一样;
// this.$store.getters.xxx;

// action  异步操作放在里面
// 但是拿到数据是为了把数据给state
// 但是他没有权利操作state
// 所以需要调用mutation操作state
// context.commit("xxx",xxx)
// 需要在页面里mounted 请求这个action（this.$store.dispatch("xxx")）
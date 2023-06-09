import AV, { User } from "leancloud-storage";
import Leancloud from "../configs/leancloud";

import { MD5 } from "crypto-js";

AV.init(Leancloud);

export default {
  state: () => ({
    // 获取当前用户
    currentUser: User.current(),
  }),
  getters: {
    // 获取登录用户名
    username: (state) => {
      return state.currentUser ? state.currentUser.getUsername() : "";
    },
    // 获取登录邮箱
    email: (state) => {
      return state.currentUser ? state.currentUser.getEmail() : "";
    },
    // 获取 gravatar 头像
    gravatar: (_, getters) => {
      return "https://cravatar.cn/avatar/" + MD5(getters.email);
    },
  },
  mutations: {
    // 设置当前用户
    setCurrentUser(state) {
      state.currentUser = User.current();
    },
  },
  actions: {
    handleLogin({ state, dispatch }, data) {
      // 判断是否已经登录
      if (state.currentUser) return Promise.reject(new Error("已登录"));
      return dispatch("requestLoginByUsername", data);
    },
    handleLogout({ commit }) {
      User.logOut().then(() => {
        commit("setCurrentUser");
      });
    },
    // 使用用户名登录
    requestLoginByUsername(_, { username, password }) {
      return User.logIn(username, password);
    },
  },
};

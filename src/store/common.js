export default {
  state: {
    siteName: "油老师の主页",
    // 网页背景图，如果获取不到设置的背景图，就获取必应每日壁纸
    backgroundImage:
      window.localStorage.getItem("bg-url") ||
      "https://api.oneneko.com/v1/bing_today",
    // 背景图是否模糊处理
    backgroundBlur: window.localStorage.getItem("bg-blur") || false,
  },
  getters: {},
  mutations: {},
  actions: {},
};

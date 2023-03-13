import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import { Button, Dialog } from "element-ui";

import "./assets/style.less";

Vue.use(Button);
Vue.use(Dialog);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");

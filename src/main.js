import Vue from "vue";
import App from "./App";
import store from "./store";

import {
  Button,
  Dialog,
  Form,
  FormItem,
  Input,
  Loading,
  Message,
  MessageBox,
  Drawer,
  Row,
  Col,
  Popover,
} from "element-ui";

import "./assets/style.less";

Vue.use(Button);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Drawer);
Vue.use(Row);
Vue.use(Col);
Vue.use(Popover);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");

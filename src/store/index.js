import Vue from "vue";
import Vuex from "vuex";

import CommonModule from "./common";
import UserModule from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common: CommonModule,
    user: UserModule,
  },
});

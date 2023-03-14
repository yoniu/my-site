import AV, { User } from "leancloud-storage";
import Leancloud from "../configs/leancloud";

AV.init(Leancloud);

export default {
  state: () => ({
    currentUser: User.current(),
  }),
  mutations: {},
  actions: {},
  getters: {},
};

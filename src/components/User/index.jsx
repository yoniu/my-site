import "./index.less";

import IconUser from "../Icon/User";

import UserLogin from "./Login";

import { MD5 } from "crypto-js";

export default {
  name: "UserIndex",
  components: {
    IconUser,
    UserLogin
  },
  data() {
    return {
      DrawVisible: false,
      LoginDialogVisble: false,
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.user.currentUser;
    },
    username() {
      return this.$store.getters.username;
    },
    email() {
      return this.$store.getters.email;
    },
    gravatar() {
      return "https://cravatar.cn/avatar/" + MD5(this.email);
    }
  },
  methods: {
    handleOpenLoginDialog() {
      this.LoginDialogVisble = true;
    },
    handleCloseLoginDialog() {
      this.LoginDialogVisble = false;
    },
    handleOpenDrawer() {
      this.DrawVisible = true;
    },
    handleCloseDrawer() {
      this.DrawVisible = false;
    }
  },
  render(h) {
    return (
      <div id="user">
        {
          this.currentUser 
          ? 
          <button class="circle-button primary" onClick={this.handleOpenDrawer}>
            <img src={this.gravatar} alt={this.username} />
          </button>
          :
          <button class="circle-button primary" onClick={this.handleOpenLoginDialog}>
            <icon-user />
          </button>
        }
        {
          // 已登录显示内容
          this.currentUser && 
          <el-drawer
            title="我是标题"
            visible={this.DrawVisible}
            direction="rtl"
            before-close={this.handleCloseDrawer}
          >
            <span>我来啦!</span>
          </el-drawer>
        }
        {
          // 未登录显示内容
          !this.currentUser && 
          <el-dialog
            center
            title="登录"
            width="max(30%, 300px)"
            visible={this.LoginDialogVisble}
            vOn:close={this.handleCloseLoginDialog}
          >
            <user-login vOn:action-handle-close={this.handleCloseLoginDialog}/>
          </el-dialog>
        }
      </div>
    );
  }
};

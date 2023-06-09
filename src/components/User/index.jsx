import "./index.less";

import IconUser from "../Icon/User";

import UserLogin from "./Login";
import UserDrawer from "./Drawer";

export default {
  name: "UserIndex",
  components: {
    IconUser,
    UserLogin,
    UserDrawer
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
      return this.$store.getters.gravatar;
    }
  },
  methods: {
    // 登录弹窗显示关闭
    handleOpenLoginDialog() {
      this.LoginDialogVisble = true;
    },
    handleCloseLoginDialog() {
      this.LoginDialogVisble = false;
    },
    // 抽屉显示关闭
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
          // 判断登录：已登录显示头像，未登录显示登录按钮
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
          <user-drawer show={this.DrawVisible} vOn:action-handle-close={this.handleCloseDrawer} />
        }
        {
          // 未登录显示内容
          !this.currentUser && 
          <user-login show={this.LoginDialogVisble} vOn:action-handle-close={this.handleCloseLoginDialog}/>
        }
      </div>
    );
  }
};

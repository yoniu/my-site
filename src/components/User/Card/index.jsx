import "./index.less";

import IconExit from "@/components/Icon/Exit"

export default {
  name: "UserCard",
  components: {
    IconExit
  },
  computed: {
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
    handleLogout() {
      this.$confirm("是否退出登录？", "提示：", {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        // 点击确定退出登录
        this.$store.dispatch("handleLogout");
      }).catch(() => {});
    }
  },
  render(h) {
    return (
      <div class="user-card">
        <div class="user-avatar"><img src={this.gravatar} alt={this.username} /></div>
        <span class="user-name">{this.username}</span>
        <button class="user-logout circle-button secondary" onClick={this.handleLogout}><icon-exit /></button>
      </div>
    );
  },
}
import IconUser from "../Icon/User";

export default {
  name: "UserIndex",
  components: {
    IconUser
  },
  data() {
    return {
      LoginDialogVisble: false,
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.user.currentUser;
    }
  },
  methods: {
    handleOpenLoginDialog() {
      this.LoginDialogVisble = true;
    },
    handleCloseLoginDialog() {
      this.LoginDialogVisble = false;
    }
  },
  render(h) {
    return (
      <div id="user">
        {
          this.currentUser 
          ? 
          <button class="circle-button primary"><icon-user /></button>
          :
          <button class="circle-button primary" onClick={this.handleOpenLoginDialog}><icon-user /></button>
        }
        <el-dialog
          title="登录"
          width="30%"
          center
          visible={this.LoginDialogVisble}
          vOn:close={this.handleCloseLoginDialog}
        >
          123123
        </el-dialog>
      </div>
    );
  }
};

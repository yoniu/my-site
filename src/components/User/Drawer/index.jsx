export default {
  name: "UserDrawer",
  props: ["show"],
  emits: ["action-handle-close"],
  methods: {
    handleClose() {
      this.$emit("action-handle-close");
    },
    handleLogout() {
      this.$store.dispatch("handleLogout");
    }
  },
  render(h) {
    return (
      <el-drawer
        title="Drawer"
        visible={this.show}
        direction="rtl"
        before-close={this.handleClose}
        with-header={false}
      >
        <span>我来啦!</span>
        <el-button onClick={this.handleLogout}>注销</el-button>
      </el-drawer>
    )
  },
};

import "./index.less";

import UserCard from "../Card";

export default {
  name: "UserDrawer",
  props: ["show"],
  emits: ["action-handle-close"],
  components: {
    UserCard
  },
  methods: {
    handleClose() {
      this.$emit("action-handle-close");
    },
  },
  render(h) {
    return (
      <el-drawer
        title="Drawer"
        custom-class={"xz-drawer"}
        visible={this.show}
        direction="rtl"
        before-close={this.handleClose}
        with-header={false}
      >
        <user-card />
      </el-drawer>
    )
  },
};

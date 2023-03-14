import "./index.less";

import UserIndex from "../User";

export default {
  name: "Navigation",
  components: {
    UserIndex
  },
  computed: {
    siteName() {
      return this.$store.state.common.siteName;
    }
  },
  render(h) {
    return (
      <div id="navigation">
        <div class="site-name">{this.siteName}</div>
        <user-index />
      </div>
    );
  }
};

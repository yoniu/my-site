import "./index.less";

export default {
  name: "Navigation",
  computed: {
    siteName() {
      return this.$store.state.siteName;
    }
  },
  render(h) {
    return (
      <div id="navigation">
        <div class="site-name">{this.siteName}</div>
      </div>
    );
  }
};

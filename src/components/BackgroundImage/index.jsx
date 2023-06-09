import "./index.less";

export default {
  name: "BackgroundImage",
  computed: {
    backgroundImage() {
      return this.$store.state.common.backgroundImage;
    },
    backgroundBlur() {
      return this.$store.state.common.backgroundBlur;
    }
  },
  render(h) {
    return (
      <div id="background">
        <img src={this.backgroundImage} class={{'blur': this.backgroundBlur}} />
      </div>
    );
  }
}
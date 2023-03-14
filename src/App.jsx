import BackgroundImage from "./components/BackgroundImage";
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    BackgroundImage,
    Navigation
  },
  render(h) {
    return (
      <div id="app">
        <background-image />
        <navigation />
      </div>
    );
  }
};

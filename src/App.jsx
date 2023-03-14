import BackgroundImage from "./components/BackgroundImage";
import Navigation from "./components/Navigation";
import Search from "./components/Search";

export default {
  name: "App",
  components: {
    BackgroundImage,
    Navigation,
    Search
  },
  render(h) {
    return (
      <div id="app">
        <background-image />
        <Navigation />
        <Search />
      </div>
    );
  }
};

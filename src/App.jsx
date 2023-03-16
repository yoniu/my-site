import BackgroundImage from "./components/BackgroundImage";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

import SearchHelper from "./components/SearchHelper";

export default {
  name: "App",
  components: {
    BackgroundImage,
    Navigation,
    Search,
    SearchHelper,
  },
  render(h) {
    return (
      <div id="app">
        <BackgroundImage />
        <Navigation />
        <Search />
        <Cards />
        <Footer />
        <SearchHelper />
      </div>
    );
  }
};

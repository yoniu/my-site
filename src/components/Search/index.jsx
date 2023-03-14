import "./index.less";

import IconSearch from "../Icon/Search";

export default {
  name: "Search",
  components: {
    IconSearch
  },
  render(h) {
    return (
      <div id="search">
        <div class="container">
          <div class="search-type">百度</div>
          <input class="search-input" type="text" name="" id="" />
          <button><icon-search /></button>
        </div>
      </div>
    );
  },
};

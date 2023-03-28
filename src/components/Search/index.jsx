import "./index.less";

import IconSearch from "../Icon/Search";
import EnginesConfig from "@/configs/searchEngine";


export default {
  name: "Search",
  components: {
    IconSearch
  },
  render(h) {
    return (
      <div id="search">
        <div class="container">
          <div class="search-type">
            {
              Array.from(EnginesConfig.values()).map(v => <img src={v.icon} width="48px" />)
            }
          </div>
          <input class="search-input" type="text" name="" id="" />
          <button><icon-search /></button>
        </div>
      </div>
    );
  },
};

import "./index.less";

import Links from "@/configs/friends";

export default {
  name: "FooterFriends",
  render(h) {
    return (
      <el-popover
        placement="top"
        title="友情链接"
        width="300"
        trigger="click"
      >
        <div class="friends">
          {
            Links.map((value, index) => {
              return (
                <a href={value.url} target="_blank" title={value.description} key={index}>{value.name}</a>
              );
            })
          }
        </div>
        <a slot="reference" href="#">友情链接</a>
      </el-popover>
    );
  }
};

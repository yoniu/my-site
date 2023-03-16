import "./index.less";

import Links from "@/configs/links";

import IconSearch from "@/components/Icon/Search";
import SearchHelperLinks from "./Links";

export default {
  name: "SearchHelper",
  components: {
    IconSearch,
    SearchHelperLinks,
  },
  data() {
    return {
      // 是否可见
      visible: true,
      // 键盘单击次数
      count: 0,
      // 键盘事件定时器
      timer: null,
      // 搜索内容
      text: "",
    }
  },
  computed: {
    // 获取链接
    mLinks() {
      // 如果输入框内有内容则进行筛选
      if (this.text) {
        return Links.filter(value => {
          const reg = new RegExp(this.text, "gi");
          return value.name.match(reg);
        });
      } else {
        return Links;
      }
    }
  },
  methods: {
    handleClose() {
      //this.visible = false;
    },
    // 监听键盘事件
    handleKeyup(e) {
      // 如果是事件传入但是按键不为 y
      if (e && e.key !== "y") return;
      // 单击一次加 1
      this.count += 1;
      // 如果没有定时器，添加定时器 设置 单击次数回 0
      if (!this.timer) {
        this.timer = setTimeout(() => {
          this.count = 0;
        }, 1000);
      }
      // 如果是双击
      if (this.count == 2) {
        // 切换可视状态
        this.visible = !this.visible;
        // 单击次数回 0
        this.count = 0;
        // 清除定时器
        clearTimeout(this.timer);
      }
    },
  },
  mounted() {
    document.onkeyup = this.handleKeyup;
  },
  beforeDestroy() {
    document.onkeyup = null;
  },
  render(h) {
    return (
      <div id="search-helper" vOn:click_self={this.handleClose} vShow={this.visible}>
        <div class="container">
          <div class="search-input">
            <input type="text" name="search-helper-text" vModel={this.text} placeholder="请输入..." />
            <button><icon-search /></button>
          </div>
          <search-helper-links links={ this.mLinks } stress={this.text} />
        </div>
      </div>
    );
  },
};

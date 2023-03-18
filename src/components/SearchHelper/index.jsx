import "./index.less";

import Links from "@/configs/links";

import IconSearch from "@/components/Icon/Search";
import SearchHelperLinks from "./Links";
import { nextTick } from "vue";

Links.forEach((v, i) => {
  v.id = i;
});

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
      // 当前光标位置
      current: 0,
      // 当前搜索列表长度
      listLength: Links.length,
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
    },
  },
  watch: {
    visible(val) {
      if (!val) {
        this.handleInputBlur();
      }
    },
  },
  methods: {
    handleClose() {
      //this.visible = false;
    },
    // 监听键盘事件
    handleKeyup(e) {
      // 如果当前状态为可视状态则不进行（防止输入框多出 y'y | yy）
      if (this.visible) return;
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
        // 给输入框添加 focus
        this.handleInputFocus();
      }
    },
    handleInputFocus() {
      nextTick(() => {
        this.$refs.rSearchHelperInput.focus();
      });
    },
    handleInputBlur() {
      nextTick(() => {
        this.$refs.rSearchHelperInput.blur();
        if (this.visible) {
          const { rlinks } = this.$refs.rLinks.$refs;
          rlinks.focus();
        }
      });
    },
    handleResetCurrent() {
      this.current = 0;
    },
    handleInputKeyupUp() {
      if (this.current <= 0) return;
      this.current--;
    },
    handleInputKeyupDown() {
      if (this.current >= this.listLength - 1) return;
      this.current++;
    },
    handleSetListLength(v) {
      this.listLength = v;
    },
    handleInputKeyupEnter() {
      const { rlinks } = this.$refs.rLinks.$refs;
      const a = rlinks.querySelector(".hover");
      a && a.click();
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
            <input
              type="text"
              name="search-helper-text"
              ref="rSearchHelperInput"
              placeholder="请输入..."
              vOn:keyup_down_prevent={this.handleInputKeyupDown}
              vOn:keyup_up_prevent={this.handleInputKeyupUp}
              // 防止光标位置改变
              vOn:keydown_down_prevent={() => {}}
              vOn:keydown_up_prevent={() => {}}
              vOn:keyup_enter={this.handleInputKeyupEnter}
              vOn:keyup_esc={this.handleClose}
              vModel={this.text}
            />
            <button><icon-search /></button>
          </div>
          <search-helper-links
            ref="rLinks"
            links={ this.mLinks }
            stress={this.text}
            current={this.current}
            vOn:handle-reset-current={this.handleResetCurrent}
            vOn:handle-set-listLength={this.handleSetListLength}
          />
        </div>
      </div>
    );
  },
};

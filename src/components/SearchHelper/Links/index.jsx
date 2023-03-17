import "./index.less";

export default {
  name: "SearchHelperLinks",
  props: {
    // 链接数据
    links: {
      type: Array,
      require: true,
    },
    // 加重的字符串
    stress: String,
    // 当前光标位置
    current: {
      type: Number,
      default: 0,
    },
  },
  emits: ["handle-reset-current", "handle-set-listLength"],
  data() {
    return {
      linkDoms: [],
    };
  },
  computed: {
    // 获取分类名称
    sortNames() {
      const names = [];
      this.links.forEach((item) => {
        if (!names.includes(item.category)) {
          names.push(item.category);
        }
      });
      return names;
    },
  },
  watch: {
    links() {
      // 监听 links 改变把光标置 0
      this.$emit("handle-reset-current");
      // 将列表长度 emit
      this.$emit("handle-set-listLength", this.links.length);
      this.$nextTick(() => {
        // 重新获取 linkDoms
        this.getLinkDom();
        // 因为 current 为 0 时 watch 不生效，所以要设置一下
        if (this.current === 0 && this.linkDoms.length > 0) {
          this.setHoverToDom();
        }
      });
    },
    current() {
      this.$nextTick(() => {
        // 监听到 current 位置的改变，把原来的光标去掉
        this.$refs.rlinks.querySelector(".hover") && this.$refs.rlinks.querySelector(".hover").classList.remove("hover");
        // 重新设置 current 位置
        this.setHoverToDom();
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      // 获取链接列表 dom
      this.getLinkDom();
      // 设置 current 位置
      this.setHoverToDom();
    });
  },
  methods: {
    // 格式化网址名称（关键词加粗）
    getNameFormat(text) {
      if (this.stress) {
        return text.replace(new RegExp(`(${this.stress})`, "gi"), (str) => `<b>${ str }</b>`);
      } else {
        return text;
      }
    },
    // 用于获取链接列表的 dom
    getLinkDom() {
      this.linkDoms = this.$refs.rlinks ? this.$refs.rlinks.querySelectorAll(".sort-links-item") : [];
    },
    // 设置 current 在 dom 中的显示
    setHoverToDom() {
      this.linkDoms[this.current].classList.add("hover");
    },
  },
  render(h) {
    return (
      <div id="slinks" ref="rlinks">
        { 
          // 按分类遍历
          this.sortNames.map((sort) => {
            return (
              <div class="sort">
                <div class="sort-name">{ sort }</div>
                <div class="sort-links">
                  {
                    // 输出当前分类链接
                    this.links.map((value) => {
                      return value.category === sort && (
                        <a 
                          class="sort-links-item"
                          href={ value.url }
                          target="_blank"
                          key={ value.id }
                          domPropsInnerHTML={this.getNameFormat(value.name)}
                        ></a>
                      );
                    })
                  }
                </div>
              </div>
            );
          })
        }
      </div>
    );
  },
};

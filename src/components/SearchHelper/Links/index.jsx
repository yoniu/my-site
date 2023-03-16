import { nextTick } from "vue";
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
  },
  data() {
    return {
      // 当前光标位置
      current: 0,
      // 位置计算
      count: 0,
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
    linkDoms() {
      return this.$refs.rlinks ? this.$refs.rlinks.querySelectorAll(".sort-links-item") : [];
    }
  },
  watch: {
    links() {
      // 监听 links 改变把光标置 0
      this.current = 0;
    },
  },
  mounted() {
    document.onkeyup = this.handleKeyup;
    this.setHoverToDom();
  },
  methods: {
    getNameFormat(text) {
      if (this.stress) {
        return text.replace(new RegExp(`(${this.stress})`, "gi"), (str) => `<b>${ str }</b>`);
      } else {
        return text;
      }
    },
    setHoverToDom() {
      nextTick(() => {
        this.linkDoms[this.current].classList.add("hover");
      });
    },
    handleKeyup(e) {
      //if (e.key == "D" || e.key == "")
      console.log(e.key);
    }
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
                    this.links.map((value, index) => {
                      return value.category === sort && (
                        <a 
                          class="sort-links-item"
                          href={ value.url }
                          target="_blank"
                          key={ index }
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

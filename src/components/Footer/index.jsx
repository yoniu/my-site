import "./index.less";

import FooterStatement from "./Statement";
import FooterFriends from "./Friends";

export default {
  name: "Footer",
  components: {
    FooterStatement,
    FooterFriends,
  },
  render(h) {
    return (
      <div id="footer">
        <div class="container">
          <div class="copyright">
            <p>
              Powered by&nbsp;
              <a href="/" target="_blank" rel="noopener nofollow">油油</a>.
              &nbsp;
              <a href="https://beian.miit.gov.cn/" title="备案查询" rel="noopener nofollow" target="_blank">粤ICP备18152975号</a>
            </p>
          </div>
          <div class="links">
            <a href="https://blog.200011.net" target="_blank">博客</a>
            <footer-statement />
            <footer-friends />
          </div>
        </div>
      </div>
    );
  },
};

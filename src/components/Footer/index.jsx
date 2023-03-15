import "./index.less";

export default {
  name: "Footer",
  render(h) {
    return (
      <div id="footer">
        <div class="container">
          <div class="copyright">
            <p>
              Powered by&nbsp;
              <a href="#" target="_blank" rel="noopener nofollow">油油</a>.
              &nbsp;
              <a href="https://beian.miit.gov.cn/" title="备案查询" rel="noopener nofollow" target="_blank">粤ICP备18152975号</a>
            </p>
          </div>
          <div class="links">
            <el-popover
              placement="top"
              title="免责声明"
              width="300"
              trigger="click"
            >
              <p>本页面由油老师开发，技术栈：<code>Vue2</code> / <code>VueX</code> / <code>JSX</code>。</p>
              <p>其他资源部分来自网络（音乐、图片等），如果您发现本网站上有侵犯您知识产权的文章或其他资料，请及时与我联系。</p>
              <p>邮箱：<a href="mailto: xu_jingzhi@200011.net">xu_jingzhi@200011.net</a></p>
              <a slot="reference" href="#">免责声明</a>
            </el-popover>
            <a href="#">友情链接</a>
          </div>
        </div>
      </div>
    );
  }
};

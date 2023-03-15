export default () => {
  return (
    <el-popover
      placement="top"
      title="免责声明"
      width="300"
      trigger="click"
    >
      <p>本页面由油油独立开发。</p>
      <p>其他资源部分来自网络（音乐、图片等），如果您发现本网站上有侵犯您知识产权的文章或其他资料，请及时与我联系。</p>
      <p>邮箱：<a href="mailto: xu_jingzhi@200011.net">xu_jingzhi@200011.net</a></p>
      <a slot="reference" href="#">免责声明</a>
    </el-popover>
  );
}
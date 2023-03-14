export default {
  name: "UserLogin",
  emits: ["action-handle-close"],
  data() {
    return {
      // 是否正在请求登录 / 注册
      isPending: false,
      // 表单内容
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    // 登录
    handleLogin() {
      // 判断表单是否有空
      for(let i in this.form) {
        if (this.form[i] === "") {
          this.$msgbox({
            title: "提示",
            message: "表单不能有空！"
          });
          return;
        }
      }
      // 设置提交状态
      this.isPending = true;
      // 请求登录
      const respone = this.$store.dispatch("handleLogin", this.form);
      // 登录处理
      respone
        // 登录成功
        .then(() => {
          this.$msgbox({
            message: "登录成功"
          }).then(() => {
            // 设置当前用户
            this.$store.commit("setCurrentUser");
            // 关闭弹窗
            this.handleClose();
          });
        })
        // 登录失败
        .catch(({ message }) => {
          // 弹出错误信息
          this.$msgbox({
            title: "提示",
            message
          });
        })
        .finally(() => {
          this.isPending = false;
        });
    },
    // 关闭登录框
    handleClose() {
      this.$emit("action-handle-close");
    },
  },
  render(h) {
    return (
      <el-form ref="form" model={this.form} onInput={() => {}} disabled={this.isPending}>
        <el-form-item>
          <el-input vModel={this.form.username} placeholder="用户名 / 邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input vModel={this.form.password} placeholder="密码" show-password vOn:keypress_enter={this.handleLogin}></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" load={this.isPending} onClick={this.handleLogin}>登录</el-button>
          <el-button onClick={this.handleClose}>取消</el-button>
        </el-form-item>
      </el-form>
    );
  }
};

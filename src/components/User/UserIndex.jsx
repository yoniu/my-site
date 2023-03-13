import UserLogin from './Login.vue'

export default {
  props: ["text"],
  data() {
    return {
      isShow: false
    }
  },
  components: {
    UserLogin
  },
  methods: {
    handleShow() {
      this.isShow = true;
    },
    handleClose() {
      this.isShow = false;
      console.log('接受关闭');
    }
  },
  render(h) {
    return <div>
      <el-button vOn:click={this.handleShow} vOn:handleClose={this.handleClose}>默认按钮</el-button>
      <user-login show={this.isShow}></user-login>
      {this.text}
    </div>;
  },
};

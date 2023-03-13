<template>
  <div>
    <el-button @click="handleShow" @handleClose="handleClose">默认按钮</el-button>
    <user-login :show="isShow"></user-login>
  </div>
</template>

<script>
import UserLogin from './Login.vue'

export default {
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
};
</script>

<style lang="less" scoped></style>
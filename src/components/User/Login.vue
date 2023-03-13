<template>
  <el-dialog title="登录" :visible="show" width="30%" center @close="handleClose">
    123123
  </el-dialog>
</template>

<script>
export default {
  name: "UserLogin",
  props: {
    // 是否显示
    show: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['handleClose'],
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleClose() {
      console.log(this.$emit('handleClose'));
      this.$emit('handleClose');
      console.log('关闭');
    }
  }
}
</script>

<style lang="less" scoped></style>

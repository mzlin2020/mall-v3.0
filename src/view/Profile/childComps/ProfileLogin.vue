<template>
  <div class="login">
    <!-- 头像 -->
    <div class="Head-portrait">
      <img src="../../../assets/img/profile/user.png" />
    </div>

    <!-- 登录信息 -->
    <div class="login-detail">
      <p>
        <span class="goToLogin" @click="goToLogin">登录</span>
        /
        <span class="goToRegister" @click="goToRegister">注册</span>
      </p>
      <p class="phone">
        <img src="../../../assets/img/profile/phone.png" />
        暂未绑定手机号
      </p>
    </div>

    <!-- 返回箭头 -->
    <div>
      <img src="../../../assets/img/profile/arrow_right.png" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 登录
    goToLogin() {
      this.$router.push("/login");
    },

    //注册
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.login {
  padding: 20px 10px;
  background: var(--color-tint);
  display: flex;
  color: #fff;
  align-items: center; /* 垂直居中对齐*/
}
.Head-portrait img {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
}
.login-detail {
  width: 80vw;
}
.login-detail p {
  height: 25px;
  line-height: 25px;
  padding-left: 15px;
}
.phone img {
  vertical-align: text-top; /*设置元素的垂直对齐方式*/
}
.phone {
  font-size: 15px;
}
.goToLogin,
.goToRegister {
  font-size: 18px;
}
</style>

<template>
  <div class="login">
    <!-- 头像 -->
    <div class="Head-portrait">
      <img src="http://47.106.182.193:8000/upload/12/avatar" />
    </div>

    <!-- 登录信息 -->
    <div class="login-detail">
      <p class="user-name">{{ userName }}</p>
      <p class="phone">
        <img src="../../../assets/img/profile/phone.png" />
        暂未绑定手机号
      </p>
    </div>

    <!-- 返回箭头 -->
    <div class="edit-profile">
      <img src="../../../assets/img/profile/edit-profile.png" @click="existLogin" />
    </div>
  </div>
</template>

<script>
import localCache from "../../../common/cache";
export default {
  data() {
    return {
      userName: this.$store.state.userInfo.name,
    };
  },
  methods: {
    // 退出登录
    existLogin() {
      //置空token、name
      localCache.clearCache();
      //置空vuex的一些信息
      this.$store.commit("existLogin");

      this.$toast.show("退出登录成功！", 1000);
      setTimeout(() => {
        this.$router.push("/profile");
      }, 1000);
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
  width: 80px;
  height: 80px;
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
.user-name {
  font-size: 20px;
}
.phone img {
  vertical-align: text-top; /*设置元素的垂直对齐方式*/
}
.phone {
  font-size: 15px;
}

.edit-profile img {
  width: 30px;
}
</style>

<template>
  <div class="login">
    <nav-bar class="nav-bar">
      <div slot="center" class="nav-text">用户登录</div>
      <div slot="right" class="nav-goRegister" @click="goToRegister">注册</div>
    </nav-bar>
    <!-- 背景 -->
    <div class="login-bg">
      <img src="../../assets/img/profile/login-bg.png" />
    </div>
    <!-- 登录表单 -->
    <div class="login-form">
      <div class="name">
        <input type="text" placeholder="账号名" maxlength="12" v-model="name" />
      </div>
      <div class="password">
        <input type="password" placeholder="密码" maxlength="12" v-model="password" />
      </div>
      <!-- 记住密码 -->
      <div class="aboutPassword">
        <div class="remenberPas">
          <label for="forgetPassword">
            <input type="checkbox" id="forgetPassword" v-model="isKeepPassword" /> &nbsp;记住密码
          </label>
        </div>
        <div class="forgetPas" @click="forgetPas">忘记密码</div>
      </div>
      <!-- 登录 -->
      <div class="subBtn">
        <button @click="goTOLogin">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar.vue";
import localCache from "../../common/cache";
export default {
  name: "Login",
  components: {
    NavBar,
  },
  data() {
    return {
      name: localCache.getCache("name") ?? "",
      password: localCache.getCache("password") ?? "",
      isKeepPassword: true, //默认记住密码
    };
  },
  methods: {
    // 登录
    goTOLogin() {
      if (this.name.length === 0 || this.password.length === 0) {
        this.$toast.show("账号或者密码为空");
      } else {
        // 判断是否需要记住密码
        if (this.isKeepPassword) {
          localCache.setCache("name", this.name);
          localCache.setCache("password", this.password);
        } else {
          //不需要记住密码
          localCache.deleteCache("name");
          localCache.deleteCache("password");
        }

        // 开始登录验证
        const userInfo = {
          name: this.name,
          password: this.password,
        };
        this.$store.dispatch("loginAction", userInfo);
        this.$toast.show("登陆成功！");
      }
    },

    // 点击忘记密码
    forgetPas() {
      this.$toast.show("无语~~");
    },

    // 跳转到注册页面
    goToRegister() {
      this.$router.push("/register");
    },
  },
  // 处于活跃状态时，隐藏hiddenTbBar
  activated() {
    this.$store.commit("hiddenTabBar");
  },
  //不活跃时，显示hiddentTabBar
  deactivated() {
    this.$store.commit("doNotHiddenTabBar");
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: #ff5777;
}
.nav-text {
  font-size: 18px;
  color: #fff;
  font-weight: 700;
}
.login-bg {
  margin-top: 30px;
  text-align: center;
}
.login-form {
  text-align: center;
  margin-top: 50px;
}
.name,
.subBtn {
  margin-bottom: 20px;
}
.name input,
.password input {
  width: 80%;
  font-size: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #bbb;
}
.subBtn button {
  margin: 0 auto;
  margin-top: 10px;
  width: 70%;
  border: none;
  color: #fff;
  background-color: #ff8198;
  padding: 10px;
  border-radius: 5%;
}
.aboutPassword {
  display: flex;
  width: 75%;
  margin: 0 auto;
  color: #ff8198;
  font-size: 14px;
  margin-top: 10px;
  justify-content: space-between;
}
.nav-goRegister {
  color: rgb(240, 234, 234);
}
</style>

<template>
  <div class="register">
    <nav-bar class="nav-bar">
      <div slot="left" @click="backHome">
        <img src="../../assets/img/profile/backHome.png" class="backHome" />
      </div>
      <div slot="center" class="nav-text">用户注册</div>
    </nav-bar>
    <!-- 头像选择 -->
    <div class="showAvatar">
      <img src="http://47.106.182.193:8000/upload/16/avatar" />
      <img src="http://47.106.182.193:8000/upload/15/avatar" />
    </div>
    <div class="chooseAvatar">
      <label for="girl" @click="isgirl"> <input type="checkbox" id="gril" v-model="isGirl" /> gril? </label>
      <label for="boy" @click="isboy"> <input type="checkbox" id="boy" v-model="isBoy" /> boy? </label>
    </div>
    <!-- 注册表单 -->
    <div class="register-form">
      <div class="name">
        <input type="text" placeholder="账号名" requirde maxlength="12" v-model="name" />
      </div>
      <div class="password">
        <input type="password" placeholder="密码" requirde maxlength="12" v-model="password" />
      </div>
      <!-- 协议说明 -->
      <div class="agreement">
        <label for="agreement">
          <input type="checkbox" id="agreement" v-model="isAgree" />
          我已认真阅读并接受
          <a href="">mogu法律声明</a>、
          <a href="">mogu隐私协议</a>
        </label>
      </div>
      <div class="subBtn" @click="getUserInfo">
        <button :disabled="!isAgree">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar.vue";
import { register } from "../../network/register";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      name: "",
      password: "",
      oneClick: true,
      isAgree: false,
      isGirl: true,
      isBoy: false,
    };
  },
  methods: {
    getUserInfo() {
      // 账号密码为空
      if (!this.name || !this.password) {
        this.$toast.show("账号或者密码为空~");
      } else {
        // 注册
        if (this.oneClick) {
          register(this.name, this.password);

          this.$toast.show("注册成功！即将跳转到登录界面...", 2000);
          this.oneClick = false;
          // 3秒后跳转到登录界面
          setTimeout(() => {
            this.$router.push("/login");
          }, 3000);
        } else {
          this.$toast.show("请不要重复注册~");
        }
      }
    },
    isgirl() {
      this.isGirl = !this.isGirl;
      this.isBoy = !this.isBoy;
    },
    isboy() {
      this.isBoy = !this.isBoy;
      this.isGirl = !this.isGirl;
    },
    // 返回首页
    backHome() {
      this.$router.push("/home");
    },
  },
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
.register-form {
  text-align: center;
  margin-top: 50px;
}
.name,
.password,
.subBtn {
  margin-bottom: 20px;
}
.name input,
.password input {
  width: 80%;
  font-size: 25px;
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
.agreement {
  margin: 0 auto;
  width: 70%;
  font-size: 14px;
}
.agreement a {
  color: #ff5777;
}

/* 头像 */
.showAvatar {
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  justify-content: space-evenly;
}
.showAvatar img {
  width: 120px;
}
.chooseAvatar {
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  justify-content: space-around;
}
.backHome {
  width: 35px;
  margin-top: 10%;
}
</style>

<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="center">个人信息</div>
    </nav-bar>
    <profile-login />
    <user-assets />
    <profile-list />
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar.vue";
import ProfileList from "./childComps/ProfileList.vue";
import ProfileLogin from "./childComps/ProfileLogin.vue";
import UserAssets from "./childComps/UserAssets.vue";
import localCache from "../../common/cache";
export default {
  name: 'profile',
  components: {
    NavBar,
    ProfileList,
    ProfileLogin,
    UserAssets,
  },
  data() {
    return {};
  },
  activated() {
    //活跃转态时，判断是否有值，有值跳转到profileOk页面
    const token = localCache.getCache("token");
    if (token) {
      this.$router.push("/profileOk");
    }
  },
};
</script>

<style scoped>
.profile-nav {
  background: var(--color-tint);
  color: #fff;
  font-weight: 550;
  font-size: 17px;
  letter-spacing: 1px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
}
</style>

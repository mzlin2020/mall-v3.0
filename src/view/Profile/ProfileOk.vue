<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="center">个人信息</div>
    </nav-bar>
    <profile-login-ok />
    <user-assets />
    <profile-list />
    <feedback-icon @click.native="goToFeedback" v-show="showFeedback" />
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar.vue";
import ProfileList from "./childComps/ProfileList.vue";
import ProfileLoginOk from "./childComps/ProfileLoginOk.vue";
import UserAssets from "./childComps/UserAssets.vue";
import FeedbackIcon from "../Feedback/childComps/FeedbackIcon.vue";
export default {
  name: "profileOk",
  components: {
    NavBar,
    ProfileList,
    UserAssets,
    ProfileLoginOk,
    FeedbackIcon,
  },
  methods: {
    // 去反馈问题
    goToFeedback() {
      this.$router.push("/feedback");
    },
  },
  data() {
    return {
      showFeedback: false,
    };
  },
  activated() {
    setTimeout(() => {
      this.showFeedback = true;
    }, 3000);
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

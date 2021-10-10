<template>
  <div class="profile-list">
    <profile-list-item>
      <div slot="image"><img src="../../../assets/img/profile/profile-user.png" alt="" /></div>
      <div slot="text">我的消息</div>
    </profile-list-item>

    <profile-list-item>
      <div slot="image"><img src="../../../assets/img/profile/profile-integral.png" alt="" /></div>
      <div slot="text">积分商城</div>
    </profile-list-item>

    <profile-list-item>
      <div slot="image"><img src="../../../assets/img/profile/profile-vip.png" alt="" /></div>
      <div slot="text">会员卡</div>
    </profile-list-item>

    <profile-list-item>
      <div slot="image"><img src="../../../assets/img/profile/profile-good.png" alt="" /></div>
      <div slot="text">点赞购物APP</div>
    </profile-list-item>
  </div>
</template>

<script>
import ProfileListItem from "./ProfileListItem.vue";
export default {
  components: {
    ProfileListItem,
  },
};
</script>

<style scoped>
.profile-list {
  padding: 10px 0px 10px 20px;
}
.profile-list-item {
  padding: 15px 0 0px 0;
}
</style>

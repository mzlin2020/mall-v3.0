<template>
  <div class="user-assets">
    <user-assets-item v-for="item in AssetsInfo" :key="item.unit" :AssetsInfoItem="item" />
  </div>
</template>

<script>
import UserAssetsItem from "./UserAssetsItem.vue";
export default {
  components: {
    UserAssetsItem,
  },
  data() {
    return {
      AssetsInfo: {
        money: {
          count: "0.00",
          desc: "我的余额",
          unit: "元",
        },
        discount: {
          count: 0,
          desc: "我的优惠",
          unit: "个",
        },
        integral: {
          count: 0,
          desc: "我的积分",
          unit: "分",
        },
      },
    };
  },
};
</script>

<style scoped>
.user-assets {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 80px;
  box-shadow: 0 8px 0 #eee;
}
</style>

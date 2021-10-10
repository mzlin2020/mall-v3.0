<template>
  <div>
    <tab-bar>
      <!-- 首页 -->
      <tab-bar-item path="/home">
        <img slot="item-icon" src="../../../assets/img/tabbar/home.png" />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.png" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <!-- 分类 -->
      <tab-bar-item path="/category">
        <img slot="item-icon" src="../../../assets/img/tabbar/category.png" />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.png" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <!-- 购物车 -->
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="../../../assets/img/tabbar/cart.png" />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/cart_active.png" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <!-- 我的 -->
      <tab-bar-item :path="ProfilePath">
        <img slot="item-icon" src="../../../assets/img/tabbar/profile.png" />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.png" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./TabBar.vue";
import TabBarItem from "./TabBarItem.vue";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
  computed: {
    ProfilePath() {
      const token = localStorage.getItem("token");
      // console.log(token);
      if (token) {
        return "/profileOk";
      } else {
        return "/profile";
      }
    },
  },
};
</script>

<style></style>

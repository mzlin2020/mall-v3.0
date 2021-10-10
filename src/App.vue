<template>
  <div id="app">
    <keep-alive exclude="Detail,Purchase">
      <router-view />
    </keep-alive>
    <main-tab-bar v-show="!isHiddenTabBar" />
  </div>
</template>

<script>
import MainTabBar from "./components/common/tabBar/MainTabBar.vue";
export default {
  components: {
    MainTabBar,
  },
  name: "App",
  computed: {
    isHiddenTabBar() {
      return this.$store.state.hiddenTabBar;
    },
  },
};
</script>

<style scoped>
/* 导入基本样式 */
@import url("./assets/css/base.css");
</style>

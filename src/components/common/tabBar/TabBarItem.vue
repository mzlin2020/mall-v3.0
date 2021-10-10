<template>
  <div class="tabbar-item" @click="changeRouter">
    <!-- 图标未选中时的状态 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <!-- 图标选中时的状态 -->
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 文字选中时的样式 -->
    <div :class="{ active: isActive }"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
  },
  methods: {
    changeRouter() {
      //this.$router表示全局路由对象
      this.$router.push(this.path);
    },
  },
  computed: {
    isActive() {
      //this.$route当前路由
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
};
</script>

<style scoped>
.tabbar-item {
  height: 49px;
  font-size: 14px;
  text-align: center;
  color: #444;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: var(--color-tint);
}
</style>

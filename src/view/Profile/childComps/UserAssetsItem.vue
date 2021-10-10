<template>
  <div class="user-assets-item" v-if="AssetsInfoItem">
    <!-- 数量 -->
    <p class="num">
      <span class="count">{{ AssetsInfoItem.count }}</span>
      <span class="unit">{{ AssetsInfoItem.unit }}</span>
    </p>
    <!-- 资产名称 -->
    <p class="desc">{{ AssetsInfoItem.desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    AssetsInfoItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.count {
  color: var(--color-high-text);
  font-size: 18px;
  vertical-align: middle; /*实现行内垂直居中*/
}
.unit,
.desc {
  font-size: 14px;
  color: #333;
}
.desc {
  margin-top: 5px;
}
.unit {
  margin-left: 5px;
  vertical-align: middle; /*实现行内垂直居中*/
}
</style>

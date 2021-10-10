<template>
  <div class="base-info" v-if="baseInfo">
    <!-- 判断baseInfo是否是空的，空的就不渲染了-->
    <!-- 标题 -->
    <div class="title">{{ baseInfo.title }}</div>
    <!-- 价格 -->
    <div class="price-info">
      <span class="NowPrice">￥{{ baseInfo.NowPrice }}</span>
      <span class="oldPrice">{{ baseInfo.oldPrice }}</span>
      <span class="discount">{{ baseInfo.discountDesc }}</span>
    </div>
    <!-- 销量 收藏 模块 -->
    <div class="services">
      <span>{{ baseInfo.columns[0] }}</span>
      <span>{{ baseInfo.columns[1] }}</span>
      <span>{{ baseInfo.columns[2] }}</span>
    </div>

    <div class="other-info">
      <span><img :src="baseInfo.services[0].icon" alt="" />{{ baseInfo.services[0].name }}</span>
      <span><img :src="baseInfo.services[1].icon" alt="" />{{ baseInfo.services[1].name }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 15px;
  text-align: justify; /*使文本的两端都对齐*/
  padding: 10px 5px 10px 5px;
  color: #222;
}
.NowPrice {
  font-size: 22px;
  color: var(--color-high-text);
}
.oldPrice {
  text-decoration: line-through; /*定义穿过文本下的一条线*/
  color: #999;
  font-size: 13px;
  margin-left: 8px;
}
.discount {
  color: white;
  font-size: 14px;
  background-color: var(--color-high-text);
  border-radius: 6px;
  position: relative;
  top: -8px;
  margin-left: 5px;
  padding: 2px 4px;
}
.services {
  display: flex;
  font-size: 14px;
  color: #999;
  margin-top: 20px;
  justify-content: space-between;
  padding: 0 3px 8px 3px;
  box-shadow: 0 2px 1px rgba(100, 100, 100, 0.08);
}
.other-info {
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  padding: 15px 5px 15px 5px;
  box-shadow: 0 4px 2px rgba(100, 100, 100, 0.08);
  color: rgb(104, 102, 102);
}
.other-info img {
  height: 15px;
  width: 15px;
  position: relative;
  top: 2px;
  right: 2px;
}
</style>

<template>
  <div class="goods-list">
    <div class="goods" v-if="goods">
      <!-- 遍历出所有的goods-list-item -->
      <goods-list-item v-for="item in goods" :key="item.index" :eachGoodInfo="item" :canNotClick="canNotClick" />
    </div>
  </div>
</template>

<script>
import goodsListItem from "./goodsListItem.vue";
export default {
  components: {
    goodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
    //是否能够被点击
    canNotClick: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
}
</style>

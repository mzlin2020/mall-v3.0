<template>
  <div class="goods-item">
    <div>
      <!-- 展示图 -->
      <img v-lazy="showImage" @click="changeRouter" />
      <!-- 文本信息 -->
      <div class="goods-info">
        <p>{{ eachGoodInfo.title }}</p>
        <span class="price">￥{{ eachGoodInfo.price }}</span>
        <img src="../../../assets/img/common/collect.png" />
        <span class="collect">{{ eachGoodInfo.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    eachGoodInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    canNotClick: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    changeRouter() {
      if (this.canNotClick) {
        this.$router.push("/detail/" + this.eachGoodInfo.iid);
      } else {
        this.$toast.show("该商品没有详情~");
      }
    },
  },
  computed: {
    showImage() {
      //由图片存放的位置有以下两种情况
      return this.eachGoodInfo.image || this.eachGoodInfo.show.img;
    },
  },
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 20px;
  /* position: relative; */
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px; /*图片圆角*/
}
.goods-info {
  font-size: 12px;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis; /*这三行代码效果：单行文本溢出显示省略号*/
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info img {
  width: 14px;
  height: 10px;
  margin-right: 5px;
}
</style>

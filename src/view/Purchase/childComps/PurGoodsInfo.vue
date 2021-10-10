<template>
  <div class="pur-goods-info">
    <div class="shop-info">
      <div class="shop-name">
        <img src="../../../assets/img/purchase/shop.png" alt="" />
        <span>{{ goodsInfo.shopName }}</span>
      </div>
      <div class="chat-shop">
        <img src="../../../assets/img/purchase/chat.png" alt="" />
        <span>联系商家</span>
      </div>
    </div>

    <!-- 商品信息 -->
    <div class="goods-info">
      <div class="good-img">
        <img :src="goodsInfo.image" alt="" />
      </div>
      <div class="title">
        <span>{{ goodsInfo.title }}</span>
      </div>
      <div class="price">￥{{ goodsInfo.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsInfo: null,
    };
  },
  created() {
    this.goodsInfo = this.$store.state.purchaseGoods;
    // console.log(this.goodsInfo);
  },
};
</script>

<style scoped>
.pur-goods-info {
  height: 30%;
  padding: 12px;
  background-color: #fff;
  margin-top: 10px;
}
.shop-info {
  display: flex;
  justify-content: space-between;
}
.shop-name img,
.chat-shop img {
  width: 22px;
  vertical-align: middle;
  margin-right: 5px;
}
.goods-info {
  display: flex;
  margin: 10px 0px;
  height: 115px;
}
.goods-img,
.price {
  flex: 0.25;
}
.title {
  flex: 1;
  padding: 2px 4px;
  color: #777;
}
.price {
  padding-top: 45px;
  font-size: 20px;
}
.good-img img {
  width: 80px;
}
</style>

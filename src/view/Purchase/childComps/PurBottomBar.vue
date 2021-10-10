<template>
  <div class="pur-bottom-bar">
    <div class="allPrice">
      总价：
      <span class="price">${{ this.$store.state.purchaseGoods.price }}</span>
    </div>
    <div class="buy">
      <span class="goods-count">共1件商品</span>
      <span class="buy-btn" @click="buyIt">提交订单</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    buyIt() {
      this.$toast.show("余额不足~");
    },
  },
};
</script>

<style scoped>
.pur-bottom-bar {
  display: flex;
  justify-content: space-between;
  background-color: #f6f5ec;
  height: 55px;
  line-height: 55px;
  text-align: center;
  z-index: 99;
}
.allPrice {
  margin-left: 5px;
}
.price {
  color: #ff5777;
  font-size: 20px;
}
.buy-btn {
  background-color: #ff5777;
  color: #fff;
  height: 55px;
  display: inline-block;
  padding: 0 15px;
}
.goods-count {
  color: #aaa;
  font-size: 14px;
  margin-right: 4px;
}
</style>

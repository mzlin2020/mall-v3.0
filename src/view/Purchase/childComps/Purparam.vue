<template>
  <div class="pur-param">
    <div class="changeNew">
      意外换新
      <span>衣服防护先意外破损可换新</span>
      <img src="../../../assets/img/purchase/question.png" alt="" />
    </div>
    <div class="freight">
      <span>退货补运费</span>
      <span
        >商家赠送
        <img src="../../../assets/img/purchase/right.png" alt="" class="span-img" />
      </span>
    </div>
    <div class="delay">
      <span>延误必赔</span>
      <span
        >商家赠送
        <img src="../../../assets/img/purchase/right.png" alt="" class="span-img" />
      </span>
    </div>
    <div class="remark">
      <span>订单备注</span>
      <input type="text" placeholder="想跟商家进行沟通~" />
    </div>
    <div class="price">
      <span>共1件</span>
      <span>店铺合计：</span>
      <span class="finalPrice">￥{{ this.$store.state.purchaseGoods.price }}</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pur-param {
  margin-top: 2px;
  background-color: #fff;
  padding: 12px;
}
.pur-param div {
  margin-top: 14px;
  font-size: 16px;
}
.changeNew span {
  color: #777;
  font-size: 15px;
  padding-left: 10px;
}
.changeNew img,
.span-img {
  width: 20px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.freight,
.delay {
  display: flex;
  justify-content: space-between;
}
.remark input {
  padding: 3px 4px;
  margin-left: 10px;
  width: 70%;
  background-color: #eee;
  border: none;
}
.price {
  padding-top: 10px;
  text-align: right;
}
.finalPrice {
  color: #ff5777;
  font-size: 18px;
}
</style>

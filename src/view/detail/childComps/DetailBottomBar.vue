<template>
  <div class="bottom-bar">
    <div class="customer-service">
      <img src="../../../assets/img/detail/service.png" alt="" />
      <p>客服</p>
    </div>
    <div class="store">
      <img src="../../../assets/img/detail/store.png" alt="" />
      <p>店铺</p>
    </div>
    <div class="collect">
      <img src="../../../assets/img/detail/collect.png" alt="" />
      <p>收藏</p>
    </div>
    <div id="shopping-cart">
      <p @click="addCart">加入购物车</p>
    </div>
    <div id="purchase" @click="purchase">
      <p>购买</p>
    </div>
  </div>
</template>

<script>
import localCache from "../../../common/cache";
export default {
  data() {
    return {
      token: null,
    };
  },
  methods: {
    addCart() {
      //加入购物车
      this.$emit("addCart");
      this.$toast.show("加入购物车成功");
    },
    // 购买按钮
    purchase() {
      if (!this.token) {
        this.$toast.show("请先进行登录~");
      } else {
        // 删除之前订单的缓存vuex
        this.$store.commit("deletePurchagePage");
        // 缓存新的数据
        this.$emit("purchaseGoods");
        // 跳转页面 
        this.$router.push("/purchase");
      }
    },
  },
  created() {
    const token = localCache.getCache("token");
    this.token = token;
  },
};
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  background-color: burlywood;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 14px;
  display: flex;
  background-color: #fff;
  padding-left: 10px;
}

/* 图片 */
.bottom-bar img {
  width: 25px;
  height: 25px;
  margin-top: 4px;
}
.customer-service,
.store,
.collect {
  flex-grow: 1;
  color: rgb(50, 50, 50);
}
#shopping-cart {
  font-size: 18px;
  background-color: rgb(255, 224, 3);
  height: 49px;
  line-height: 49px;
  flex-grow: 1.5;
  text-align: center;
  color: rgb(50, 50, 50);
}

#purchase {
  font-size: 18px;
  background-color: rgb(255, 119, 154);
  height: 49px;
  line-height: 49px;
  color: #fff;
  flex-grow: 1.5;
  text-align: center;
}
</style>

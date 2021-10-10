<template>
  <div class="shopinfo" v-if="shopInfo">
    <!-- 商店logo与图片 -->
    <div class="shop-name-logo">
      <img :src="shopInfo.shopLogo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <!-- 商家的相关信息面板 -->
    <div class="allShopInfo">
      <!-- 左边的销量与全部宝贝数据 -->
      <div class="sell-info">
        <p class="sell-data">{{ shopInfo.cSell | sellCountFilter }}</p>
        <!-- 过滤器函数总接收表达式的值作为第一个参数-->
        <p class="sell-word">总销量</p>
      </div>

      <div class="allGoods">
        <p class="goods-data">{{ shopInfo.goods }}</p>
        <p class="goods-word">全部宝贝</p>
      </div>

      <!-- 右边的商店评分数据 -->
      <div class="score-info">
        <p v-for="item in shopInfo.score" :key="item.index">
          <span>{{ item.name }}</span>
          <span class="shopScore" :style="changeColor(item.isBetter)">{{ item.score }}</span>
        </p>
      </div>
      <!-- 店铺评分的高低 -->
      <div class="score-info2">
        <p v-for="item in shopInfo.score" :key="item.index">
          <span v-if="item.isBetter" class="score-height">高</span>
          <span v-else class="score-low">低</span>
        </p>
      </div>
    </div>
    <!-- 进店按钮 -->
    <div class="shopBtn"><button>进店逛逛</button></div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    //  转化总销量
    sellCountFilter(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
  data() {
    return {
      green: "yellowgreen",
      red: "#ff5777",
    };
  },
  methods: {
    changeColor(isBetter) {
      //改变商家评分处字体颜色
      return isBetter ? { color: this.red } : { color: this.green };
    },
  },
};
</script>

<style scoped>
.shopinfo {
  padding-bottom: 5px;
  box-shadow: 0 4px 1px rgba(100, 100, 100, 0.08);
}
.shop-name-logo img {
  width: 40px;
  height: 40px;
  border-radius: 50%; /*形成一个圆*/
  margin: 25px 15px 20px 10px;
  border: 1px solid rgb(228, 220, 220);
  vertical-align: middle; /* 使图片置于中间位置*/
}
.shop-name-logo span {
  color: rgb(66, 66, 66);
}
.allShopInfo {
  display: flex;
  justify-content: space-around;
}
.sell-info {
  margin: 10px 0px 20px 15px;
  text-align: center;
}
.allGoods {
  margin: 10px 10px 20px 10px;
  border-right: 1px rgb(179, 173, 173) solid;
  padding-right: 15px;
  text-align: center;
}
.sell-word,
.goods-word {
  font-size: 14px;
  margin-top: 15px;
}
.goods-data,
.sell-data {
  font-size: 18px;
  font-weight: bold;
  color: rgb(77, 74, 74);
}
.score-info {
  margin-top: -10px;
  padding-left: 5px;
  margin-right: 10px;
}
.score-info p {
  height: 30px;
  line-height: 30px;
}
/* 为了店铺高低评分字样能单独成一列整齐排列，单独放进一个flex-item中 */
.score-info2 {
  margin-top: -10px;
}
.score-info2 p {
  height: 30px;
  line-height: 30px;
}
.shopScore {
  padding-left: 15px;
}
.score-height {
  color: white;
  background-color: var(--color-high-text);
  padding: 1px;
  margin-right: 5px;
}
.score-low {
  color: white;
  background-color: yellowgreen;
  padding: 1px;
  margin-right: 5px;
}
.shopBtn button {
  display: block;
  margin: 10px auto;
  padding: 4px 15px;
  background-color: rgb(224, 220, 224);
  border: none;
  outline-color: rgb(138, 85, 85); /*btn点击后边框颜色修改*/
  color: rgb(78, 78, 78);
}
</style>

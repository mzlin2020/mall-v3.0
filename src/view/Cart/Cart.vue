<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center" class="navText">购物车({{ $store.state.cartList.length }})</div>
      <div slot="right" @click="showCartManagement">
        <img v-show="!isShowCartManagement" src="../../assets/img/cart/cartManagement.png" class="cartManagement" />
        <img
          v-show="isShowCartManagement"
          src="../../assets/img/cart/cartManagement_active.png"
          class="cartManagement"
        />
      </div>
    </nav-bar>
    <!-- 滚动区域 -->
    <scroll :pullUpLoad="true" :probeType="3" ref="scroll" class="content" @pullingUp="tipsToast(isNothingInCart)">
      <!-- 购物车中没有商品时，显示 -->
      <cart-show-nothing v-show="isNothingInCart" />
      <goods-list v-show="isNothingInCart" :goods="recommendGoods" :canNotClick="canNotClick" />
      <cart-list />
    </scroll>
    <!-- 结算区域 -->
    <cart-bottom-bar v-if="!isShowCartManagement" />
    <cart-management v-else />
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar.vue";
import CartList from "./childComps/CartList.vue";
import scroll from "../../components/common/scroll/Scroll.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";
import CartManagement from "./childComps/CartManagement.vue";
import CartShowNothing from "./childComps/CartShowNothing.vue";
import goodsList from "../../components/content/goods/goodsList.vue";
import { getDetailGoodsList } from "../../network/detail";
export default {
  name: "cart",
  components: {
    NavBar,
    CartList,
    scroll,
    CartBottomBar,
    CartShowNothing,
    goodsList,
    CartManagement,
  },
  data() {
    return {
      recommendGoods: null,
      isShowCartManagement: true,
      canNotClick: false, //推荐商品不能点击
    };
  },
  computed: {
    isNothingInCart() {
      return this.$store.state.cartList.length === 0;
    },
  },
  activated() {
    this.$refs.scroll.refresh();

    //购物车没有商品时，默认管理购物车的按钮不选中
    if (this.$store.state.cartList.length === 0) {
      this.isShowCartManagement = false;
    }
  },
  created() {
    getDetailGoodsList().then((res) => {
      this.recommendGoods = res.data.list;
    });
  },
  methods: {
    showCartManagement() {
      this.isShowCartManagement = !this.isShowCartManagement;
    },

    tipsToast(isNothingInCart) {
      if (isNothingInCart) {
        this.$toast.show("没有更多内容了~");
        //1秒后再次启动上拉加载更多
        setTimeout(() => {
          this.$refs.scroll.scroll.finishPullUp();
        }, 2000);
      }
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
}
.navText {
  color: #fff;
  font-weight: 550;
  font-size: 17px;
  letter-spacing: 0.5px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 89px;
  right: 0;
  left: 0;
  overflow: hidden;
}
.cartManagement {
  width: 35px;
  margin-top: 6px;
}
</style>

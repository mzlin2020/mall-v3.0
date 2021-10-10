<template>
  <div id="detail">
    <detail-nav-bar @changeNavPos="changeNavPos" ref="nav" />
    <!-- 滚动区域 -->
    <scroll class="content" :probeType="3" :pullUpLoad="true" @getpos="getpos" ref="scroll">
      <detail-swiper :topImage="topImage" />
      <detail-base-info :baseInfo="baseInfo" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detail-params :GoodsParam="GoodsParam" ref="params" />
      <detail-comment-info :commemtInfo="commemtInfo" ref="comment" />
      <goods-list :goods="detailGoodsList" ref="showgoods" :canNotClick="canNotClick" />
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="ClickBack" />
    <detail-bottom-bar @addCart="addCart" @purchaseGoods="purchaseGoods" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import { getDetail, BaseInfo, shopInfo, GoodsParam, getDetailGoodsList } from "../../network/detail";
import DetailSwiper from "./childComps/Detailswiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParams from "./childComps/DetailParams.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import goodsList from "../../components/content/goods/goodsList.vue";
import scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "./childComps/BackTop.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailCommentInfo,
    goodsList,
    scroll,
    BackTop,
    DetailBottomBar,
  },
  data() {
    return {
      iid: null,
      //保存轮播图数据
      topImage: null,
      baseInfo: null,
      shopInfo: null,
      detailInfo: null,
      GoodsParam: null,
      commemtInfo: null,
      detailGoodsList: null,
      isShowBackTop: false,
      offsetTopTitle: null,
      canNotClick: false, //推荐商品不能被点击
    };
  },
  created() {
    //该商品对应的iid
    this.iid = this.$route.params.iid;

    // 获取数据
    getDetail(this.$route.params.iid).then((res) => {
      // 轮播图数据
      this.topImage = res.result.itemInfo.topImages;

      //商品基本信息
      let data = res.result;
      this.baseInfo = new BaseInfo(data.itemInfo, data.shopInfo.services, data.columns);
      //获取商家信息
      this.shopInfo = new shopInfo(data.shopInfo);

      //获取商品图片
      this.detailInfo = data.detailInfo;

      //获取商品参数
      this.GoodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule);

      // 获取商品评论信息
      if (data.rate.Crate !== 0) {
        this.commemtInfo = data.rate.list[0];
      }

      // 获取商品推荐的数据
      getDetailGoodsList().then((res) => {
        this.detailGoodsList = res.data.list;
      });
    });
  },
  methods: {
    getpos(position) {
      this.isShowBackTop = -position.y > 1000;

      // 2. 监听position滚动到的位置，改变nav-bar中的currentIndex
      const positionY = -position.y;
      if (positionY >= 0 && positionY < this.offsetTopTitle[1]) {
        this.$refs.nav.currentIndex = 0;
      } else if (positionY >= this.offsetTopTitle[1] && positionY < this.offsetTopTitle[2]) {
        this.$refs.nav.currentIndex = 1;
      } else if (positionY >= this.offsetTopTitle[2] && positionY < this.offsetTopTitle[3]) {
        this.$refs.nav.currentIndex = 2;
      } else if (positionY >= this.offsetTopTitle[3]) {
        this.$refs.nav.currentIndex = 3;
      }
    },
    ClickBack() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    //商品详情图片是否加载完成
    imgLoad() {
      this.$refs.scroll.refresh(); //每有一张图片加载完成，重新刷新一次页面

      // 初始化一个存放四个组件偏移量的变量
      this.offsetTopTitle = [];
      this.offsetTopTitle.push(0); //商品
      this.offsetTopTitle.push(this.$refs.params.$el.offsetTop);
      this.offsetTopTitle.push(this.$refs.comment.$el.offsetTop);
      this.offsetTopTitle.push(this.$refs.showgoods.$el.offsetTop);
      // console.log(this.offsetTopTitle);
    },
    // 点击navbar改变位置
    changeNavPos(index) {
      this.$refs.scroll.scrollTo(0, -this.offsetTopTitle[index]);
    },

    //加入购物车
    addCart() {
      //将需要展示在购物车的数据保存在一个对象中
      const product = {};
      product.image = this.topImage[0];
      product.title = this.baseInfo.title;
      product.desc = this.baseInfo.desc;
      product.price = this.baseInfo.realPrice;
      product.iid = this.iid;
      product.checked = false; //自定义属性，表示商品处于未加入购物车的状态
      //将对象保存至vuex
      this.$store.commit("addCart", product);
    },
    // 下订单
    purchaseGoods() {
      const purGoods = {};
      purGoods.image = this.topImage[0];
      purGoods.title = this.baseInfo.title;
      purGoods.desc = this.baseInfo.desc;
      purGoods.price = this.baseInfo.realPrice;
      purGoods.shopName = this.shopInfo.name;
      // 添加至vuex
      this.$store.commit("purchaseGoods", purGoods);

    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 30;
  background-color: #fff;
  height: 100vh;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
}
</style>

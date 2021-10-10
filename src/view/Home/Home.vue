<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <!-- 外部的tab-control -->
    <tab-control
      :titles="titles"
      v-show="isShowTabControl"
      class="tab-control-out"
      @tabClick="tabClick"
      ref="outTabControl"
    />
    <!-- 滚动区域 -->
    <scroll :pullUpLoad="true" class="content" :probeType="3" @getpos="getPostion" @pullingUp="loadMore" ref="scroll">
      <home-swiper @swiperImageLoad="swiperImageLoad" />
      <recommend-view @recommendLoad="recommendLoad" />
      <feature-view />
      <tab-control :titles="titles" @tabClick="tabClick" ref="inSideTabControl" />
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTopClick" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import NavBar from "../../components/common/navBar/NavBar.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import TabControl from "../../components/content/tabControl/TabControl .vue";
import { getHomeGoods } from "../../network/home";
import goodsList from "../../components/content/goods/goodsList.vue";
import scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "./childComps/BackTop.vue";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    FeatureView,
    RecommendView,
    TabControl,
    goodsList,
    scroll,
    BackTop,
  },
  data() {
    return {
      titles: ["流行", "新款", "精选"],
      // 保存商品数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      // 当前显示的风格商品
      currentType: "pop",
      //用于保存页面滚动的位置
      saveY: 0,
      // 是否显示backTop图标
      isShowBackTop: false,
      // 轮播图图片是否已加载
      swiperImageIsLoad: false,
      //tab-control的偏移量
      tabOffsetTop: 0,
      // 是否替换滚动区域的tab-control
      isShowTabControl: false,
    };
  },
  methods: {
    getGoodsInfo(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.scroll.finishPullUp(); //再次调用上拉加载更多
      });
    },
    //切换商品风格展示
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // 保持内外的tabControl协调一致
      this.$refs.inSideTabControl.currentIndex = index;
      this.$refs.outTabControl.currentIndex = index;
    },
    // 滚动位置信息
    getPostion(position) {
      // 思考：每移动一点点，都在实时监听，是否过于消耗性能？
      this.isShowBackTop = -position.y > 1000;

      // 如果滚动的距离大于offsettop,将外tab-control的v-show改为true
      this.isShowTabControl = -position.y > this.tabOffsetTop;
    },
    // 上拉加载更多
    loadMore() {
      this.getGoodsInfo(this.currentType);
      this.$refs.scroll.scroll.refresh();
    },
    // 返回顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 解决tabControl吸顶问题
    swiperImageLoad() {
      // 轮播图片已加载
      this.swiperImageLoad = true;
    },
    recommendLoad() {
      // 推荐商品的图片已加载
      if (this.swiperImageLoad) {
        this.tabOffsetTop = this.$refs.inSideTabControl.$el.offsetTop;
      }
    },
  },
  created() {
    this.getGoodsInfo("pop");
    this.getGoodsInfo("new");
    this.getGoodsInfo("sell");
  },
  // 页面活跃时
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  //页面不活跃时
  deactivated() {
    // 不活跃时，将home的位置保存下来
    this.saveY = this.$refs.scroll.scroll.y;
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 550;
  font-size: 17px;
  letter-spacing: 1px;
}
.tab-control-out {
  position: relative;
  z-index: 9;
  top: -0.5px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
}

/* 外部tab-control的样式 */
.tab-control-out {
  position: relative;
  z-index: 9;
  top: -0.5px;
}
</style>

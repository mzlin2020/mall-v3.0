<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.title">
      <img :src="item.image" @load="imgLoad" @click="tipsToast" />
    </swiper-item>
  </swiper>
</template>

<script>
import { getHomeMultidata } from "../../../network/home";
import Swiper from "../../../components/common/swiper/Swiper";
import SwiperItem from "../../../components/common/swiper/SwiperItem";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      banners: null,
      isLoad: false,
    };
  },
  created() {
    this.getSwiperInfo();
  },
  methods: {
    getSwiperInfo() {
      // 轮播图数据
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        // console.log(this.banners);
      });
    },
    // 监听图片是否已经加载到页面
    imgLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true; //监听一张图片即可
      }
    },

    //点击提示
    tipsToast() {
      this.$toast.show("暂无资源~");
    },
  },
};
</script>

<style scoped></style>

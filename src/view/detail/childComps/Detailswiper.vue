<template>
  <div id="swiper" v-if="topImage">
    <swiper>
      <swiper-item v-for="item in topImage" :key="item.index">
        <img :src="item" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "../../../components/common/swiper/Swiper.vue";
import SwiperItem from "../../../components/common/swiper/SwiperItem.vue";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
#swiper {
  height: 300px;
  overflow: hidden;
}
</style>

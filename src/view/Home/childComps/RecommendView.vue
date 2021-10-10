<template>
  <div id="recommend">
    <div class="recommendItem" v-for="item in recommendInfo" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" @load="recommendLoad" />
        <div class="text">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
import { getHomeMultidata } from "../../../network/home";
export default {
  data() {
    return {
      recommendInfo: null,
      // 图片资源是否已加载
      isLoad: false,
    };
  },
  methods: {
    getRecommendInfo() {
      return getHomeMultidata().then((res) => {
        this.recommendInfo = res.data.recommend.list;
      });
    },
    recommendLoad() {
      //判断图片是否已加载
      if (!this.isLoad) {
        this.$emit("recommendLoad");
        this.isLoad = true;
      }
    },
  },
  created() {
    //获取数据
    this.getRecommendInfo();
  },
};
</script>

<style scoped>
#recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 10px 0 20px 0;
  border-bottom: 10px solid #eee;
}
.recommendItem {
  flex: 1;
}
.recommendItem img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
.text {
  color: #666;
  font-size: 15px;
}
</style>

<template>
  <div v-if="detailInfo">
    <!-- 文字描述 -->
    <div class="text">
      <div class="left-line"></div>
      <div class="text-content">{{ detailInfo.desc }}</div>
      <div class="right-line"></div>
    </div>

    <!-- 图片 -->
    <div class="wearer-effect">
      <div v-for="item in detailInfo.detailImage[0].list" :key="item.index" class="goodsImage">
        <img v-lazy="item" @load="imgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      // 每有一张图片加载完成，对外发出一个事件
      this.$emit("imgLoad");
    },
  },
  // computed: {
  //   //商品图的数量
  //   goodsCount() {
  //     return this.detailInfo.detailImage[0].list.length;
  //   },
  // },
};
</script>

<style scoped>
.text {
  padding: 15px;
  font-size: 13px;
  color: #555;
}
.left-line::before,
.right-line::after {
  position: absolute;
  bottom: 0;
  width: 5px;
  height: 5px;
  content: "";
  background-color: #333333;
}
.right-line::after {
  right: 0;
}
.left-line,
.right-line {
  position: relative;
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  margin: 10px;
}
.right-line {
  float: right;
}
.left-line {
  float: left;
}
.text-content {
  padding: 25px 0 0 0;
}
/* .info-key{
    margin: 10px;
    font-size: 14px;
    color: #444;
  } */

.goodsImage > img {
  width: 100%;
}
</style>

<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: 0,
    };
  },
  props: {
    // 是否开启滚动侦听，默认关闭
    probeType: {
      type: Number,
      default: 0,
    },
    // 是否开启上拉记载更多，默认不开启
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true, //DOM树发生改变，触发scroll的refresh方法
    });
    //   监听滚动位置
    this.scroll.on("scroll", (position) => {
      this.$emit("getpos", position);
    });
    // 启动上拉加载更多
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    refresh() {
      //调用scroll的refresh方法，进行刷新
      this.scroll.refresh();
    },
    scrollTo(x, y, time = 400) {
      // 将scroll实例的scrollTO函数的调用，封装成scrollTo函数，方便外部调用
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style scoped></style>

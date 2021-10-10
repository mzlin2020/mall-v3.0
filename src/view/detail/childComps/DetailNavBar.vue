<template>
  <div>
    <nav-bar class="nav-bar">
      <!-- 左边 -->
      <div slot="left" class="back">
        <img src="../../../assets/img/common/back.svg" @click="backHomePage" />
      </div>
      <!-- 中间 -->
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item, index) in titles"
          :key="item"
          :class="{ active: currentIndex === index }"
          @click="changeBtnColor(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navBar/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    changeBtnColor(index) {
      this.currentIndex = index;

      // 传递当前用户点击的是哪一个
      this.$emit('changeNavPos', index)
    },
    // 返回首页
    backHomePage() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 14px;
}
.active {
  color: var(--color-high-text);
}
.back {
  margin-top: 7px;
}
</style>

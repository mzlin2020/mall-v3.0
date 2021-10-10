<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <!-- 侧边栏 -->
    <slide-bar :slideBarInfo="slideBarInfo" @btnClick="getCurrentIndex" />
    <scroll class="content" :pullUpLoad="true" ref="scroll">
      <sub-category :subCategoryInfo="subCategoryInfo" @imgLoad="imgLoad" />
    </scroll>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar.vue";
import { getSlideBarInfo, getSubCategory } from "../../network/category";
import SlideBar from "./childComps/SlideBar.vue";
import SubCategory from "./childComps/SubCategory.vue";
import scroll from "../../components/common/scroll/Scroll.vue";
export default {
  components: {
    NavBar,
    SlideBar,
    SubCategory,
    scroll,
  },
  data() {
    return {
      slideBarInfo: null,
      subCategoryInfo: null,
      firstMaitKey: 3627,
    };
  },
  created() {
    // 左侧滑动边栏数据
    getSlideBarInfo().then((res) => {
      this.slideBarInfo = res.data.category.list;
    });

    //请求右侧图文数据（第一条）
    getSubCategory(this.firstMaitKey).then((res) => {
      this.subCategoryInfo = res.data.list;
    });
  },
  methods: {
    getCurrentIndex(obj) {
      getSubCategory(obj.maitKey).then((res) => {
        this.subCategoryInfo = res.data.list;
      });
    },

    // 刷新高度
    imgLoad() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var();
  background: var(--color-tint);
  color: #fff;
  font-weight: 550;
  font-size: 17px;
  letter-spacing: 1px;
}
.slide-bar {
  background-color: #f6f6f6;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 26vw;
  overflow: hidden;
}
</style>

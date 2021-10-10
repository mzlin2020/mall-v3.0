<template>
  <div class="slide-bar" v-if="slideBarInfo">
    <scroll class="content" :pullUpLoad="true">
      <ul>
        <li
          v-for="(item, index) in slideBarInfo"
          :key="item.title"
          :class="{ active: currentIndex === index }"
          @click="changeBtn(item, index)"
        >
          {{ item.title }}
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import scroll from "../../../components/common/scroll/Scroll.vue";
export default {
  props: {
    slideBarInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    scroll,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    changeBtn(item, index) {
      this.currentIndex = index;

      //传递maitKey出去
      const obj = {
        index,
        maitKey: item.maitKey,
        miniWallkey: item.miniWallkey,
      };
      this.$emit("btnClick", obj);
    },
  },
};
</script>

<style scoped>
.slide-bar {
  color: #333;
}
li {
  width: 26vw;
  text-align: center;
  font-size: 13px;
  padding: 15px 20px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 74vw;
  left: 0;
  overflow: hidden;
  background-color: #f6f6f6;
}
.active {
  color: var(--color-high-text);
  font-weight: 700;
  border-left: 5px solid var(--color-high-text);
  background-color: #fff;
}
</style>

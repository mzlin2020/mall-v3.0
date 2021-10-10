<template>
  <div id="feature">
    <img src="../../../assets/img/home/recommend_bg.jpg" @click="tipsToast" />
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  methods: {
    tipsToast() {
      this.$toast.show("暂无资源~");
    },
  },
};
</script>

<style scoped>
#feature img {
  width: 100%;
}
</style>

<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"tabbar"
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  z-index: 20;
  /* 阴影 */
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.08);
}
</style>

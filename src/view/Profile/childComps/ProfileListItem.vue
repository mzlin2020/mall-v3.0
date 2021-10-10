<template>
  <div class="profile-list-item">
    <div class="image"><slot name="image"></slot></div>
    <div class="text"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-list-item {
  display: flex;
}
.image img {
  width: 20px;
  height: 20px;
}
.text {
  margin-left: 10px;
  color: var(--color-text);
  font-size: 14px;
  box-shadow: 0 1.2px #eee;
  width: 85vw;
}
</style>

<template>
  <div class="check-button" :class="{ active: isChecked }">
    <img src="../../../assets/img/common/checkButton.png" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.check-button {
  margin-left: 5px;
  border-radius: 100%;
  border: 1px #bbb solid;
}

.active {
  border: 1px var(--color-tint) solid;
  background-color: var(--color-tint);
}
.check-button img {
  width: 16px;
  height: 16px;
}
</style>

<template>
  <div class="address" @click="writeAddress">
    <div>
      <img src="../../../assets/img/purchase/address.png" class="address-icon" />
      <span class="text">请填写收货地址</span>
    </div>
    <div class="right">
      <img src="../../../assets/img/purchase/right.png" class="right-icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "purAddress",
  methods: {
    writeAddress() {
      this.$toast.show("待开发~");
    },
  },
};
</script>

<style scoped>
.address {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  color: #888;
  background-color: #fff;
}
.address-icon,
.right-icon {
  width: 25px;
  vertical-align: middle;
  padding-bottom: 5px;
  margin: 0 5px;
}
.text {
  display: inline-block;
}
</style>

<template>
  <div class="cart-list">
    <cart-list-item v-for="item in cartList" :key="item.iid" :cartListItem="item" />
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue";
export default {
  components: {
    CartListItem,
  },
  data() {
    return {
      cartList: this.$store.state.cartList,
    };
  },
};
</script>

<style></style>

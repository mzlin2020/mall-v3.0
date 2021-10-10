<template>
  <div class="list-item" v-if="cartListItem">
    <!-- 是否选中商品 -->
    <div class="check-button">
      <check-button @click.native="changeButton(cartListItem.iid)" :isChecked="cartListItem.checked" />
    </div>

    <!-- 图片 -->
    <div class="left-info">
      <img :src="cartListItem.image" alt="" />
    </div>

    <!-- 右边的信息 -->
    <div class="right-info">
      <p class="title">{{ cartListItem.title }}}</p>
      <p class="desc">{{ cartListItem.desc }}}</p>
      <p class="price-count">
        <span class="left-price">￥{{ cartListItem.price }}</span>
        <span class="right-count">X{{ cartListItem.count }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton.vue";
export default {
  components: {
    CheckButton,
  },
  props: {
    cartListItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    changeButton(iid) {
      //弊端：修改props（违反单项数据流），直接修改state（没有通过mutations）
      // this.cartListItem.checked = !this.cartListItem.checked;

      // 解决
      this.$store.commit("changeChecked", iid);
    },
  },
};
</script>

<style scoped>
.list-item {
  display: flex;
  border-bottom: 1px rgb(202, 202, 202) solid;
}
.check-button {
  align-self: center;
}
.left-info img {
  width: 100px;
  border-radius: 15%;
  padding: 10px 10px 10px 5px;
}
.right-info {
  width: 100%;
}
.title,
.desc {
  overflow: hidden;
  text-overflow: ellipsis; /*这三行代码效果：单行文本溢出显示省略号*/
  white-space: nowrap;
  width: 68%;
}
.title {
  font-size: 18px;
  padding: 10px 0 10px 0px;
}
.desc {
  color: rgb(81, 82, 82);
  padding: 10px 0 10px 0px;
}
.price-count {
  margin-top: 25px;
}
.price-count .left-price {
  color: rgb(255, 93, 18);
  font-size: 20px;
}
.right-count {
  position: absolute;
  right: 20px;
}
</style>

<template>
  <div class="bottom-bar">
    <!-- 全选按钮 -->
    <div class="select-all">
      <check-button class="check-btn" :isChecked="isSelectAll" @click.native="checkClick" />
      <span>全选</span>
    </div>

    <!-- 合计 -->
    <div class="sum-all">
      <p>
        合计：
        <span>{{ totalCount }} 件</span>
      </p>
    </div>
    <!-- 移除 -->
    <div class="remove-all">
      <p @click="removeIt">移除商品</p>
    </div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton.vue";
export default {
  components: {
    CheckButton,
  },
  data() {
    return {
      cartList: this.$store.state.cartList,
    };
  },
  computed: {
    // 总价格
    totalCount() {
      let AllCount = 0;
      this.$store.state.cartList.forEach((item) => {
        if (item.checked === true) {
          AllCount += item.count;
        }
      });
      return AllCount;
    },

    //全选按钮的状态
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) {
        return false;
      }

      let res = this.$store.state.cartList.every((item) => {
        //只有所有checked都是true，才返回true
        return item.checked == true;
      });
      if (res) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    checkClick() {
      // 全选按钮
      if (this.isSelectAll) {
        //选中状态
        this.$store.state.cartList.forEach((item) => {
          item.checked = false;
        });
      } else {
        this.$store.state.cartList.forEach((item) => {
          item.checked = true;
        });
      }
    },
    removeIt() {
      this.$store.commit("deleteSomeGoods");
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #eee;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 49px;
}
.check-btn {
  display: inline;
  margin: 0 8px;
}
.select-all {
  width: 100px;
}

.sum-all {
  flex: 1; /*当两边有固定宽度，中间flex为1，将把中间的空间全部占据*/
}

.remove-all {
  width: 90px;
}
.remove-all p {
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: #f04d38;
}
</style>

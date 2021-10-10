<template>
  <div class="purchase">
    <nav-bar id="nav-bar">
      <div slot="left" class="backDetail" @click="backDetail">
        <img src="../../assets/img/common/back.svg" />
      </div>
      <div slot="center">确认订单</div>
    </nav-bar>
    <pur-address />
    <pur-goods-info />
    <pur-param />
    <pur-activity />
    <pur-bottom-bar class="bottom-bar" />
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar.vue";
import PurAddress from "../../components/content/purAddress/PurAddress.vue";
import PurGoodsInfo from "./childComps/PurGoodsInfo.vue";
import PurParam from "./childComps/Purparam.vue";
import PurActivity from "./childComps/PurActivity.vue";
import PurBottomBar from "./childComps/PurBottomBar.vue";
export default {
  name: "Purchase",
  components: {
    NavBar,
    PurAddress,
    PurGoodsInfo,
    PurParam,
    PurActivity,
    PurBottomBar,
  },
  methods: {
    backDetail() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.purchase {
  background-color: #eee;
}
#nav-bar {
  font-size: 18px;
  font-weight: 600;
  border-bottom: 2px solid #ff8198;
  background-color: #fff;
}
.backDetail {
  width: 80%;
  margin-top: 5px;
}
.bottom-bar {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>

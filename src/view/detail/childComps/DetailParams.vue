<template>
  <div class="param-info" v-if="GoodsParam">
    <p>参数信息</p>
    <table v-for="item1 in GoodsParam.sizes" :key="item1.index">
      <tr v-for="item2 in item1" :key="item2.index">
        <td v-for="item3 in item2" :key="item3.index">
          {{ item3 }}
        </td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="item in GoodsParam.infos" :key="item.index">
        <td class="info-param-key">{{ item.key }}</td>
        <td class="param-value">{{ item.value }}</td>
      </tr>
    </table>

    <div v-if="GoodsParam.image == ''">
      <img :src="GoodsParam.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    GoodsParam: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.param-info {
  font-size: 14px;
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info p {
  font-size: 12px;
  margin-bottom: 10px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
.param-info table tr {
  height: 42px;
}
.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}
.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.param-value {
  color: #eb4868;
}
.info-img img {
  width: 100%;
}
</style>

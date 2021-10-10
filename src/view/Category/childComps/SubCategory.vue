<template>
  <div class="sub-category" v-if="subCategoryInfo">
    <div v-for="item in subCategoryInfo" :key="item.index" class="category-item">
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad" />
      </a>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subCategoryInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgLoad() {
      this.$emit("imgLoad");
    },
  },
};
</script>

<style scoped>
.sub-category {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.category-item {
  margin-top: 5vw;
  text-align: center;
}
.category-item img {
  width: 20vw;
}
.category-item > p {
  padding-top: 5px;
  font-size: 14px;
  color: #333;
}
</style>

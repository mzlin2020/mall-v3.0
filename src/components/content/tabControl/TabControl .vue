<template>
  <div class="tab-control">
      <div class="tab-control-item" 
      v-for="(item,index) in titles" 
      :key="item" 
      :class="{active: currentIndex == index}" 
      @click="changeTabItem(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        titles: Array 
    },
    data() {
        return {
            currentIndex: false
        }
    },
    methods: {
        changeTabItem(index) {
            this.currentIndex = index
            // 传递当前的index，用以改变商品风格展示
            this.$emit('tabClick', index)
        }
    }
}
</script>

<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    font-size: 14px;
    background-color: #fff;
}
.tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;

}
.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom: 3px solid;  /* 为选中的选项添加下划线 */
}
.tab-control-item span{
    padding: 5px;
}
</style>
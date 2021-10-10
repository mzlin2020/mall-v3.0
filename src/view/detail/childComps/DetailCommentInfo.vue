<template>
  <div>
    <div id="comment-info" v-if="commemtInfo">
      <!-- 评论——更多 -->
      <div class="more">
        <span>用户评价</span>
        <span>更多</span>
      </div>

      <!-- 用户信息 -->
      <div class="user">
        <img :src="commemtInfo.user.avatar" alt="" />
        <span>{{ commemtInfo.user.uname }}</span>
      </div>

      <!-- 评论部分 -->
      <div class="content">
        {{ commemtInfo.content }}
      </div>

      <!-- 购买信息 -->
      <div class="detail">
        <span>{{ commemtInfo.created | getData }}</span>
        <span>{{ commemtInfo.style }}</span>
      </div>
    </div>
    <!--  猜你喜欢-->
    <div class="guessLove">
      <span>——</span>
      看了又看
      <span>——</span>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../../common/utils";
export default {
  props: {
    commemtInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    getData: (value) => {
      // 将ms转化成固定格式
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
  },
};
</script>

<style scoped>
#comment-info {
  margin-bottom: 20px;
  padding-bottom: 20px;
  box-shadow: 0 2px 1px rgba(100, 100, 100, 0.08);
}
.more {
  box-shadow: 0 2px 1px rgba(100, 100, 100, 0.08);
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
}
.more > span {
  padding: 0 5px;
  font-size: 18px;
}

.user {
  margin: 10px;
}
.user > img {
  width: 55px;
  border-radius: 50%;
  vertical-align: middle;
}
.user span {
  margin-left: 10px;
}

.content {
  font-size: 14px;
  color: #555;
  padding: 5px 10px 10px 10px;
  text-align: justify;
}
.detail > span {
  font-size: 14px;
  color: #555;
  padding: 5px 10px 20px 10px;
}

.guessLove {
  text-align: center;
  color: var(--color-high-text);
  padding: 10px 0 20px 0;
}
.guessLove span {
  padding: 0 10px;
}
</style>

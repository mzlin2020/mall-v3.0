<template>
  <div class="feedback">
    <nav-bar class="nav-bar">
      <div slot="center" class="nav-text">意见反馈</div>
    </nav-bar>
    <div class="text">
      <p>亲爱的用户~</p>
      <p>请在下面填写您在本商城中遇到的问题或意见建议，感谢您的支持！</p>
    </div>
    <div class="content">
      <textarea
        name=""
        id=""
        maxlength="250"
        placeholder="在此处输入......"
        rows="12"
        autofocus
        v-model="feedback"
      ></textarea>
    </div>
    <!-- 提交按钮 -->
    <div class="btn">
      <button @click="sendFeedback">提交反馈</button>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar.vue";
import { sendFeedback } from "../../network/feedback";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      feedback: "",
      send: true,
    };
  },
  methods: {
    sendFeedback() {
      if (this.send) {
        console.log(this.feedback);
        this.$toast.show("提交成功！");
        // 发送反馈到数据库
        let data = {
          content: this.feedback,
        };
        data = JSON.stringify(data);
        sendFeedback({
          data,
          method: "POST",
        });
        this.send = false;
      } else {
        this.$toast.show("请不要重复提交~");
      }
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: #7bbfea;
}
.nav-text {
  color: white;
  font-size: 18px;
}
.text {
  color: #888;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
}
.content {
  width: 80%;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
}
textarea {
  width: 100%;
  padding: 10px;
}
.btn {
  text-align: center;
  margin-top: 10px;
}
button {
  width: 40%;
  height: 30px;
}
</style>

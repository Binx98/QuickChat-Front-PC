<template>
  <div>
    <el-col :span="4" style="height: 90%">
      <div class="session-cls" v-for="item in sessionList" @click="chooseSession(item)">
        <!-- 头像 -->
        <div style="border: 1px solid red;height: 6.9vh;width: 3.5vw;display: inline-block;float: left">

        </div>

        <!-- 昵称、时间 -->
        <div style="border: 1px solid mediumspringgreen;height:2.3vh;width: 9vw;display: inline;float: left">
          <span style="width: 3vw;font-size: 13px">去你的</span>
          <span style="width: 3vw;font-size: 13px">2024-02-01</span>
        </div>

        <!-- 聊天信息、未读数 -->
        <div style="border: 1px solid mediumspringgreen;height: 3.6vh;width: 7vw;display: inline;float: left">
          <span style="width: 3vw;font-size: 13px">去你的</span>
          <span style="width: 3vw;font-size: 13px">2024-02-01</span>
        </div>

        <!-- 聊天信息、未读数 -->
        <div style="border: 1px solid mediumspringgreen;height: 3.6vh;width: 2vw;display: inline;float: left">
          <span style="width: 3vw;font-size: 13px">去你的</span>
          <span style="width: 3vw;font-size: 13px">2024-02-01</span>
        </div>
        <!--        <el-avatar shape="square" :size="50"/>-->
        <!--        <div style="width: 50%;border: 1px solid red">-->
        <!--          <div style="font-size: 12px;color: antiquewhite;border: 1px solid blue">{{ item.sessionName }}</div>-->
        <!--          <div style="font-size: 12px;color: antiquewhite;border: 1px solid blue">你好啊！</div>-->
        <!--        </div>-->
        <!--        <div style="border: 1px solid red;height: 2vh;">-->
        <!--          <div style="font-size: 12px;color: antiquewhite">{{ item.updateTime }}</div>-->
        <!--        </div>-->
      </div>
    </el-col>
  </div>
</template>

<script>
import EventBus from "@/component/js/event-bus";

export default {
  name: "Session",
  props: ['sessionList'],

  data() {
    return {}
  },

  methods: {
    chooseSession(item) {
      EventBus.$emit('sessionInfo', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.session-cls {
  height: 7vh;
  background-color: $window-item-color;
  border-radius: 6px;
  margin-bottom: 2px;
  cursor: pointer;
}

.session-cls:hover {
  background-color: $logo-color;
}
</style>

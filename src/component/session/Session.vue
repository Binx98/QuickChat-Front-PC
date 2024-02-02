<template>
  <div>
    <el-col style="width: 16vw">
      <div class="session-cls" v-for="item in sessionList" @click="chooseSession(item)">
        <!-- 头像 -->
        <div style="height: 100%; width: 26%; display: inline-block; float: left;">
          <el-badge :value="1">
            <img style="width: 3.4vw;height: 7vh"/>
          </el-badge>
        </div>

        <!-- 昵称、时间 -->
        <div style="border: 1px solid mediumspringgreen; height: 40%; width: 70%; display: inline; float: left;">
          <span style="width: 40%; font-size: 13px; display: inline-block;">{{ item.sessionName }}</span>
          <span style="width: 60%; font-size: 12px; display: inline-block;">2024-02-02</span>
        </div>

        <!-- 聊天内容 -->
        <div style="border: 1px solid mediumspringgreen; height: 50%; width: 70%; display: inline; float: left;">
          <span style="width: 50%; font-size: 13px; display: inline-block;">陈冠希</span>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
import EventBus from "@/component/event-bus";

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

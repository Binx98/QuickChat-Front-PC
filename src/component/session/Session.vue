<template>
  <div>
    <el-col style="width: 15vw">
      <div class="session-cls" v-for="item in sessionList" @click="chooseSession(item)">
        <!-- 头像 -->
        <div style="height: 100%; width: 26%; display: inline-block; float: left;">
          <el-badge :value="1">
            <img style="width: 3.4vw;height: 7vh"/>
          </el-badge>
        </div>

        <!-- 昵称、时间 -->
        <div style="height: 48%; width: 74%; display: inline; float: left;">
          <span style="width: 58%; font-size: 13px; display: inline-block;margin-top: 3%">{{ item.sessionName }}</span>
          <span style="width: 40%; font-size: 12px; display: inline-block;">2024-02-02</span>
        </div>

        <!-- 聊天内容 -->
        <div style="height: 48%; width: 74%; display: inline; float: left;">
          <span style="width: 90%; font-size: 13px; display: inline-block;">我也不知道咋回事啊!</span>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
import EventBus from "@/component/event-bus";
import sessionApi from "@/api/session";

export default {
  name: "Session",

  data() {
    return {
      sessionList: [],
    }
  },

  created() {
    this.getSessionList();
  },

  methods: {
    /**
     * 同级组件传参
     */
    chooseSession(item) {
      EventBus.$emit('sessionInfo', item)
    },

    /**
     * 查询会话列表
     */
    getSessionList() {
      sessionApi.getSessionList().then(res => {
        this.sessionList = res.data.data;
        EventBus.$emit('sessionList', this.sessionList)
        this.getUnreadCountList(this.sessionList)
      }).catch(e => {
        this.$message.error('聊天会话列表信息加载失败，请刷新页面重试！');
      })
    },

    /**
     * 查询会话未读数量列表
     */
    getUnreadCountList(sessionList) {
      sessionApi.getUnreadCountList(sessionList).then(res => {
      }).catch(e => {
        this.$message.error('会话列表未读数量查询失败，请刷新页面重试！')
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.session-cls {
  height: 7.3vh;
  background-color: $window-item-color;
  border-radius: 6px;
  margin-bottom: 1.6px;
  cursor: pointer;
}

.session-cls:hover {
  background-color: $logo-color;
}
</style>

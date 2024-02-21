<template>
  <div>
    <el-col style="width: 15vw">
      <div class="session-cls" v-for="item in sessionList" @click="chooseSession(item)">
        <!-- 头像 -->
        <div class="avatar-cls">
          <el-badge :value="item.unreadCount">
            <img :src="item.sessionAvatar" style="width: 3.4vw;height: 7.3vh"/>
          </el-badge>
        </div>

        <!-- 昵称、时间 -->
        <div class="session-item-cls">
          <span class="session-name-cls">{{ item.sessionName }}</span>
          <span class="session-time-cls">2024-02-02</span>
        </div>

        <!-- 聊天内容 -->
        <div class="session-item-cls">
          <span class="session-msg-cls">哈哈</span>
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

  props: [
    'chatMsgEvent'
  ],

  data() {
    return {
      sessionList: [],
    }
  },

  created() {
    this.getSessionList(true);

    /**
     * 监听同级组件：未读数清 0
     */
    EventBus.$on('readCount0Event', sessionInfo => {
      this.updateReadTime(sessionInfo.sessionId)
      for (let i = 0; i < this.sessionList.length; i++) {
        if (this.sessionList[i].relationId == sessionInfo.relationId) {
          this.sessionList[i].unreadCount = null;
          break;
        }
      }
    });
  },

  watch: {
    /**
     * 监听父级组件：用户发送消息
     */
    chatMsgEvent: {
      immediate: true,
      handler(msg) {
        if (msg.relationId != '') {
          this.getSessionList(false);
        }
      }
    },
  },

  methods: {
    /**
     * 选择会话：同级组件传参
     */
    chooseSession(item) {
      EventBus.$emit('sessionInfo', item)
      if (item.unreadCount) {
        this.updateReadTime(item.sessionId)
        item.unreadCount = null
      }
    },

    /**
     * 查询会话列表：同级组件传参
     */
    getSessionList(isFirst) {
      sessionApi.getSessionList().then(res => {
        this.sessionList = res.data.data;
        if (isFirst) {
          EventBus.$emit('sessionList', this.sessionList)
        }
      }).catch(e => {
        this.$message.error('聊天会话列表信息加载失败，请刷新页面重试！');
      })
    },

    /**
     * 更新已读时间
     */
    updateReadTime(sessionId) {
      sessionApi.updateReadTime(sessionId)
    }
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

.session-item-cls {
  height: 48%;
  width: 74%;
  display: inline;
  float: left;
}

.avatar-cls {
  height: 100%;
  width: 26%;
  display: inline-block;
  float: left;
}

.session-name-cls {
  width: 58%;
  font-size: 13.6px;
  display: inline-block;
  margin-top: 3%;
  color: $session-nick-color;
  font-family: "Arial Rounded MT Bold";
}

.session-time-cls {
  width: 40%;
  font-size: 12px;
  display: inline-block;
  color: $session-msg-color;
}

.session-msg-cls {
  width: 90%;
  font-size: 13px;
  display: inline-block;
  color: $session-msg-color;
}
</style>

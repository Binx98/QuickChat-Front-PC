<template>
  <div>
    <el-col style="width: 15vw;">
      <div class="div-cls">
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
          this.speakNotice('嘀嘀嘀')
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
        this.$message.error(e.data.msg);
      })
    },

    /**
     * 更新已读时间
     */
    updateReadTime(sessionId) {
      sessionApi.updateReadTime(sessionId)
    },

    /**
     * 来消息语音提示
     */
    speakNotice(msg) {
      var utterThis = new window.SpeechSynthesisUtterance(msg);
      window.speechSynthesis.speak(utterThis);
    }
  }
}
</script>

<style lang="scss" scoped>
.div-cls {
  height: 81vh;
  overflow: auto;
}

// 滚动条样式
.div-cls::-webkit-scrollbar {
  width: 7.8px;
  height: 7.8px;
}

.div-cls::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #9e9e9e;
}

.div-cls::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #ededed;
}

// 会话容器
.session-cls {
  height: 7.3vh;
  background-color: $window-item-color;
  border-radius: 6px;
  margin-bottom: 2px;
  cursor: pointer;
}

.session-cls:hover {
  background-color: $logo-color;
}

// 会话对象
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

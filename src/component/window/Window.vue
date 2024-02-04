<template>
  <span>
    <el-col class="window-cls">
      <!--  上边栏  -->
      <div class="head-bar">
        <el-avatar shape="square" style="margin-right: 1%;cursor:pointer"/>
        <div>{{ curSession.sessionName }}</div>
      </div>

      <!--  窗口  -->
      <div class="msg-window-cls">
        <div v-for="item in chatMsgList[curSession.relationId]">
          <!--  接收信息  -->
          <div class="receive-item" v-if="item.accountId === curSession.toId">
            <span style="margin-right: 6px">
              <el-avatar shape="square" style="cursor:pointer"/>
            </span>
            <div style="background-color: floralwhite;border-radius: 10px;">
              <div style="padding: 15px;font-size: 14px;word-break: break-all;">
                {{ item.content }}
              </div>
            </div>
          </div>

          <!--  主动发送  -->
          <div class="send-item" v-if="item.accountId === curSession.fromId">
            <div class="send-div-cls">
              <div style="padding: 15px;font-size: 14px;word-break: break-all">
                {{ item.content }}
              </div>
            </div>
            <span style="margin-left: 6px">
              <el-avatar shape="square" style="cursor:pointer;"/>
            </span>
          </div>
        </div>
      </div>

      <!-- 输入框 -->
      <div class="input-cls">
        <span>语音、</span>
        <el-input id="chat-input" placeholder="请开始你的表演......" style="width: 70%;"
                  type="text" v-model="chatMsg.content"/>
        <Emoji/>
        <span>截图、</span>
        <span>文件、</span>
        <span @click="sendMsg()">发送</span>
      </div>
    </el-col>
  </span>
</template>

<script>
import Emoji from "@/component/window/Emoji";
import chatMsgApi from "@/api/chatMsg";
import EventBus from "@/component/event-bus";

export default {
  name: "Window",

  props: [
    'loginUser'
  ],

  components: {
    Emoji
  },

  created() {
    EventBus.$on('sessionInfo', sessionInfo => {
      this.curSession = sessionInfo;
    });
    EventBus.$on('sessionList', sessionList => {
      this.sessionList = sessionList;
      this.getChatMsgList(this.sessionList)
    });
  },

  data() {
    return {
      chatMsg: {
        fromId: this.loginUser.accountId,
        toId: '',
        msgType: '',
        content: '',
      },
      curSession: '',
      chatMsgList: [],
      sessionList: []
    }
  },

  methods: {
    /**
     * 查询会话列表聊天信息列表
     */
    getChatMsgList() {
      let accountIds = [];
      for (let i = 0; i < this.sessionList.length; i++) {
        accountIds.push(this.sessionList[i].toId)
      }
      chatMsgApi.getChatMsgList(accountIds).then(res => {
        this.chatMsgList = res.data.data;
      }).catch(e => {
        this.$message.error('聊天记录信息加载失败，请刷新页面重试！')
      })
    },

    /**
     * 发送按钮（文字 + Emoji）
     */
    sendMsg() {
      if (this.chatMsg.content === '') {
        return;
      }
      this.chatMsg.fromId = this.loginUser.accountId;
      this.chatMsg.msgType = '1';
      chatMsgApi.sendMsg(this.chatMsg).then(res => {
      }).catch(e => {
        this.$message.error('服务端功能异常，发送消息失败！')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#chat-input {
  border-radius: 20px;
  font-size: 14px;
  white-space: pre-wrap;
  overflow-y: auto;
  resize: vertical;
}

.window-cls {
  background-color: $window-item-color;
  border-radius: 10px;
  height: 90%;
  width: 54vw;
  overflow: auto;
}

.msg-window-cls {
  height: 80%;
  overflow: auto;
}

// 滚动条样式
.window-cls::-webkit-scrollbar {
  width: 14px;
  height: 14px;
}

.window-cls::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #9e9e9e;
}

.window-cls::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #ededed;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, .1);
}

.msg-window-cls::-webkit-scrollbar {
  width: 14px;
  height: 14px;
}

.msg-window-cls::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #9e9e9e;
}

.msg-window-cls::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #ededed;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, .1);
}

.send-div-cls {
  margin-left: 1.6%;
  background-color: #12CEC2FF;
  border-radius: 10px;
  display: inline-block;
}

.receive-item {
  width: 90%;
  display: flex;
  align-items: center;
  margin-left: 1%;
  margin-top: 1%;
}

.send-item {
  float: right;
  width: 70%;
  margin-right: 1%;
  margin-top: 1%;
  display: flex;
  align-items: center;
  justify-content: flex-end
}

.head-bar {
  display: flex;
  align-items: center;
  padding-left: 1%;
  height: 9%;
  border: solid $window-line-color;
  border-width: 0 0 2px 0;
}

.input-cls {
  margin-top: 1%;
  height: 8%;
  width: 52vw;
  border: solid $window-line-color;
  border-width: 2px 0 0 0;
}
</style>

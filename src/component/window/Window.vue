<template>
  <span>
    <!--  1、选中会话  -->
    <el-col class="window-cls" v-if="this.curSession != ''">
      <!--  上边栏  -->
      <div class="head-bar">
        <el-avatar shape="square" style="margin-right: 1%;cursor:pointer"/>
        <div>{{ curSession.sessionName }}</div>
      </div>

      <!--  窗口  -->
      <div id="window-id" class="msg-window-cls">
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

    <!--  2、未选中会话  -->
    <el-col class="window-cls" v-if="this.curSession === ''"></el-col>
  </span>
</template>

<script>
import Emoji from "@/component/window/Emoji";
import chatMsgApi from "@/api/chatMsg";
import EventBus from "@/component/event-bus";

export default {
  name: "Window",

  props: [
    'loginUser',
    'chatMsgEvent'
  ],

  components: {
    Emoji
  },

  created() {
    /**
     * 点击会话：同级接参
     */
    EventBus.$on('sessionInfo', sessionInfo => {
      this.curSession = sessionInfo;
      this.scrollBottom('window-id')
    });

    /**
     * 查询会话列表：同级接参
     */
    EventBus.$on('sessionList', sessionList => {
      this.sessionList = sessionList;
      this.getChatMsgList()
    });
  },

  data() {
    return {
      chatMsg: {
        fromId: '',
        toId: '',
        msgType: '',
        content: '',
      },
      curSession: '',
      chatMsgList: [],
      sessionList: []
    }
  },

  watch: {
    /**
     * 监听父级组件：用户发送消息
     */
    chatMsgEvent: {
      immediate: true,
      handler(msg) {
        if (msg.relationId) {
          this.getChatMsgByRelationId(msg.relationId)
        }
      }
    },
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
     * 查询双方聊天记录
     */
    getChatMsgByRelationId(relationId) {
      let current = 0;
      let limit = 30;
      chatMsgApi.getChatMsgByRelationId(relationId, current, limit).then(res => {
        this.chatMsgList[relationId] = res.data.data[relationId];
        this.scrollBottom('window-id');
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
      this.chatMsg.toId = this.curSession.toId;
      this.chatMsg.msgType = '1';
      chatMsgApi.sendMsg(this.chatMsg).then(res => {
        this.chatMsg.content = '';
        this.getChatMsgByRelationId(this.curSession.relationId);
      }).catch(e => {
        this.$message.error('服务端功能异常，发送消息失败！')
      })
    },

    /**
     * 滑动到div最底部
     * 注意：使用setTimeout延迟操作DOM，否则不是可能出现不是最底部情况
     */
    scrollBottom(id) {
      setTimeout(() => {
        let divCls = document.getElementById(id);
        if (divCls) {
          divCls.scrollTop = divCls.scrollHeight
        }
      }, 0)
    }
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
  width: 72%;
  display: flex;
  align-items: center;
  margin-left: 1%;
  margin-top: 1%;
}

.send-item {
  width: 70%;
  float: right;
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

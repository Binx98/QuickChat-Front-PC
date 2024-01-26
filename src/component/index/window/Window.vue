<template>
  <span>
    <el-col :span="15" class="window-cls">
      <!--  上边栏  -->
      <div class="head-bar">
        <el-avatar shape="square" style="margin-right: 1%;cursor:pointer;"/>
        <div>徐志摩</div>
      </div>

      <!--  窗口  -->
      <div style="height: 80%;overflow: auto;">
        <div v-for="item in chatMsgList[relationId]">
          <!--  接收信息  -->
          <div class="receive-item" v-if="item.accountId === 'wenshuangxin'">
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
          <div class="send-item" v-if="item.accountId === 'xuzhibin'">
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
        <el-input id="chat-input" placeholder="请开始你的表演......" type="text" style="width: 70%" v-model="chatMsg"/>
        <Emoji/>
        <span>截图、</span>
        <span>文件、</span>
        <span @click="sendMsg()">发送</span>
      </div>
    </el-col>
  </span>
</template>

<script>
import Emoji from "@/component/index/window/Emoji";
import chatMsgApi from "@/api/chatMsg";

export default {
  name: "Window",

  props: ['chatMsgList'],

  components: {
    Emoji
  },

  created() {
    console.log(this.chatMsgList)
  },

  data() {
    return {
      chatMsg: {
        toId: '',
        msgType: '',
        content: '',
      },
      input: '',
      search: '',
      relationId: 'wenshuangxin:xuzhibin',
    }
  },

  method: {
    /**
     * 发送消息
     */
    sendMsg() {
      chatMsgApi.sendMsg()
    },

    append(emoji) {
      this.input += emoji
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
  overflow: auto;
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
  border-width: 0 0 1px 0;
}

.input-cls {
  margin-top: 1%;
  height: 8%;
  width: 51vw;
  border: solid $window-line-color;
  border-width: 1px 0 0 0;
}
</style>

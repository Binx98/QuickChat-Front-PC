<template>
  <span>
    <!--  选中会话  -->
    <el-col class="window-cls" v-if="this.curSession != ''">
      <!--  1.上边栏  -->
      <div class="head-bar">
        <el-avatar :src="curSession.sessionAvatar" shape="square" style="margin-right: 1%;cursor:pointer"/>
        <div class="session-name-cls">{{ curSession.sessionName }}</div>
      </div>

      <!--  2.窗口  -->
      <div id="window-id" class="msg-window-cls">
        <div v-for="item in chatMsgList[curSession.relationId]">
          <!------------------------------------------被动接收------------------------------------------>
          <!--  文字信息  -->
          <div class="receive-item" v-if="item.accountId === curSession.toId && item.msgType === 1">
            <span style="margin-right: 6px">
              <el-avatar :src=curSession.sessionAvatar shape="square" style="cursor:pointer"/>
            </span>
            <div
                style="padding: 15px;font-size: 14px;word-break: break-all;background-color: floralwhite;border-radius: 10px;">
              {{ item.content }}
            </div>
          </div>

          <!------------------------------------------主动发送------------------------------------------>
          <!--  文字 Font  -->
          <div class="send-item" v-if="item.accountId === curSession.fromId && item.msgType === 1">
            <div class="send-div-cls">
              <div style="padding: 15px;font-size: 14px;word-break: break-all">
                {{ item.content }}
              </div>
            </div>
            <span style="margin-left: 6px">
              <el-avatar :src="loginUser.avatar" shape="square" style="cursor:pointer;"/>
            </span>
          </div>
          <!--  文件 File  -->
          <div class="send-item" v-if="item.accountId === curSession.fromId && item.msgType === 4">
            <div class="send-div-cls" style="background-color: antiquewhite;cursor: pointer"
                 @click="downloadFile(item.msgType, item.content)">
              <div style="padding: 4px;">
                <div style="border: 1px solid red;height: 65px;width: 240px">
                  <div style="float: left;width: 10%;height: 100%;border: 1px solid red">
                    <img/>
                  </div>
                  <div style="font-size: 14px">
                    {{ item.extraInfo.name }}
                  </div>
                  <div>
                    {{ item.extraInfo.size / 1024 }}
                  </div>
                </div>
              </div>
            </div>
            <span style="margin-left: 6px">
              <el-avatar :src="loginUser.avatar" shape="square" style="cursor:pointer;"/>
            </span>
          </div>
        </div>
      </div>

      <!-- 3.输入部分 -->
      <div class="input-cls">
        <!-- 语音 -->
        <span @click="handleStart">语音</span>

        <!-- 输入框 -->
        <input @keyup.enter="sendMsg()" id="chat-input" placeholder="良言一句三冬暖，恶语伤人六月寒..."
               v-model="chatMsg.content"/>

        <!-- Emoji -->
        <span class="wrapper">
          <emoji-picker @emoji="">
            <!-- 按钮 -->
            <button
                class="emoji-invoker"
                slot="emoji-invoker"
                slot-scope="{ events: { click: clickEvent } }"
                @click.stop="clickEvent"
            >
               <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-grey">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path
                      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
               </svg>
            </button>

            <!-- 表情框 -->
            <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
              <div class="emoji-picker" :style="{ top: display.y + 'px', left: display.x + 'px' }">
                <div v-for="(emojiGroup, category) in emojis" :key="category">
                  <div class="emojis">
                    <span
                        v-for="(emoji, emojiName) in emojiGroup"
                        :key="emojiName"
                        @click="insertEmoji(emoji)"
                        :title="emojiName"
                    >{{ emoji }}</span>
                  </div>
                </div>
              </div>
            </div>
          </emoji-picker>
        </span>

        <!-- 文件 -->
        <span style="display: inline-block">
          <el-upload
              :action="uploadFileUrl"
              :headers="fileHeaders()"
              :on-success="handleSuccess"
              :show-file-list="false"
          >
            <el-button size="small" type="primary">文件</el-button>
          </el-upload>
        </span>

        <!-- 发送按钮 -->
        <span @click="sendMsg()">发送</span>
      </div>
    </el-col>

    <!--  2、未选中会话  -->
    <el-col class="window-cls" v-if="this.curSession === ''"></el-col>

     <div style="padding: 20px;">
    <h3>录音上传</h3>

    <div style="font-size:14px">
      <h3>录音时长：{{ recorder && recorder.duration.toFixed(4) }}</h3>
      <br/>
      <el-button type="info" @click="handlePause">暂停录音</el-button>
      <el-button type="success" @click="handleResume">继续录音</el-button>
      <el-button type="warning" @click="handleStop">停止录音</el-button>
      <br/>
      <br/>
      <h3>
        播放时长：{{
          recorder &&
          (playTime > recorder.duration
              ? recorder.duration.toFixed(4)
              : playTime.toFixed(4))
        }}
      </h3>
      <br/>
      <el-button type="primary" @click="handlePlay">播放录音</el-button>
      <el-button type="info" @click="handlePausePlay">暂停播放</el-button>
      <el-button type="success" @click="handleResumePlay">继续播放</el-button>
      <el-button type="warning" @click="handleStopPlay">停止播放</el-button>
      <el-button type="error" @click="handleDestroy">销毁录音</el-button>
      <el-button type="primary" @click="uploadRecord">上传</el-button>
    </div>
  </div>


    <canvas id="canvas"></canvas>

  </span>
</template>

<script>
import Recorder from 'js-audio-recorder'
import chatMsgApi from "@/api/chatMsg";
import EventBus from "@/component/event-bus";
import EmojiPicker from "vue-emoji-picker";

export default {
  name: "Window",

  props: [
    'loginUser',
    'chatMsgEvent'
  ],

  components: {
    EmojiPicker
  },

  created() {
    // 点击会话：同级接参
    EventBus.$on('sessionInfo', sessionInfo => {
      this.curSession = sessionInfo;
      this.scrollBottom('window-id')
    });

    // 查询会话列表：同级接参
    EventBus.$on('sessionList', sessionList => {
      this.sessionList = sessionList;
      this.getChatMsgList()
    });

    // 初始化录音对象
    this.initRecorder()
  },

  data() {
    return {
      recorder: null,
      playTime: 0,
      timer: null,
      src: null,

      chatMsg: {
        fromId: '',
        toId: '',
        msgType: '',
        content: '',
      },
      fileMsg: {
        fromId: '',
        toId: '',
        msgType: '',
        content: '',
        extraInfo: {
          name: '',
          size: '',
          type: ''
        }
      },
      curSession: '',
      chatMsgList: [],
      sessionList: [],
      uploadFileUrl: process.env.VUE_APP_BASE_API + '/file/upload/3'
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
    handleSuccess(res, file) {
      this.fileMsg.extraInfo.name = file.raw.name;
      this.fileMsg.extraInfo.size = file.raw.size;
      this.fileMsg.extraInfo.type = file.raw.type;
      this.sendFile(res.data)
    },

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
        EventBus.$emit('readCount0Event', this.curSession)
      }).catch(e => {
        this.$message.error(e.data.msg)
      })
    },

    /**
     * 发送文件
     */
    sendFile(url) {
      this.fileMsg.fromId = this.loginUser.accountId;
      this.fileMsg.toId = this.curSession.toId;
      this.fileMsg.msgType = '4';
      this.fileMsg.content = url;
      chatMsgApi.sendMsg(this.fileMsg).then(res => {
        this.getChatMsgByRelationId(this.curSession.relationId);
        EventBus.$emit('readCount0Event', this.curSession)
      }).catch(e => {
        this.$message.error(e.data.msg)
      })
    },

    /**
     * 点击下载文件
     */
    downloadFile(type, url) {
      chatMsgApi.downloadFile(type, url).then(res => {

      }).catch(e => {

      })
    },

    /**
     * 上传文件消息头
     */
    fileHeaders() {
      return {
        'token': localStorage.getItem('token')
      }
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
    },

    /**
     * 点击Emoji
     */
    insertEmoji(emoji) {
      this.chatMsg.content += emoji
    },

    // 开始录音
    handleStart() {
      this.recorder = new Recorder()
      Recorder.getPermission().then(() => {
        this.recorder.start()
      }, error => {
        this.$message({
          message: '请先允许该网页使用麦克风',
          type: 'info'
        })
        console.log(`${error.name} : ${error.message}`)
      })
    },
    handlePause() {
      this.recorder.pause() // 暂停录音
    },
    handleResume() {
      this.recorder.resume() // 恢复录音
    },
    handleStop() {
      this.recorder.stop() // 停止录音
    },
    handlePlay() {
      this.recorder.play() // 播放录音
      // 播放时长
      this.timer = setInterval(() => {
        try {
          this.playTime = this.recorder.getPlayTime()
        } catch (error) {
          this.timer = null
        }
      }, 100)
    },
    handlePausePlay() {
      this.recorder.pausePlay() // 暂停播放
      this.playTime = this.recorder.getPlayTime()
    },
    handleResumePlay() {
      this.recorder.resumePlay() // 恢复播放
      this.timer = setInterval(() => {
        try {
          this.playTime = this.recorder.getPlayTime()
        } catch (error) {
          this.timer = null
        }
      }, 100)
    },
    handleStopPlay() {
      console.log('停止播放')
      this.recorder.stopPlay() // 停止播放

      // 播放时长
      this.playTime = this.recorder.getPlayTime()
      this.timer = null
    },
    handleDestroy() {
      console.log('销毁实例')
      this.recorder.destroy() // 毁实例
      this.timer = null
    },
    uploadRecord() {
      if (this.recorder == null || this.recorder.duration === 0) {
        this.$message({
          message: '请先录音',
          type: 'error'
        })
        return false
      }
      this.recorder.pause() // 暂停录音
      this.timer = null
      console.log('上传录音')// 上传录音

      const formData = new FormData()
      const blob = this.recorder.getWAVBlob()// 获取wav格式音频数据
      // 此处获取到blob对象后需要设置fileName满足当前项目上传需求，其它项目可直接传把blob作为file塞入formData
      const newbolb = new Blob([blob], {type: 'audio/wav'})
      const fileOfBlob = new File([newbolb], new Date().getTime() + '.wav')
      formData.append('file', fileOfBlob)
      const url = window.URL.createObjectURL(fileOfBlob)
      this.src = url
      // const axios = require('axios')
      // axios.post(url, formData).then(res => {
      //   console.log(res.data.data[0].url)
      // })
    }
  },
}
</script>

<style lang="scss" scoped>
#chat-input {
  padding-left: 8px;
  padding-right: 8px;
  width: 70%;
  border-radius: 10px;
  font-size: 14px;
  word-break: break-all;
  height: 4.6vh;
  overflow-y: auto;
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
  width: 10px;
  height: 10px;
}

.msg-window-cls::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.emoji-picker::-webkit-scrollbar {
  width: 10px;
  height: 0px;
}

.window-cls::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #9e9e9e;
}

.msg-window-cls::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #9e9e9e;
}

.emoji-picker::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #9e9e9e;
}

.window-cls::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #ededed;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, .1);
}

.msg-window-cls::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #ededed;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, .1);
}

.emoji-picker::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #ededed;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, .1);
}

.send-div-cls {
  margin-left: 1.6%;
  background-color: $logo-color;
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
  border: solid $window-bottom-color;
  border-width: 0 0 2px 0;
}

.input-cls {
  margin-top: 1%;
  height: 8%;
  width: 52vw;
  border: solid $window-bottom-color;
  border-width: 2px 0 0 0;
}

.session-name-cls {
  color: $session-nick-color;
  font-family: "Arial Rounded MT Bold";
}

.wrapper {
  display: inline-block;
}

.emoji-invoker {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  padding: 0;
  background: transparent;
  border: 0;
}

.emoji-invoker:hover {
  transform: scale(1.1);
}

.emoji-invoker > svg {
  fill: #b1c6d0;
}

.emoji-picker {
  border: 1px solid #ccc;
  width: 30vw;
  height: 38vh;
  overflow: scroll;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #f0fff3;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 8px #c7dbe6;
  position: fixed;
  transform: translate(-105%, -108%);
}

.emoji-picker .emojis {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.emoji-picker .emojis:after {
  content: "";
  flex: auto;
}

.emoji-picker .emojis span {
  padding: 0.1rem;
  cursor: pointer;
  border-radius: 5px;
}

.emoji-picker .emojis span:hover {
  background: #ececec;
  cursor: pointer;
}
</style>

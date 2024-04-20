<template>
  <span>
    <!--  选中会话  -->
    <el-col class="window-cls" v-if="this.curSession !== ''">
      <!--  1.上边栏  -->
      <div class="head-bar">
        <el-avatar :src="curSession.sessionAvatar" shape="square" style="margin-right: 1%;cursor:pointer"/>
        <div class="session-name-cls">{{ curSession.sessionName }}</div>
      </div>

      <!--  2.窗口  -->
      <div id="window-id" class="msg-window-cls">
        <!--  聊天信息  -->
        <div v-for="item in chatMsgList[curSession.relationId]">
          <!------------------------------------------被动接收------------------------------------------>
          <!--  撤回  -->
          <div style="width: 63%;display: flex;justify-content: flex-end;padding-top: 16px;font-size: 14px"
               v-if="item.accountId === curSession.toId && item.msgType === 0">
            <span style="color: rgba(231, 231, 231, 0.85)">{{ item.nickName }}撤回了一条消息</span>
          </div>
          <!--  文字  -->
          <div class="receive-item" v-if="item.accountId === curSession.toId && item.msgType === 1">
            <span style="margin-right: 6px">
              <el-avatar :src=curSession.sessionAvatar shape="square" style="cursor:pointer"/>
            </span>
            <div class="receive-div-font">
              {{ item.content }}
            </div>
          </div>
          <!--  语音  -->
          <div class="receive-item" v-if="item.accountId === curSession.toId && item.msgType === 2">
            <span style="margin-right: 6px">
              <el-avatar :src=curSession.sessionAvatar shape="square" style="cursor:pointer"/>
            </span>
            <audio preload controls controlsList="nodownload noplaybackrate">
              <source :src=item.content type="audio/wav">
            </audio>
          </div>
          <!--  文件  -->
          <div class="receive-item" v-if="item.accountId === curSession.toId && item.msgType === 4">
            <span style="margin-right: 6px">
              <el-avatar :src=curSession.sessionAvatar shape="square" style="cursor:pointer"/>
            </span>
            <div class="receive-div-file" @click="downloadFile(item.content)">
              <div style="padding: 4px;">
                <div style="border: 1px solid red;height: 65px;width: 240px">
                  <div style="float: left;width: 10%;height: 100%;border: 1px solid red">
                    <img/>
                  </div>
                  <div style="font-size: 14px">
                    {{ item.extraInfo.name }}
                  </div>
                  <div>
                    {{ item.extraInfo.size }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!------------------------------------------主动发送------------------------------------------>
          <!--  撤回  -->
          <div style="width: 63%;display: flex;justify-content: flex-end;padding-top: 16px;font-size: 14px"
               v-if="item.accountId === curSession.fromId && item.msgType === 0">
            <span style="color: rgba(231, 231, 231, 0.85)">你撤回了一条消息</span>
            <span style="color: rgba(231, 231, 231, 0.85)">，</span>
            <span style="color: #12CEC2FF;cursor: pointer" @click="reEdit()">重新编辑</span>
          </div>
          <!--  文字  -->
          <div class="send-item" v-if="item.accountId === curSession.fromId && item.msgType === 1">
            <div class="send-div-font">
                {{ item.content }}
            </div>
            <span style="margin-left: 6px">
              <el-avatar :src="loginUser.avatar" shape="square" style="cursor:pointer;"/>
            </span>
          </div>
          <!--  语音  -->
          <div class="send-item" v-if="item.accountId === curSession.fromId && item.msgType === 2">
            <audio preload controls controlsList="nodownload noplaybackrate">
              <source :src=item.content type="audio/wav">
            </audio>
            <span style="margin-left: 6px">
              <el-avatar :src="loginUser.avatar" shape="square" style="cursor:pointer;"/>
            </span>
          </div>
          <!--  文件  -->
          <div class="send-item" v-if="item.accountId === curSession.fromId && item.msgType === 4">
            <div class="send-div-file" @click="downloadFile(item.content)">
              <div style="padding: 4px;">
                <div style="border: 1px solid red;height: 65px;width: 240px">
                  <div style="float: left;width: 10%;height: 100%;border: 1px solid red">
                    <img/>
                  </div>
                  <div style="font-size: 14px">
                    {{ item.extraInfo.name }}
                  </div>
                  <div>
                    {{ item.extraInfo.size }}
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
        <span class="iconfont el-icon-microphone" style="font-size: 27px;" @mousedown="holdDown()"
              @mouseup="holdUp()"></span>
        <!-- 输入框 -->
        <input @keyup.enter="sendMsg()" id="chat-input" placeholder="请文明交流......"
               v-model="chatMsg.content"/>
        <!-- Emoji -->
        <emoji-picker style="display: inline-block">
          <!-- 按钮 -->
          <button
              class="emoji-invoker"
              slot="emoji-invoker"
              slot-scope="{ events: { click: clickEvent } }"
              @click.stop="clickEvent"
          >
            <span class="iconfont icon-smile" style="font-size: 27px;"></span>
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
        <!-- 图片 -->
        <span class="iconfont el-icon-picture-outline"
              style="cursor: pointer;font-size: 27px;"></span>
        <!-- 文件 -->
        <span style="display: inline-block">
          <el-upload
              :action="uploadFileUrl"
              :headers="fileHeaders()"
              :on-success="handleSuccess"
              :on-error="handleError"
              :show-file-list="false"
          >
            <span class="iconfont el-icon-folder" style="cursor: pointer;font-size: 27px;"></span>
          </el-upload>
        </span>
        <!-- 聊天记录 -->
        <span class="iconfont el-icon-time" style="cursor: pointer;font-size: 27px;"></span>
        <!-- 发送按钮 -->
        <span class="iconfont el-icon-s-promotion" style="cursor: pointer;font-size: 27px;"
              @click="sendMsg()"></span>
      </div>
    </el-col>

    <!----------------------------------------------------未选中会话---------------------------------------------------->
    <el-col class="window-cls" v-if="this.curSession === ''"></el-col>

    <!-- 录音波浪线 -->
    <div class="BaseRecorder-wave" v-if="this.canvasFlag">
      <canvas ref="record"></canvas>
    </div>
  </span>
</template>

<script>
import Recorder from 'js-audio-recorder';
import chatMsgApi from "@/api/chatMsg";
import fileApi from "@/api/file"
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
  },

  data() {
    return {
      canvasFlag: false,
      drawRecordId: null,
      recorder: new Recorder({
        sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
        sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
        numChannels: 1, // 声道，支持 1 或 2， 默认是1
      }),
      chatMsg: {
        fromId: '',
        toId: '',
        msgType: '1',
        content: '',
      },
      voiceMsg: {
        fromId: '',
        toId: '',
        msgType: '2',
        content: '',
        extraInfo: {
          name: '',
          size: '',
          type: '',
          voiceTime: 0
        }
      },
      fileMsg: {
        fromId: '',
        toId: '',
        msgType: '4',
        content: '',
        extraInfo: {
          name: '',
          size: '',
          type: ''
        }
      },
      curSession: '',
      voiceMsgTotalTime: 0,
      voiceInterval: null,
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
    /**
     * 鼠标按住：展示音频波浪，开始录音
     */
    holdDown() {
      this.canvasFlag = true;
      this.startRecordAudio();
      this.voiceInterval = setInterval(() => {
        this.voiceMsgTotalTime = this.voiceMsgTotalTime + 1;
        console.log("按下：" + this.voiceMsgTotalTime);
      }, 1000);
    },

    /**
     * 鼠标松开：关闭音频波浪，结束录音，上传录音文件
     */
    holdUp() {
      this.canvasFlag = false;
      this.stopRecordAudio();
      clearInterval(this.voiceInterval)
      if (this.voiceMsgTotalTime < 1) {
        this.$message.warning("长摁持续录音，时长不小于1秒");
        this.voiceMsgTotalTime = 0;
      } else {
        this.uploadAudio();
      }
    },

    /**
     * 开始录音
     */
    startRecordAudio() {
      Recorder.getPermission().then(
          () => {
            console.log("开始录音");
            this.recorder.start(); // 开始录音
            this.drawRecord();
          },
          (error) => {
            this.$message({
              message: "请先允许该网页使用麦克风",
              type: "info",
            });
            console.log(`${error.name} : ${error.message}`);
          }
      );
    },

    /**
     * 停止录音
     */
    stopRecordAudio() {
      this.recorder.stop();
    },

    /**
     * 上传wav录音文件
     * TODO wav转mp3逻辑补充
     */
    uploadAudio() {
      let wavBlob = this.recorder.getWAVBlob();
      let formData = new FormData()
      const newBlob = new Blob([wavBlob], {type: 'audio/wav'})
      const fileOfBlob = new File([newBlob], this.loginUser.accountId + ':' + new Date().getTime() + '.wav')
      formData.append('file', fileOfBlob)
      fileApi.uploadFile(2, formData).then(res => {
        if (res.data.code == 200) {
          this.voiceMsg.fromId = this.loginUser.accountId;
          this.voiceMsg.toId = this.curSession.toId;
          this.voiceMsg.content = res.data.data.url;
          this.voiceMsg.extraInfo = res.data.data.extraInfo;
          this.voiceMsg.extraInfo.voiceTime = this.voiceMsgTotalTime;
          chatMsgApi.sendMsg(this.voiceMsg)
              .then(res => {
                this.voiceMsg.content = '';
                this.voiceMsg.extraInfo = '';
                this.voiceMsgTotalTime = 0;
                this.getChatMsgByRelationId(this.curSession.relationId);
                EventBus.$emit('readCount0Event', this.curSession);
              })
              .catch(e => {
                this.$message.error('发送语音消息功能异常')
              });
        } else {
          this.$message.error('保存语音文件异常')
        }
      }).catch(e => {
        this.$message.error(e.data.msg);
      });
    },

    /**
     * 绘制波浪图-录音
     */
    drawRecord() {
      this.drawRecordId = requestAnimationFrame(this.drawRecord);
      this.drawWave({
        canvas: this.$refs.record,
        dataArray: this.recorder.getRecordAnalyseData(),
        bgcolor: 'white',
        lineWidth: 1,
        lineColor: 'red',
      });
    },

    drawWave({
               canvas,
               dataArray,
               bgcolor = 'rgb(200, 200, 200)',
               lineWidth = 2,
               lineColor = 'rgb(0, 0, 0)',
             }) {
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const bufferLength = dataArray.length;
      // 一个点占多少位置，共有bufferLength个点要绘制
      const sliceWidth = canvas.width / bufferLength;
      // 绘制点的x轴位置
      let x = 0;
      // 填充背景色
      ctx.fillStyle = bgcolor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 设定波形绘制颜色
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = lineColor;
      ctx.beginPath();

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128;
        const y = (v * canvas.height) / 2;
        if (i === 0) {
          // 第一个点
          ctx.moveTo(x, y);
        } else {
          // 剩余的点
          ctx.lineTo(x, y);
        }
        // 依次平移，绘制所有点
        x += sliceWidth;
      }
      // 最后一个点
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
    },

    /**
     * 成功回调：上传文件
     */
    handleSuccess(res, file) {
      this.fileMsg.extraInfo.name = file.raw.name;
      this.fileMsg.extraInfo.size = file.raw.size;
      this.fileMsg.extraInfo.type = file.raw.type;

      this.fileMsg.fromId = this.loginUser.accountId;
      this.fileMsg.toId = this.curSession.toId;
      this.fileMsg.content = res.data.url;

      chatMsgApi.sendMsg(this.fileMsg).then(res => {
        this.getChatMsgByRelationId(this.curSession.relationId);
        EventBus.$emit('readCount0Event', this.curSession)
      }).catch(e => {
        this.$message.error(e.data.msg)
      })
    },

    /**
     * 失败回调：上传文件
     */
    handleError(err, file, fileList) {
      console.log('上传文件失败回调.....')
      this.$message.error(err)
    },

    /**
     * 重新编辑
     */
    reEdit() {

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
      if (this.chatMsg.content.length == 0 || this.chatMsg.content.split(" ").join("").length == 0) {
        this.$message.warning("不可以发送空白消息")
        return;
      }
      this.chatMsg.fromId = this.loginUser.accountId;
      this.chatMsg.toId = this.curSession.toId;
      chatMsgApi.sendMsg(this.chatMsg).then(res => {
        this.chatMsg.content = '';
        this.getChatMsgByRelationId(this.curSession.relationId);
        EventBus.$emit('readCount0Event', this.curSession);
      }).catch(e => {
        this.$message.error(e.data.msg)
      })
    },

    /**
     * 下载文件
     */
    downloadFile(url) {
      window.location.href = process.env.VUE_APP_BASE_API + '/file/download/' + 3 + '?url=' + url;
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
  }
  ,
}
</script>

<style lang="scss" scoped>
// ---------------------音频波浪线---------------------
.BaseRecorder {
  text-align: center;

  & > div {
    margin: 20px 0;
  }

  &-wave {
    canvas {
      width: 300px;
      height: 60px;
      border: 1px solid #ccc;
    }
  }
}


// ---------------------音频播放器---------------------
audio {
  width: 14vw;
}

audio::-webkit-media-controls-mute-button {
  display: none;
}

audio::-webkit-media-controls-panel {
  background: $logo-color;
}

audio::-webkit-media-controls-volume-control-container {
  display: none;
}

// ---------------------消息输入框---------------------
#chat-input {
  padding-left: 8px;
  padding-right: 8px;
  width: 68%;
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


// ---------------------滚动条---------------------
.window-cls::-webkit-scrollbar {
  width: 7.8px;
  height: 7.8px;
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
  width: 7.8px;
  height: 7.8px;
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

.emoji-picker::-webkit-scrollbar {
  width: 7.8px;
  height: 0px;
}

.emoji-picker::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #9e9e9e;
}

.emoji-picker::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #ededed;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, .1);
}


// ---------------------消息样式：发送方---------------------
.send-item {
  width: 70%;
  display: flex;
  align-items: center;
  margin-right: 1%;
  margin-top: 1%;
  float: right;
  justify-content: flex-end
}

.send-div-font {
  padding: 15px;
  font-size: 14px;
  background-color: $logo-color;
  border-radius: 10px;
}

.send-div-file {
  border-radius: 10px;
  background-color: #f0fff3;
  cursor: pointer
}

// ---------------------消息样式：接收方---------------------
.receive-item {
  width: 70%;
  display: flex;
  align-items: center;
  margin-left: 1%;
  margin-top: 1%;
}

.receive-div-font {
  padding: 15px;
  font-size: 14px;
  background-color: floralwhite;
  border-radius: 10px;
}

.receive-div-file {
  border-radius: 10px;
  background-color: #f0fff3;
  cursor: pointer;
}

// ---------------------分割线---------------------
.head-bar {
  display: flex;
  align-items: center;
  padding-left: 1%;
  height: 9%;
  border: solid $window-bottom-color;
  border-width: 0 0 2px 0;
}

// ---------------------输入框---------------------
.input-cls {
  margin-top: 1%;
  height: 8%;
  width: 52vw;
  border: solid $window-bottom-color;
  border-width: 2px 0 0 0;
}

// ---------------------会话名称---------------------
.session-name-cls {
  color: $session-nick-color;
  font-family: "Arial Rounded MT Bold";
}

// ---------------------Emoji---------------------
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

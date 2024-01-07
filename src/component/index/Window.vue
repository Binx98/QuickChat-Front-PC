<template>
  <span>
    <el-col :span="15" style="background-color: #323335;border-radius: 10px;height: 90%;overflow: auto;">
      <!--  上边栏  -->
      <div style="display: flex; align-items: center;padding-left: 1%; height: 9%">
        <el-avatar shape="square" style="margin-right: 1%;cursor:pointer;"/>
        <div style="border: 1px solid #16334a">徐志摩</div>
      </div>

      <!--  窗口  -->
      <div style="height: 80%;overflow: auto;">

        <!--  接收信息  -->
        <div style="width: 90%;display: flex;align-items: center;margin-left: 1%;margin-top: 1%;">
              <span style="margin-right: 6px">
                <el-avatar shape="square" style="cursor:pointer"/>
              </span>
          <div style="background-color: floralwhite;border-radius: 10px;">
            <div style="padding: 15px;font-size: 14px;word-break: break-all;">
              11111111111
            </div>
          </div>
        </div>

        <!--  主动发送  -->
        <div
            style="float: right;width: 70%;margin-right: 1%;margin-top:1%;display: flex; align-items: center;justify-content: flex-end">
          <div
              style="margin-left: 1.6%;background-color: #12CEC2FF;border-radius: 10px;display: inline-block;">
            <div style="padding: 15px;font-size: 14px;word-break: break-all">
              2222222222222222222222222222222222222222222222
            </div>
          </div>
          <span style="margin-left: 6px">
            <el-avatar shape="square" style="cursor:pointer;"/>
          </span>
        </div>
      </div>

      <!-- 输入框 -->
      <div style="margin-top: 1%;height: 8%;width: 48vw">
        <span>语音、</span>
        <el-input id="chat-input" placeholder="请开始你的表演......" type="text" style="width: 70%" v-model="chatMsg"/>
        <span>表情、</span>
        <span>截图、</span>
        <span>文件、</span>
        <span>发送</span>
        <!-- Emoji -->
        <span class="wrapper">
          <emoji-picker @emoji="append" :search="search">
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
            <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
              <div class="emoji-picker" :style="{ top: display.y + 'px', left: display.x + 'px' }">
                <div class="emoji-picker__search">
                  <input type="text" v-model="search" v-focus>
                </div>
                <div>
                  <div v-for="(emojiGroup, category) in emojis" :key="category">
                    <div class="emojis">
                      <span
                          v-for="(emoji, emojiName) in emojiGroup"
                          :key="emojiName"
                          @click="insert(emoji)"
                          :title="emojiName"
                      >{{ emoji }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </emoji-picker>
        </span>
      </div>
    </el-col>
  </span>
</template>

<script>
import EmojiPicker from 'vue-emoji-picker'

export default {
  name: "Window",

  components: {
    EmojiPicker
  },

  data() {
    return {
      chatMsg: '',
      input: '',
      search: '',
    }
  },

  method: {
    append(emoji) {
      this.input += emoji
    },
  },

  directives: {
    focus: {
      inserted(el) {
        el.focus()
      },
    },
  },
}
</script>

<style scoped>
#chat-input {
  border-radius: 20px;
  font-size: 14px;
  white-space: pre-wrap;
  overflow-y: auto;
  resize: vertical;
}

.wrapper {
  display: inline-block;
}

.emoji-invoker {
  width: 1.5rem;
  height: 1.5rem;
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
  font-family: Montserrat;
  border: 1px solid #ccc;
  width: 20rem;
  height: 20rem;
  overflow: scroll;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 8px #c7dbe6;
}

.emoji-picker__search {
  display: flex;
}

.emoji-picker__search > input {
  flex: 1;
  border-radius: 10rem;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  outline: none;
}

.emoji-picker h5 {
  margin-bottom: 0;
  color: #b1b1b1;
  text-transform: uppercase;
  font-size: 0.8rem;
  cursor: default;
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
  padding: 0.2rem;
  cursor: pointer;
  border-radius: 5px;
}

.emoji-picker .emojis span:hover {
  background: #ececec;
  cursor: pointer;
}
</style>

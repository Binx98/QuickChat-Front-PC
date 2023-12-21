<template>
  <div>
    <!--  背景视频  -->
    <video src="@/assets/video/background.mp4" autoplay muted loop
           style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; object-fit: cover;"/>

    <!--  会话窗口整体  -->
    <div class="main">
      <div style="background-color: #232427;width: 100%;height: 100%;border-radius: 16px;">
        <el-row :gutter="12" style=" height: 100%">
          <!--  0.导航栏 -->
          <el-col :span="5"
                  style="height: 10%;display: flex; justify-content: center; align-items: center;">
            <el-image :src="require('@/assets/logo/logo2_transparent.png')"
                      style="width: 100%; height: 100%; object-fit: cover;"/>
          </el-col>
          <el-col :span="15"
                  style=" height: 10%;display: flex; justify-content: center; align-items: center;">
            <el-input style="width: 50%"/>
          </el-col>
          <el-col :span="1" style=" height: 10%;">
            搞几个icon：喇叭、换主题、音乐
          </el-col>
          <el-col :span="2"
                  style=" height: 10%;display: flex; justify-content: center; align-items: center;">
            <el-avatar :size="58" style="cursor: pointer"/>
          </el-col>

          <!--  1.会话列表 -->
          <el-col :span="5" style="height: 90%;">
            <div style="background-color: #323335;border-radius: 6px;margin-bottom: 2px;display: flex;">
              <div>
                <el-avatar shape="square" :size="48"/>
              </div>
              <div style="width: 50%">
                <div style="font-size: 13px;margin-bottom: 2%;color: antiquewhite">QuickChat官方</div>
                <div style="font-size: 13px;color: antiquewhite">你好啊！</div>
              </div>
              <div>
                <div style="font-size: 12px;color: antiquewhite">2023-12-02</div>
              </div>
            </div>
          </el-col>

          <!--  2、聊天窗口  -->
          <el-col :span="15" style="background-color: #323335;border-radius: 10px;height: 90%;overflow: auto;">
            <!--  2.1、上边栏  -->
            <div style="display: flex; align-items: center;padding-left: 1%; height: 9%">
              <el-avatar shape="square" style="margin-right: 1%;cursor:pointer;"/>
              <div style="border: 1px solid red">徐志摩</div>
            </div>
            <!--  2.2、窗口  -->
            <div style="height: 80%;overflow: auto;">
              <!--  接收信息  -->
              <div style="width: 90%;display: flex;align-items: center;margin-left: 1%;margin-top: 1%;">
              <span style="margin-right: 6px">
                <el-avatar shape="square" style="cursor:pointer"/>
              </span>
                <div style="background-color: #34A8FF;border-radius: 10px;">
                  <div style="padding: 15px;font-size: 14px;word-break: break-all;">
                    11111111111
                  </div>
                </div>
              </div>
              <!--  主动发送  -->
              <div
                  style="float: right;width: 70%;margin-right: 1%;margin-top:1%;display: flex; align-items: center;justify-content: flex-end">
                <div
                    style="margin-left: 1.6%;background-color: mediumspringgreen;border-radius: 10px;display: inline-block;">
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
            <div style="margin-top: 1%;height: 8%;">
              <span>语音、</span>
              <el-input id="chat-input-id" placeholder="请开始你的表演......" type="text" style="width: 70%"/>
              <span>表情、</span>
              <span>截图、</span>
              <span>文件、</span>
              <span>发送</span>
            </div>
          </el-col>

          <!--  3.用户信息、功能框架 -->
          <el-col :span="4" style="height: 90%;overflow: auto;">
            <!--  会话概览、视频通话  -->
            <div style="background-color: #323335;border-radius: 10px;height: 32%">
              会话概览、视频通话
            </div>
            <!--  联系方式  -->
            <div style="background-color: #323335;border-radius: 10px;height: 32%;margin-top: 1%">
              联系方式
            </div>
            <!--  动态  -->
            <div style="background-color: #323335;border-radius: 10px;height: 34%;margin-top: 1%">
              动态信息
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },

      // 用户登录信息
      loginUser: {
        avatar: '',
        nickName: '',
      },
      // 会话列表
      sessionList: [],
      // 用户信息（当前会话）
      sessionUser: {
        avatar: '',
        nickName: '',
        gender: '',
        email: '',
        phone: '',
      },
      // 聊天信息（当前会话）
      chatMsgList: [],
    }
  },

  methods: {},
}
</script>

<style scoped>
.main {
  width: 80%;
  height: 90%;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.86;
}

.chat-footer el-input {
  flex: 1;
  margin-right: 10px;
}

#chat-input-id {
  border-radius: 20px;
  font-size: 14px;
  white-space: pre-wrap;
  overflow-y: auto;
  resize: vertical;
}
</style>

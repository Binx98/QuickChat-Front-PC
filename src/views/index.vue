<template>
  <div class="main">
    <div style="background-color: #292A2D;width: 100%;height: 100%;border-radius: 16px;border: 1px solid yellow;">
      <el-row :gutter="12" style="border: 1px solid red;height: 100%">
        <!--  0.导航栏 -->
        <el-col :span="4"
                style="border: 1px solid red;height: 10%;display: flex; justify-content: center; align-items: center;">
          <el-image :src="require('@/assets/logo/logo2_transparent.png')"
                    style="width: 100%; height: 100%; object-fit: cover;"/>
        </el-col>
        <el-col :span="15"
                style="border: 1px solid red;height: 10%;display: flex; justify-content: center; align-items: center;">
          <el-input style="width: 50%"/>
        </el-col>
        <el-col :span="2" style="border: 1px solid red;height: 10%;">
          搞几个icon：喇叭、换主题、音乐
        </el-col>
        <el-col :span="2"
                style="border: 1px solid red;height: 10%;display: flex; justify-content: center; align-items: center;">
          <el-avatar :size="58" style=""/>
        </el-col>

        <!--  1.会话列表 -->
        <el-col :span="4" style="border: 1px solid red;height: 90%;overflow: auto">
          <!--  底部导航 -->
          <div class="friend-item"
               style="background-color: #323335;border-radius: 6px;display: flex;margin-bottom: 2px">
            <el-avatar style="float: left;" shape="square" :size="55"/>
            <div style="flex-grow: 2;">
              <div style="color: white; font-size: 16px;">昵称</div>
              <div style="color: grey; font-size: 14px;">最后一条消息内容</div>
            </div>
            <div style="margin-left: 10px; text-align: right;">
              <div style="color: grey; font-size: 14px;">时间</div>
              <div
                  style="background-color: red; color: white; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; font-size: 12px;">
                99
              </div>
            </div>
          </div>
          <div class="friend-item"
               style="background-color: #323335;border-radius: 6px;display: flex;margin-bottom: 2px">
            <el-avatar style="float: left;" shape="square" :size="55"/>
          </div>
          <div class="friend-item"
               style="background-color: #323335;border-radius: 6px;display: flex;margin-bottom: 2px">
            <el-avatar style="float: left;" shape="square" :size="55"/>
          </div>
          <div class="friend-item"
               style="background-color: #323335;border-radius: 6px;display: flex;margin-bottom: 2px">
            <el-avatar style="float: left;" shape="square" :size="55"/>
          </div>
          <div class="friend-item"
               style="background-color: #323335;border-radius: 6px;display: flex;margin-bottom: 2px">
            <el-avatar style="float: left;" shape="square" :size="55"/>
          </div>
          <div class="friend-item"
               style="background-color: #323335;border-radius: 6px;display: flex;margin-bottom: 2px">
            <el-avatar style="float: left;" shape="square" :size="55"/>
          </div>
        </el-col>

        <!--  2、聊天窗口  -->
        <el-col :span="15" style="background-color: #323335;border-radius: 10px;height: 90%;overflow: auto;">
          <!--  2.1、上边栏  -->
          <div style="display: flex; align-items: center;padding-left: 1%;border: 1px solid red;height: 9%">
            <el-avatar :size="48" shape="square" style="margin-right: 1%;cursor:pointer;"/>
            <div style="border: 1px solid red">徐志摩</div>
          </div>
          <!--  2.2、窗口  -->
          <div style="border: 1px solid red;height: 80%;overflow: auto;">
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
            <!--  主动发送  -->
            <div
                style="float: right;width: 70%;margin-right: 1%;margin-top:1%;display: flex; align-items: center;justify-content: flex-end">
              <div
                  style="margin-left: 1.6%;background-color: mediumspringgreen;border-radius: 10px;display: inline-block;">
                <div style="padding: 15px;font-size: 14px;word-break: break-all">
                  2222222222222222222222222222222222222222222222
                  2222222222222222222222222222222222222222222222
                  2222222222222222222222222222222222222222222222
                </div>
              </div>
              <span style="margin-left: 6px">
                <el-avatar shape="square" style="cursor:pointer;"/>
              </span>
            </div>
            <!--  主动发送  -->
            <div
                style="float: right;width: 80%;margin-right: 1%;margin-top:1%;display: flex; align-items: center;justify-content: flex-end;">
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
            <!--  主动发送  -->
            <div
                style="float: right;width: 80%;margin-right: 1%;margin-top:1%;display: flex; align-items: center;justify-content: flex-end">
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
            <!--  主动发送  -->
            <div
                style="float: right;width: 80%;margin-right: 1%;margin-top:1%;display: flex; align-items: center;justify-content: flex-end">
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
            <!--  主动发送  -->
            <div
                style="float: right;width: 80%;margin-right: 1%;margin-top:1%;display: flex; align-items: center;justify-content: flex-end">
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
            <!--  主动发送  -->
            <div
                style="float: right;width: 80%;margin-right: 1%;margin-top:1%;display: flex; align-items: center;justify-content: flex-end">
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
          <div style="margin-top: 1%;border: 1px solid yellow;height: 9%">
            <el-input id="chat-input-id" placeholder="请开始你的表演......" type="text"/>
          </div>
        </el-col>

        <!--  3.用户信息、功能框架 -->
        <el-col :span="5" style="height: 90%;overflow: auto;border: 1px solid red">
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
</template>

<script>
export default {
  data() {
    return {
      // 用户登录信息
      loginUser: {
        avatar: '',
        nickName: '',
      },
      // 当前会话用户信息
      sessionUser: {
        avatar: '',
        nickName: '',
        gender: '',
        email: '',
        phone: '',
      },
      // 会话列表
      sessionList: [],
      // 聊天信息（k:account_id, v:聊天信息列表）
      chatMsgList: [],
    }
  },

  methods: {},
}
</script>

<style scoped>
.main {
  width: 72%;
  height: 88%;
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

.friend-item {
  color: antiquewhite;
  cursor: pointer;
}

.friend-item:hover {
  background-color: #ccc;
}

#chat-input-id {
  border-radius: 20px;
  font-size: 14px;
  background-color: #323335;
  color: white;
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 40px;
  resize: vertical;
}
</style>

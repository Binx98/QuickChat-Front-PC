<template>
  <div class="main">
    <div style="background-color: #292A2D;width: 100%;height: 100%;border-radius: 20px;opacity: 0.86">
      <el-row :gutter="12">
        <!--  0.导航栏 -->
        <el-col :span="24">
          <div class="friend-item" style="background-color: #323335;border-radius: 10px;">
            <el-avatar style="float: left;" shape="square" :size="55"/>
            <div style="float: left;margin-left: 2%;margin-top:3.5%;font-size: 15px"></div>
            <span style="float: right;margin-top: 3.5%;margin-right: 3.5%;color: #999999;font-size: 13px"></span>
            <div style="padding-top: 35px;margin-left: 19%;font-size: 13px;color: #999999"></div>
          </div>
        </el-col>

        <!--  1.会话列表 -->
        <el-col :span="4">
          <div class="friend-item" style="background-color: #323335;margin-bottom: 5px;border-radius: 10px;">
            <el-avatar style="float: left;" shape="square" :size="55"/>
            <div style="float: left;margin-left: 2%;margin-top:3.5%;font-size: 15px"></div>
            <span style="float: right;margin-top: 3.5%;margin-right: 3.5%;color: #999999;font-size: 13px"></span>
            <div style="padding-top: 35px;margin-left: 19%;font-size: 13px;color: #999999"></div>
          </div>
        </el-col>

        <!--  2.聊天窗口  -->
        <el-col :span="15" style="background-color: #323335;border-radius: 10px">
          <!--  上边栏  -->
          <div style="height: 60px; display: flex; align-items: center;padding-left: 1%;">
            <el-avatar :size="46" shape="square" style="margin-right: 1%;cursor:pointer;"/>
            <div style="font-size: 17px;color: antiquewhite"></div>
          </div>
          <!--  聊天内容展示  -->
          <div id="chat-content-show" style="height: 460px;border-radius: 10px;">
            <div>
              <!--  接收信息  -->
              <div style="width: 90%;display: flex;align-items: center;margin-left: 1%;margin-top: 1%;">
                  <span style="margin-right: 6px">
                    <el-avatar shape="square" style="cursor:pointer"/>
                  </span>
                <div style="background-color: #34A8FF;border-radius: 10px;">
                  <div style="padding: 15px;font-size: 14px;word-break: break-all;">

                  </div>
                </div>
              </div>
              <!--  主动发送  -->
              <div
                  style="float: right;width: 80%;margin-right: 1%;margin-top:1%;display: flex; align-items: center;justify-content: flex-end">
                <div
                    style="margin-left: 1.6%;background-color: mediumspringgreen;border-radius: 10px;display: inline-block;">
                  <div style="padding: 15px;font-size: 14px;word-break: break-all">

                  </div>
                </div>
                <span style="margin-left: 6px">
                    <el-avatar shape="square" style="cursor:pointer;"/>
                  </span>
              </div>
            </div>
          </div>
          <!--  内容输入Container  -->
          <div id="chat-input-container">
            <!-- 语音消息 -->
            <svg style="width: 2em;height: 2em;margin-right: 1%;cursor:pointer;">
              <use xlink:href="#icon-yuyin"></use>
            </svg>
            <!-- 输入框 -->
            <span style="width: 70%">
              <el-input id="chat-input-id" placeholder="请开始你的表演......" type="text"/>
            </span>
            <!-- emoji -->
            <svg style="width: 1.8em;height: 1.8em;margin-left: 0.6%;cursor:pointer;">
              <use xlink:href="#icon-emoji"></use>
            </svg>
            <!-- 礼物 -->
            <svg style="width: 1.8em;height: 1.8em;margin-left: 0.6%;cursor:pointer;">
              <use xlink:href="#icon-liwu"></use>
            </svg>
            <!-- 视频 -->
            <svg style="width: 1.9em;height: 1.9em;margin-left: 0.6%;cursor:pointer;">
              <use xlink:href="#icon-shipin"></use>
            </svg>
            <!-- 文件 -->
            <svg style="width: 1.8em;height: 1.8em;margin-left: 0.6%;cursor:pointer;">
              <use xlink:href="#icon-wenjianjia"></use>
            </svg>
            <!-- 发送 -->
            <svg style="width: 1.8em;height: 1.8em;margin-left: 0.6%;cursor:pointer;">
              <use xlink:href="#icon-fasong"></use>
            </svg>
          </div>
        </el-col>

        <!--  3.用户信息、功能框架 -->
        <el-col :span="5">
          <!--  用户信息、群聊列表  -->
          <div style="height: 340px;background-color: #323335;border-radius: 10px">
            用户信息
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import SessionComponent from "@/components/SessionComponent";
import WindowComponent from "@/components/WindowComponent";

export default {
  components: {
    HeaderComponent,
    SessionComponent,
    WindowComponent
  }
}
</script>

<style scoped>
.main {
  width: 68%;
  height: 78%;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.chat-footer el-input {
  flex: 1;
  margin-right: 10px;
}

.friend-item {
  color: antiquewhite;
  height: 55px;
  cursor: pointer;
  margin-top: 2px;
}

.friend-item:hover {
  background-color: #ccc;
}

#chat-input-container {
  width: 99%;
  border-radius: 10px;
  overflow: auto;
  padding: 0.6%;
  max-height: 40px;
  display: flex;
  align-items: center;
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

#chat-content-show {
  overflow: auto;
}
</style>

<template>
  <div class="main">
    <div style="background-color: #292A2D;width: 100%;height: 100%;border-radius: 20px;border: 1px solid yellow;">
      <el-row :gutter="12" style="border: 1px solid red;height: 100%">
        <!--  0.导航栏 -->
        <el-col :span="24" style="border: 1px solid red;height: 8%">
          <div class="friend-item"
               style="background-color: #323335;border-radius: 10px;display: flex; align-items: center;">
            <el-avatar style="float: left;" shape="square" :size="55"/>
            <div style="float: left;font-size: 15px">1111111</div>
            <span style="float: right;font-size: 13px">2222222</span>
          </div>
        </el-col>

        <!--  1.会话列表 -->
        <el-col :span="4" style="border: 1px solid red;height: 92%;overflow: auto">
          <div class="friend-item"
               style="background-color: #323335;border-radius: 10px;display: flex;">
            <el-avatar style="float: left;" shape="square" :size="55"/>
            <div style="float: left;font-size: 15px">1111111</div>
            <span style="float: right;font-size: 13px">2222222</span>
          </div>
          <div class="friend-item"
               style="background-color: #323335;border-radius: 10px;display: flex;">
            <el-avatar style="float: left;" shape="square" :size="55"/>
            <div style="float: left;font-size: 15px">1111111</div>
            <span style="float: right;font-size: 13px">2222222</span>
          </div>
          <div class="friend-item"
               style="background-color: #323335;border-radius: 10px;display: flex;">
            <el-avatar style="float: left;" shape="square" :size="55"/>
            <div style="float: left;font-size: 15px">1111111</div>
            <span style="float: right;font-size: 13px">2222222</span>
          </div>
          <div class="friend-item"
               style="background-color: #323335;border-radius: 10px;display: flex;">
            <el-avatar style="float: left;" shape="square" :size="55"/>
            <div style="float: left;font-size: 15px">1111111</div>
            <span style="float: right;font-size: 13px">2222222</span>
          </div>
          <div class="friend-item"
               style="background-color: #323335;border-radius: 10px;display: flex;">
            <el-avatar style="float: left;" shape="square" :size="55"/>
            <div style="float: left;font-size: 15px">1111111</div>
            <span style="float: right;font-size: 13px">2222222</span>
          </div>
        </el-col>

        <!--  2、聊天窗口  -->
        <el-col :span="15" style="background-color: #323335;border-radius: 10px;height: 92%;overflow: auto;border: 1px solid red">
          <!--  2.1、上边栏  -->
          <div style="display: flex; align-items: center;padding-left: 1%;border: 1px solid red">
            <el-avatar :size="46" shape="square" style="margin-right: 1%;cursor:pointer;"/>
            <div style="font-size: 17px;color: antiquewhite"></div>
          </div>
          <!--  2.2、窗口  -->
          <div style="border: 1px solid red;height: 82%">
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
          <div>
            <el-input id="chat-input-id" placeholder="请开始你的表演......" type="text" style="border: 1px solid red"/>
          </div>
        </el-col>

        <!--  3.用户信息、功能框架 -->
        <el-col :span="5" style="height: 92%;overflow: auto;border: 1px solid red">
          <!--  用户信息、群聊列表  -->
          <div style="background-color: #323335;border-radius: 10px;height: 36%">
            用户信息
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 69%;
  height: 80%;
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

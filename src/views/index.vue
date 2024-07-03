<template>
  <div class="main-container">
    <div class="window-container">
      <el-row shape="square" :gutter="4" style="height: 100%">
        <!-- 侧边导航栏 -->
        <LeftMenu :loginUser="loginUser"/>

        <!-- 导航栏 -->
        <Header/>

        <!-- 会话列表 -->
        <Session :sessionList="sessionList" :chatMsgEvent="chatMsgEvent"/>

        <!-- 聊天窗口 -->
        <Window :chatMsgList="chatMsgList" :loginUser="loginUser" :chatMsgEvent="chatMsgEvent"/>
      </el-row>
    </div>
  </div>
</template>

<script>
import LeftMenu from "@/component/leftMenu/LeftMenu";
import Header from "@/component/header/Header";
import Session from "@/component/session/Session";
import Window from "@/component/window/Window";
import userApi from '@/api/user'

export default {
  components: {
    LeftMenu,
    Window,
    Session,
    Header
  },

  data() {
    return {
      // 用户登录信息
      loginUser: {
        accountId: '',
        nickName: '',
        avatar: '',
        gender: '',
        email: '',
        location: '',
        createTime: ''
      },

      // 用户信息（当前会话）
      sessionUser: {
        avatar: '',
        nickName: '',
        gender: '',
        email: '',
        phone: '',
      },

      // 发送消息载体
      chatMsgEvent: {
        relationId: '',
      },

      // 会话列表
      sessionList: [],

      // 会话未读数量列表
      unreadCountList: [],

      // 聊天信息
      chatMsgList: [],
    }
  },

  created() {
    this.getByToken()
  },

  methods: {
    /**
     * WebSocket客户端初始化
     */
    initWebSocket() {
      let ws = new WebSocket('ws://localhost:10086');

      // 建立连接
      ws.onopen = evt => {
        ws.send(this.loginUser.accountId);
      };

      // 获取Channel消息
      ws.onmessage = evt => {
        this.chatMsgEvent = JSON.parse(evt.data);
      };

      // 关闭连接
      ws.onclose = evt => {
        console.log("Connection closed.");
      };
    },

    /**
     * 根据 token 获取用户信息
     */
    getByToken() {
      let token = localStorage.getItem("token");
      if (token === '' || token === null) {
        this.$router.push('/login')
      }
      userApi.getByToken().then(res => {
        this.loginUser = res.data.data;
        this.initWebSocket();
      }).catch(e => {
        if (e.data.code === 510) {
          localStorage.removeItem("token");
          this.$router.push('/login')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.main-container {
  width: 77vw;
  height: 91vh;
  opacity: 0.9;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.window-container {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: $window-bottom-color;
}
</style>

<template>
  <div class="main">
    <div class="window">
      <el-row shape="square" :gutter="4" style="height: 100%">
        <!-- 侧边导航栏 -->
        <LeftMenu :loginUser="loginUser"/>

        <!-- 导航栏 -->
        <Header/>

        <!-- 会话列表 -->
        <Session :sessionList="sessionList"/>

        <!-- 聊天窗口 -->
        <Window :chatMsgList="chatMsgList" :loginUser="loginUser"/>
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
import sessionApi from '@/api/session'
import chatMsgApi from "@/api/chatMsg";

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
        console.log("客户端WebSocket建立连接：" + this.loginUser.accountId);
        ws.send("Hello WebSockets!");
      };

      // 获取Channel消息
      ws.onmessage = evt => {
        console.log("Received Message: " + evt.data);
        ws.close();
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
        this.getSessionList();
        this.initWebSocket();
      }).catch(e => {
        localStorage.removeItem("token");
        this.$router.push('/login')
      })
    },

    /**
     * 查询会话列表
     */
    getSessionList() {
      sessionApi.getSessionList().then(res => {
        this.sessionList = res.data.data;
        let accountIds = [];
        for (let i = 0; i < this.sessionList.length; i++) {
          accountIds.push(this.sessionList[i].toId)
        }
        this.getChatMsgList(accountIds);
        this.getUnreadCountList(this.sessionList)
      }).catch(e => {
        this.$message.error('聊天会话列表信息加载失败，请刷新页面重试！');
      })
    },

    /**
     * 查询会话未读数量列表
     */
    getUnreadCountList(sessionList) {
      sessionApi.getUnreadCountList(sessionList).then(res => {
      }).catch(e => {
        this.$message.error('会话列表未读数量查询失败，请刷新页面重试！')
      })
    },

    /**
     * 查询会话聊天列表
     */
    getChatMsgList(param) {
      chatMsgApi.getChatMsgList(param).then(res => {
        this.chatMsgList = res.data.data;
      }).catch(e => {
        this.$message.error('聊天记录信息加载失败，请刷新页面重试！')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  width: 74vw;
  height: 90vh;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.9;
}

.window {
  background-color: $window-bottom-color;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>

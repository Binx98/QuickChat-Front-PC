<template>
  <div class="main">
    <div class="window">
      <el-row :gutter="12" style="height: 100%">
        <!-- 导航栏 -->
        <Header/>

        <!-- 会话列表 -->
        <Session/>

        <!-- 聊天窗口 -->
        <Window/>

        <!-- 用户信息、功能框架 -->
        <Right/>
      </el-row>
    </div>
  </div>
</template>

<script>
import Header from "@/component/index/header/Header";
import Session from "@/component/index/session/Session";
import Window from "@/component/index/window/Window";
import Right from "@/component/index/right/InfoDynamic";

import userApi from '@/api/user'
import sessionApi from '@/api/session'
import chatMsgApi from "@/api/chatmsg";

export default {
  components: {
    Right,
    Window,
    Session,
    Header
  },

  data() {
    return {
      // 用户登录信息
      loginUser: {
        avatar: '',
        nickName: '',
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

      // 聊天信息（当前会话）
      chatMsgList: [],
    }
  },

  created() {
    this.getByToken();
    this.getSessionList();
  },

  methods: {
    /**
     * 根据 token 获取用户信息
     */
    getByToken() {
      let token = localStorage.getItem("token");
      if (token == '' || token == null) {
        this.$router.push('/login')
      }
      userApi.getByToken().then(res => {
        this.loginUser = res.data.data;
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
        this.getChatMsgList();
      }).catch(e => {
        this.$message.error('聊天会话列表信息加载失败，请刷新页面重试！');
      })
    },

    /**
     * 查询会话聊天列表
     */
    getChatMsgList() {
      chatMsgApi.getChatMsgList().then(res => {
        this.chatMsgList = res.data.data;
      }).catch(e => {
        this.$message.error('聊天记录信息加载失败，请刷新页面重试！')
      })
    }
  },
}
</script>

<style scoped>
.main {
  width: 80%;
  height: 93%;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.9;
}

.window {
  background-color: #232427;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.chat-footer el-input {
  flex: 1;
  margin-right: 10px;
}
</style>

<template>
  <div class="main-container">
    <div class="window-container">
      <el-row shape="square" :gutter="4" style="height: 100%">
        <!-- 侧边导航 -->
        <LeftMenu/>
        <!-- 导航栏 -->
        <Header/>
        <!-- 会话列表 -->
        <Session/>
        <!-- 聊天窗口 -->
        <Window/>
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
import EventBus from "@/component/event-bus";

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
      let ws = new WebSocket(process.env.WS_SERVER_API);

      // 建立连接
      ws.onopen = evt => {
        ws.send(this.loginUser.accountId);
      };

      // 获取 Channel 消息，根据类型分别处理
      ws.onmessage = msg => {
        this.handleWsPushMsg(msg);
      };

      // 关闭连接
      ws.onclose = evt => {
        console.log("Connection closed.");
      };
    },

    /**
     * 根据推送消息类型，分别进行处理
     */
    handleWsPushMsg(wsMsg) {
      // 获取消息类型、消息体
      let msg = JSON.parse(wsMsg.data);
      let pushType = msg.pushType;
      let message = msg.message;

      // 1.发送聊天信息
      if (pushType === 1) {
        EventBus.$emit('sendMsgEvent', message);
      }

      // 2.好友/群申请
      if (pushType === 2) {

      }
    },

    /**
     * 根据 token 获取用户信息
     */
    getByToken() {
      let token = localStorage.getItem("token");
      if (!token) {
        this.$router.push('/login')
      }
      userApi.getByToken().then(res => {
        this.loginUser = res.data.data;
        this.initWebSocket();
        EventBus.$emit('loginUser', this.loginUser)
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

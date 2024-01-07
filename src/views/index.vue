<template>
  <!--  会话窗口整体  -->
  <div class="main">
    <div style="background-color: #232427;width: 100%;height: 100%;border-radius: 16px;">
      <el-row :gutter="12" style=" height: 100%">
        <!--  0.导航栏 -->
        <Header/>

        <!--  1.会话列表 -->
        <Session/>

        <!--  2、聊天窗口  -->
        <Window/>

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
</template>

<script>
import userApi from '@/api/user'
import Header from "@/component/Header";
import Session from "@/component/Session";
import Window from "@/component/Window";

export default {
  components: {
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

      //
    }
  },

  created() {
    this.getByToken();
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
      console.log(11111111111)
      userApi.getByToken().then(res => {
        this.loginUser = res.data.data;
        console.log(2222222222222)
      }).catch(e => {
        console.log(333333333333333)
        console.log(e)
        localStorage.removeItem("token");
        this.$router.push('/login')
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
  opacity: 0.86;
}

.chat-footer el-input {
  flex: 1;
  margin-right: 10px;
}
</style>

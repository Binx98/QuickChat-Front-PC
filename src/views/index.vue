<template>
  <!--  聊天框主体  -->
  <div class="main">
    <!--   0.上边栏   -->
    <HeaderComponent/>
    <!--   1.左侧功能栏   -->
    <FunctionComponent/>
    <!--   2.左侧会话列表   -->
    <SessionComponent/>
    <!--   3.中间聊天框   -->
    <!--   4.右侧用户信息、群列表、视频通话|边看边聊   -->
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FunctionComponent from "@/components/FunctionComponent";
import SessionComponent from "@/components/SessionComponent";

export default {
  components: {
    HeaderComponent,
    FunctionComponent,
    SessionComponent
  }
}
</script>

<style scoped>
.main {
  border: 1px solid red;
  width: 76%;
  height: 88%;
  margin: auto;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

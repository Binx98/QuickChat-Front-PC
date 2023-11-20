<template>
  <!--  聊天框主体  -->
  <div class="main">
    <!--   0.上边栏   -->
    <HeaderComponent/>
    <!--   1.左侧会话列表   -->
    <SessionComponent/>
    <!--   2.中间聊天框   -->
    <WindowComponent/>
    <!--   3.右侧用户信息、群列表   -->
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
  border: 1px solid red;
  width: 70%;
  height: 84%;
  margin: auto;
  overflow: clip;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

<template>
  <div style="">
    <!--  聊天框主体  -->
    <div class="main">
      <!--   0.上边栏   -->
      <HeaderComponent/>
      <!--   1.左侧功能栏   -->
      <!--   2.左侧列表   -->

      <!--   3.中间聊天框   -->

      <!--   4.右侧用户信息、群列表、视频通话|边看边聊   -->
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  components: {
    HeaderComponent
  }
}
</script>

<style scoped>
.main {
  text-align: center;
  border: 1px solid red;
  width: 80%;
  height: 86%;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

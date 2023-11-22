<template>
  <div class="main">
    <!--  导航栏  -->
    <el-container>
      <el-header>
        <span>LOGO</span>
      </el-header>
    </el-container>

    <el-container style="height: 100%">
      <el-aside width="18%">
        11111111
      </el-aside>
      <el-main>
        Main
      </el-main>
      <el-aside width="20%">
        1111111111
      </el-aside>
    </el-container>
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


.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

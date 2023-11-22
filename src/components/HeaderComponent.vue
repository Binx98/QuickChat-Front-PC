<template>
  <div class="header-main">
    <!--  Logo  -->
    <div class="grid-content bg-purple" style="float: left;width: 18.2%;height: 100%">
      <span style="border: 1px solid red">LOGO</span>
    </div>

    <!--  输入框  -->
    <div class="grid-content bg-purple" style="float: left;width: 20%;padding-left: 20%">
      <el-input style="border: 1px solid red"/>
    </div>

    <!--  icon  -->
    <div class="grid-content bg-purple" style="float: left">

    </div>

    <!--  头像  -->
    <div class="grid-content bg-purple" style="float: left">
      <el-avatar/>
    </div>

    <!--  名称、在线状态  -->
    <div class="grid-content bg-purple" style="float: left">
      <el-avatar/>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.header-main {
  border: 1px solid red;
  height: 10%;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

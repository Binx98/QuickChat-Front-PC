<template>
  <div class="header-main">
    <el-row :gutter="10">
      <!--  Logo  -->
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <span style="border: 1px solid red">LOGO</span>
        </div>
      </el-col>

      <!--  输入框  -->
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-input style="width: 56%;border: 1px solid red"/>
        </div>
      </el-col>

      <!--  icon  -->
      <el-col :span="3">
        <div class="grid-content bg-purple">

        </div>
      </el-col>

      <!--  头像  -->
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-avatar/>
        </div>
      </el-col>

      <!--  名称、在线状态  -->
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-avatar/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

</script>

<style scoped>
.header-main {
  border: 1px solid red;
  height: 10%;
  background-color: #f0fcff;
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
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
